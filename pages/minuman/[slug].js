import Layout from '../../components/Layout';
import { client, urlFor } from '../../lib/client';
import Image from 'next/image';
import css from '../../styles/Minuman.module.css';
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from '../../assets/arrowRight.png';
import { useState } from 'react';
import { useStore } from '../../store/store';
import toast, { Toaster } from 'react-hot-toast';

// Pastikan path import schema minuman sesuai dengan struktur proyek Anda
import minuman from '../../sanity/schemas/minuman';
export default function Minuman({ minuman }) {
    const src = urlFor(minuman.image).url();
    const [quantity, setQuantity] = useState(1);
  
    const handleQuantity = (type) => {
      setQuantity((prev) => (type === 'inc' ? prev + 1 : prev > 1 ? prev - 1 : prev));
    };
  
    // add to cart function
    const addMinumanToCart = useStore((state) => state.addMinuman);
    const addToCart = () => {
      addMinumanToCart({ ...minuman, price: minuman.price, quantity });
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
            <span>{minuman.name}</span>
            <span>{minuman.details}</span>
            <span>Rp {minuman.price}</span>
  
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
          </div>
          <Toaster />
        </div>
      </Layout>
    );
  }
  
  export async function getStaticPaths() {
    const paths = await client.fetch(
      `*[_type=="minuman" && defined(slug.current)][].slug.current`
    );
  
    return {
      paths: paths.map((slug) => ({ params: { slug } })),
      fallback: 'blocking',
    };
  }
  
  export async function getStaticProps(context) {
    const { slug = '' } = context.params;
    const minuman = await client.fetch(
      `*[_type=="minuman" && slug.current == '${slug}'][0]`
    );
    return {
      props: {
        minuman,
      },
    };
  }
  