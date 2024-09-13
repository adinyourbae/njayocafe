import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51OaDHSDujPjZO7GDN20QAAqzP4Tt6lPwvyE5ieYWcexOWNai2Q387BpAPYaOmUYKwHAtSKxfoc1uSI79dFamxGT7003czC96uc");

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: "payment",
                payment_method_types: ['card'],
                line_items: req.body.map((item) => {
                    const img = item.image.asset._ref;

                    const newImage = img.replace(
                        "image-",
                        "https://cdn.sanity.io/images/ai326fkz/production/"
                    )
                    .replace('-jpg ', '.jpg');

                    return {
                        price_data: {
                            currency: 'idr', // Ganti dengan IDR jika menggunakan konversi manual
                            product_data: {
                                name: item.name,
                                images: [newImage],
                            },
                            unit_amount: item.price * 100
                        },
                        adjustable_quantity: {
                            enabled: false,
                        },
                        quantity: item.quantity,
                    };
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cart`
            };

            // Konversi manual ke IDR (contoh rate 14,000 IDR per 1 USD)
            const exchangeRate = 14000;
            params.line_items.forEach((item) => {
                if (item.price_data.currency === 'usd') {
                    item.price_data.currency = 'idr';
                    item.price_data.unit_amount *= exchangeRate;
                }
            });

            // Checkout session
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session);

        } catch (error) {
            console.error("Error during checkout:", error);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method not allowed");
    }
}
