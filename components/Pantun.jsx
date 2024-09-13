import React from 'react';
import css from '../styles/OpeningSection.module.css';
import njayo from '../assets/service.mp4';

const Pantun = () => {
  return (
    <div className={css.openingContainer}>
      <video autoPlay loop muted className={css.backgroundVideo}>
        <source src={njayo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
  );
};

export default Pantun;
