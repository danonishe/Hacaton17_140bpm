import React from 'react';
import styles from "./sviper.module.scss"
// core version + navigation, pagination modules:
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function Slider() {
    // init Swiper:
    const swiper = new Swiper('.swiper', {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
    })
    return (
        <div className="swiper" style={{display: "flex", justifyContent: "center"}}>

       
            <div className="swiper-wrapper" style={{position: "relative",  zIndex:"5",  width:"85%", height:"480px", backgroundColor:"#fff", borderRadius:"12px", marginTop:"45%"}}>
                <div  className="swiper-slide">
                    <div>

                        <div className={styles.card__tind}>
                            <img className={styles.card__tindimgPlase} src='./img/tinder/faina.jpeg'></img>
                            <div className={styles.infoCard}>
                                <p className={styles.title}>Память Фаине!</p>
                                <p className={styles.Subtitle}>В этом году у уроженки города Таганрога юбилей. В честь этого вечером будет концерт с труппой театра.</p>
                                <button className="btn btn-primary">Маршрут</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="swiper-slide">
                    <div>

                   <div className={styles.card__tind}>
                            <img className={styles.card__tindimgPlase} src='./img/tinder/faina.jpeg'></img>
                            <div className={styles.infoCard}>
                                <p className={styles.title}>Память Фаине!</p>
                                <p className={styles.Subtitle}>В этом году у уроженки города Таганрога юбилей. В честь этого вечером будет концерт с труппой театра.</p>
                                <button className="btn btn-primary">Маршрут</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="swiper-slide">
                    <div>
                        <div className={styles.card__tind}>
                            <img className={styles.card__tindimgPlase} src='./img/tinder/faina.jpeg'></img>
                            <div className={styles.infoCard}>
                                <p className={styles.title}>Память Фаине!</p>
                                <p className={styles.Subtitle}>В этом году у уроженки города Таганрога юбилей. В честь этого вечером будет концерт с труппой театра.</p>
                                <button className="btn btn-primary">Маршрут</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
