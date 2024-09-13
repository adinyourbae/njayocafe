// components/Menu.js
import React, { useEffect, useState } from 'react';
import OpeningSection from './OpeningSection';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import css from '../styles/Menu.module.css';
import searchIcon from '../assets/search.svg';

export default function Menu({ pizzas }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPizzas, setFilteredPizzas] = useState(pizzas);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const filtered = pizzas.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPizzas(filtered);
  };

  return (
    <div className={css.container}>
      <div className={`${css.heading} ${loaded ? css.loaded : ''}`}>
        <span>Our Menu</span>
        <span>AYOO MASS BURUAN PESANN!!!</span>
        <div className={`${css.searchContainer} ${loaded ? css.loaded : ''}`}>
          <input
            type="text"
            placeholder="Cari Makanan..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={css.searchInput}
          />
          <Image src={searchIcon} alt="Search" width={20} height={20} className={css.searchIcon} />
        </div>
      </div>

      <div className={css.menu}>
        {filteredPizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={`${css.pizza} ${loaded ? css.loaded : ''}`} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image loader={() => src} src={src} alt="" objectFit="cover" layout="fill" />
                </div>
              </Link>
              <span style={{ fontFamily: 'serif' }}>{pizza.name}</span>
              <span style={{ fontFamily: 'serif', color: 'green' }}>Rp {pizza.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
