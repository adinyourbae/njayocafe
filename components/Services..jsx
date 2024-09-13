import Image from 'next/image'
import  css  from '../styles/Services.module.css'
import s1 from '../assets/s1.png'
import s4 from '../assets/s6.png'
import s3 from '../assets/s3.png'

export default function Services(){
    return(
        <>
        <div className={css.heading}>
            <span>APA YANG KAMI LAYANI</span>
            <span>
Makanan Favorit Anda</span>
            <span>Mitra Pengiriman</span>
        </div>


        {/* features */}
        <div className={css.Services}>





            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s1} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <span>Mudah untuk Memesan</span>
                <span>Anda Hanya perlu beberapa langkah dalam memesan makanan</span>
            </div>

                <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s4} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <span>Pengiriman Yang Cepat</span>
                <span>Pengiriman yang selalu tepat waktu bahkan lebih cepat</span>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s3} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <span>Kualitas Terbaik</span>
                <span>Tidak hanya cepat bagi kami, kualitas juga nomor satu</span>
            </div>
        </div>
        </>
    )
}