// components/Minuman.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import css from '../styles/Minuman.module.css';
import searchIcon from '../assets/search.svg';

export default function Minuman({ minuman }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMinuman, setFilteredMinuman] = useState(minuman);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const filtered = minuman.filter((minuman) =>
      minuman.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMinuman(filtered);
  };

  return (
    <div className={css.container}>
      <div className={`${css.heading} ${loaded ? css.loaded : ''}`}>
        <span>Minuman</span>
        <div className={`${css.searchContainer} ${loaded ? css.loaded : ''}`}>
          <input
            type="text"
            placeholder="Cari Minuman..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={css.searchInput}
          />
          <Image src={searchIcon} alt="Search" width={20} height={20} className={css.searchIcon} />
        </div>
      </div>

      <div className={css.menu}>
        {filteredMinuman.map((minuman, id) => {
          const src = urlFor(minuman.image).url();
          return (
            <div className={`${css.item} ${loaded ? css.loaded : ''}`} key={id}>
              <Link href={`./minuman/${minuman.slug.current}`}>
                <div className={css.imageWrapper}>
                  <Image loader={() => src} src={src} alt="" objectFit="cover" layout="fill" />
                </div>
              </Link>
              <span style={{ fontFamily: 'serif' }}>{minuman.name}</span>
              <span style={{ fontFamily: 'serif', color: 'green' }}>Rp {minuman.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
