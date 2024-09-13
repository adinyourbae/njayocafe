import { useStore, addDeliveryCost } from "../store/store";
import Layout from "../components/Layout"
import css from '../styles/Cart.module.css'
import toast, { Toaster } from "react-hot-toast"
import OrderModal from "../components/OrderModal"
import { useState } from "react"
import Image from "next/image"
import { urlFor } from "../lib/client"
import { useRouter } from "next/router"
export default function Cart() {
    const CartData = useStore((state) => state.cart);
    const removePizza = useStore((state) => state.removePizza);
    const [PaymentMethod, setPaymentMethod] = useState(null);
    const router = useRouter();
  
    const handleRemove = (i) => {
      removePizza(i);
      toast.error('Item Removed');
    };
  
    const total = () => CartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);
  
    const totalWithDeliveryCost = () => {
      // Menambahkan ongkos kirim ke total
      const total = CartData.pizzas.reduce((a, b) => a + b.quantity * (b.price + (b.deliveryCost || 0)), 0);
      return total;
    };
  
    const handleOnDelivery = () => {
      setPaymentMethod(0);
      typeof window !== 'undefined' && localStorage.setItem('total', totalWithDeliveryCost());
    };
  
    const handleCheckout = async () => {
      typeof window !== 'undefined' && localStorage.setItem('total', totalWithDeliveryCost());
      setPaymentMethod(1);
      try {
        const response = await fetch('api/stripe', {
          method: "POST",
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify(CartData.pizzas),
        });
  
        if (!response.ok) {
          console.error("Error during checkout:", response.status, response.statusText);
          // Handle error cases, if needed
          return;
        }
  
        const data = await response.json();
        // Periksa apakah data.url sudah benar sesuai struktur respons yang diharapkan
  
        // Pastikan Anda mengimpor dan menggunakan 'toast' dengan benar
        toast.loading("Redirecting...");
        router.push(data.url);
      } catch (error) {
        console.error("Error during checkout:", error);
        // Handle error cases, if needed
      }
    };
  
    return (
      <Layout>
        <div className={css.container}>
          {/* details */}
          <div className={css.details}>
            <table className={css.table}>
              <thead>
                <th>Pesanan</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Quantity</th>
                <th>Ongkos Kirim</th>
                <th>Total</th>
                <th></th>
              </thead>
              <tbody className={css.tbody}>
                {CartData.pizzas.length > 0 &&
                  CartData.pizzas.map((pizza, i) => {
                    const src = urlFor(pizza.image).url();
  
                    return (
                      <tr key={i}>
                        <td className={css.imageTd}>
                          <Image
                            loader={() => src}
                            src={src}
                            alt=""
                            objectFit="cover"
                            width={85}
                            height={85}
                          />
                        </td>
                        <td>{pizza.name}</td>
                        <td>{pizza.price}</td>
                        <td>{pizza.quantity}</td>
                        <td>{pizza.deliveryCost || 0}</td>
                        <td>{pizza.price * pizza.quantity + (pizza.deliveryCost || 0)}</td>
                        <td
                          style={{
                            color: 'var(--themeRed)',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleRemove(i)}
                        >
                          X
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
  
          {/* summary */}
          <div className={css.cart}>
            <span>Cart</span>
            <div className={css.CartDetails}>
              <div>
                <span>Items</span>
                <span>{CartData.pizzas.length}</span>
              </div>
              <div>
                <span>Total</span>
                <span>Rp {totalWithDeliveryCost()}</span>
              </div>
            </div>
  
            <div className={css.buttons}>
              <button className="btn" onClick={handleOnDelivery}>
                Pay on Delivery
              </button>
              <button className="btn" onClick={handleCheckout}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
        <Toaster />
  
        {/* Model */}
        <OrderModal
          opened={PaymentMethod === 0}
          setOpened={setPaymentMethod}
          PaymentMethod={PaymentMethod}
        />
      </Layout>
    );
  }