import React from 'react';
import css from '../styles/Begin.module.css';
import njayo from '../assets/beginnjayo.mp4';
import { Link } from 'react-scroll';

const OpeningSection = () => {
  return (
    <div className={css.openingContainer}>
      <video autoPlay  muted className={css.backgroundVideo}>
        <source src={njayo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={css.overlay}></div>
      
       
      
    </div>
  );
};

export default OpeningSection;
