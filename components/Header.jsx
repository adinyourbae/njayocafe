import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import { UilShoppingBag, UilReceipt } from '@iconscout/react-unicons'
import { useStore } from '../store/store'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function Header() {
    const [Order, setOrder] = useState("")

    useEffect(() => {
        setOrder(localStorage.getItem("order"));
    }, [])
    const items = useStore((state) => state.cart.pizzas.length)
    return (
        <div className={css.header}>
            {/* logo side */}
            <div className={css.logo}>

                <span>Njayo Food</span>
            </div>

            {/* menu side*/}
            <ul className={css.menu}>
                <li>
                    <Link href="../">Home</Link>
                </li>
                <li>
                    <Link href='/kategori'>Menu</Link>
                </li>
                <li>
                    <Link href='/about'>About Us</Link>
                </li>
                
            </ul>


            {/* right side*/}
            <div className={css.rightSide}>
            <div className={css.logout}>

                <button>
                    <Link href='/login/page'>Logout</Link>
                </button>
                </div>
                <Link href='/cart'>
                    <div className={css.cart}>
                        <UilShoppingBag size={35} color="white" />
                        <div className={css.badge}>{items}</div>
                    </div>
                </Link>

                {Order && (
                    <Link href={`/order/${Order}`}>
                        <div className={css.cart}>
                            <UilReceipt size={35} color="white" />
                            {Order != "" && <div className={css.badge}>1</div>}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
};