// components/CategorySection.js
import React from 'react';
import css from "../styles/CategorySection.module.css" // Buat file CSS untuk styling
import Image from "next/image"
import { urlFor } from "../lib/client"
import Link from "next/link"

const CategorySection = ({ title, onButtonClick }) => {
  return (
    
    <div className={css.container}>
        <div className={css.heading}>
            <span>Makanan</span>
            </div>


        <div className={css.menu}>

            {/* pizzas */}
            {pizzas.map((pizza,id)=> {

                const src = urlFor(pizza.image).url()
                return(
                    <div className={css.pizza} key={id}>
                    <Link href={`./pizza/${pizza.slug.current}`}>

                    <div className={css.ImageWrapper}>
                    <Image loader = {()=> src} src={src} alt=''
                        objectFit="cover"
                        layout="fill"
                    />

                    </div>
                      </Link>
                    <span>{pizza.name}</span>
                    <span>Rp {pizza.price[1]}</span>
                </div>
                )
            })}
        </div>
        </div>
    )
}

export default CategorySection;
