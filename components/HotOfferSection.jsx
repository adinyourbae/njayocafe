import React from 'react';
import Image from 'next/image';
import css from '../styles/HotOfferSection.module.css';
import foodImage1 from '../assets/chhicken.jpg';
import foodImage2 from '../assets/anggur.jpg';
import foodImage3 from '../assets/roti.jpg';
import Link from 'next/link';

const HotOfferSection = () => {
  return (
    <section className={css.hotOfferSection}>
      <span>
Penawaran Menarik untuk Anda!</span>
      <div className={css.columnWrapper}>
        <div className={`${css.column} ${css.slideInLeft}`}>
          <div className={css.imageWrapper}>

            <Link href='/kategori'>
            <Image src={foodImage1} alt="Food 1" layout="fill" objectFit="cover" />
            </Link>
          </div>
          <span>Lihat Lebih Banyak</span>
        </div>
        <div className={`${css.column} ${css.slideInUp}`}>
          <div className={css.imageWrapper}>
            <Link href='/kategori'>
            <Image src={foodImage2} alt="Food 2" layout="fill" objectFit="cover" />
            </Link>
          </div>
          <span>Lihat Lebih Banyak</span>
        </div>
        <div className={`${css.column} ${css.slideInRight}`}>
          <div className={css.imageWrapper}>
            <Link href='/kategori'>
            <Image src={foodImage3} alt="Food 3" layout="fill" objectFit="cover" />
            </Link>
          </div>
          <span>Lihat Lebih Banyak</span>
        </div>
      </div>
    </section>
  );
};

export default HotOfferSection;
