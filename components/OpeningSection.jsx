import React from 'react';
import css from '../styles/OpeningSection.module.css';
import njayo from '../assets/njayocafe.mp4';
import { Link } from 'react-scroll';

const OpeningSection = () => {
  return (
    <div className={css.openingContainer}>
      <div className={css.overlay}></div>
      <div className={`${css.content} ${css.animateContainer}`}>
        <div className={`${css.leftColumn} ${css.slideInLeft}`}>
          <h1>Mau Diantar</h1>
          <h1>Kemana Pesanannya </h1>
          <h1>Hari ini?</h1>
          <p>Temukan berbagai pilihan makanan</p>
          <p>dan minuman lezat di Our Menu</p>
          <Link href='/menu'> 

          <button className={css.orderButton}>Pesan Sekarang</button>
          </Link>
        </div>
        <div className={`${css.rightColumn} ${css.slideInRight}`}>
          <h2>Menu Makanan</h2>
          <p>Terdapat berbagai macam menu makanan lezat untuk Anda pilih.</p>
          <h2>Cara Pemesanan</h2>
          <p>Pesan makanan dengan mudah melalui situs web atau aplikasi kami.</p>
          <h2>Pengiriman</h2>
          <p>Nikmati kemudahan pengiriman makanan hingga ke tempat Anda.</p>
        </div>
      </div>
    </div>
  );
};

export default OpeningSection;
