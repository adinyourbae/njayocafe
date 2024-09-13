import {UilFacebook, UilInstagram} from "@iconscout/react-unicons"
import Logo from '../assets/Logo.png'
import Image from "next/image"
import css from '../styles/Footer.module.css'
export default function Footer(){
    return(
        <div className={css.container}>
            <span>ALL RIGHT RESERVED</span>
            <div className={css.social}>
                <UilFacebook size={45}/>
                <UilInstagram size={45}/>
            </div>

            <div className={css.logo}>
                <Image src={Logo} alt = "" width={50} height={50}/>
                <span>Njayo Food</span>
            </div>

        </div>
    )
};