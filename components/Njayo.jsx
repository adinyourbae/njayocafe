// components/VideoBackground.js
import React from 'react';
import Njayo from  "../assets/njayocafe.mp4"
import aboutYou from "../assets/aboutu.mp3"
import css from "../styles/Video.module.css"


const NjayoCafe = () => {
  return (
    <div className={css.main}>
      <video autoPlay loop muted playsInline>
        <source src={Njayo} type="video/mp4" width={20} height={20}/>
        Your browser does not support the video tag.
      </video>
      <div className={css.content}>
                <h1>Njayo Cafe</h1>
                <p> Mau Diantar Kemana Mas Pesanannya ??</p>
            </div>
      <audio>
        <source src={aboutYou} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default NjayoCafe;
