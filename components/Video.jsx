// components/VideoBackground.js
import React from 'react';
import skyblue from '../assets/skyblue.mp4';
import aboutYou from '../assets/aboutu.mp3';
import css from '../styles/Video.module.css';

const VideoBackground = () => {
  return (
    <div className={css.main}>
      <video autoPlay loop muted playsInline>
        <source src={skyblue} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={css.overlay}></div>
      <div className={css.contentContainer}>
        <div className={css.leftContent}>
          <h1>Welcome</h1>
          <p>To Our Food Delivery Service</p>
          <p>
            Telepon: 0857-9552-8923
          </p>
          <p>
            Jam:
            Tutup ⋅ Buka pukul 15.00
          </p>
        </div>
        <div className={css.rightContent}>
          <h2>About Us</h2>
          <p>
            Alamat: Jl. Raya Bojonggede - Kemang (Bomang), Kalisuren, Kec. Tajur Halang, Kabupaten Bogor, Jawa Barat 16320


          </p>
          <div>

          <p>Di pagi hari yang cerah,</p>
          <p>Kucing bermain di halaman rumah</p>
          <p>Lompat-lompat berputar-putar</p>
          <p>Lucu sekali, membuat hati ceria</p>
          </div>
        </div>
      </div>
      <audio>
        <source src={aboutYou} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default VideoBackground;
