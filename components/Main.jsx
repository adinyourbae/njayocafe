import React from 'react';
import css from "../styles/Main.module.css"
const Main = () => {
  return (
    <div className={css.main}>
      <video autoPlay loop muted>
        <source src="/assets/skyblue.mp4" type="video/mp4" />
      </video>
      <span>This is New</span>
    </div>
  );
};

export default Main;
