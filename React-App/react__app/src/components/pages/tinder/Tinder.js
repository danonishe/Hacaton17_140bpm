import React from 'react';
import styles from "./Tinder.module.scss"
export default function Tinder() {
   
    return (
    <div>
         <div className={styles.tinder__bg} >
            
            <img className={styles.card__tindBg} src='./img/tinder/bgTind.png'></img>
            <div className={styles.card__tind}>
                <img className={styles.card__tindimgPlase} src='./img/tinder/faina.jpeg'></img>
                <div className={styles.infoCard}>
                    <p className={styles.title}>Память Фаине!</p>
                    <p className={styles.Subtitle}>В этом году у уроженки города Таганрога юбилей. В честь этого вечером будет концерт с труппой театра.</p>
                    <button className="btn btn-primary">Маршрут</button>
                </div>
            </div>
        </div>
        <div className={styles.tinder__bg}>
            
            <img className={styles.card__tindBg} src='./img/tinder/bgTind.png'></img>
            <div className={styles.card__tind}>
                <img className={styles.card__tindimgPlase} src='./img/tinder/faina.jpeg'></img>
                <div className={styles.infoCard}>
                    <p className={styles.title}>Память Фаине!</p>
                    <p className={styles.Subtitle}>В этом году у уроженки города Таганрога юбилей. В честь этого вечером будет концерт с труппой театра.</p>
                    <button className="btn btn-primary">Маршрут</button>
                </div>
            </div>
        </div>
        <div className={styles.tinder__bg}>
            
            <img className={styles.card__tindBg} src='./img/tinder/bgTind.png'></img>
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
       

    )

}
