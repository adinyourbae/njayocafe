import Image from 'next/image';
import css from '../styles/Hero.module.css';
import Cherry from '/assets/Cherry.png';
import HeroImage from '/assets/ioio.png';
import { UilPhone } from '@iconscout/react-unicons';
import Link from 'next/link';
import Nasigoreng from '../assets/p2.png';
export default function Hero() {
    return (
        <div className={css.container}>
        
            {/* left side */}
            <div className={css.left}>

                <div className={css.cherryDiv}>
                    <span>Lebih Dari Lebih Cepat</span>
                    <Image src={Cherry} alt="" width={40} height={35} />
                </div>

                <div className={css.heroText}>

                    <span>Jadilah Yang Tercepat</span>
                    <span>Dalam Mengantarkan</span>
                    <span>
                        Makanan Kamu
                    </span>
                </div>
                
                <span className={css.miniText}>
                Misi kami adalah mengisi perut Anda dengan makanan lezat dan
                    dan pengiriman cepat
                </span>
<Link href='/kategori'>

                <button className={css.btn}>
                    Get Started
                </button>
</Link>
            </div>

            {/* right side */}

            <div className={css.right}>

            <Link href='/kategori'>
                <div className={css.ImageContainer}>
                    <Image src={HeroImage} alt=""  layout="intrinsic" />
                </div>
            </Link>

                <div className={css.ContactUs}>
                    <span>Contact Us</span>
                    <div>
                        <UilPhone color='white' />
                    </div>
                </div>

                <div className={css.Pizza}>
                    <div>
                        <Image src={Nasigoreng} alt="" objectFit="cover"
                            layout="intrinsic" />
                    </div>

                    <div className={css.details}>
                        <Link href='/kategori'>
                        <span>Nasi Goreng</span>
                        </Link>

                        <span style={{ color: "var(--themeRed)" }}>
                        Rp</span>
                        <span> 20.000 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}