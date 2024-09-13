import Layout from '../../components/Layout';
import { client, urlFor } from '../../lib/client';
import Image from 'next/image';
import css from '../../styles/Pizza.module.css';
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from '../../assets/arrowRight.png';
import { useState } from 'react';
import { useStore } from '../../store/store';
import toast, { Toaster } from 'react-hot-toast';

// Ensure that the import path for the pizza schema is correct based on your project structure
import pizza from '../../sanity/schemas/pizza';

export default function Pizzas({ pizza }) {
  const src = urlFor(pizza.image).url();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    setQuantity((prev) => (type === 'inc' ? prev + 1 : prev > 1 ? prev - 1 : prev));
  };

  // add to cart function
  const addPizzaToCart = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizzaToCart({ ...pizza, price: pizza.price, quantity, deliveryCost: pizza.deliveryCost || 0 });
    toast.success('Added to Cart');
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            alt=""
            src={src}
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>
        {/* right side */}
        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>Rp {pizza.price}</span>

          {/* Quantity counter */}
          <div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuantity('dec')}
              />

              <span>{quantity}</span>

              <Image
                src={RightArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuantity('inc')}
              />
            </div>
          </div>

          {/* button */}
          <div className={`${css.btn} btn`} onClick={addToCart}>
            Add to cart
          </div>

          {/* Display delivery cost if available */}
          {pizza.deliveryCost && (
            <div>
              <span>Delivery Cost</span>
              <span>Rp {pizza.deliveryCost}</span>
            </div>
          )}
        </div>
        <Toaster />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  try {
    const { slug = '' } = context.params;
    const pizzaData = await client.fetch(
      `*[_type=="pizza" && slug.current == '${slug}'][0]`
    );

    if (!pizzaData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        pizza: pizzaData,
      },
    };
  } catch (error) {
    console.error('Error fetching pizza data:', error);
    return {
      props: {
        pizza: null,
      },
    };
  }
}

