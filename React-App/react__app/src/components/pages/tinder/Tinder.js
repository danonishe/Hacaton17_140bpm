
import React from 'react';
import styles from "./Tinder.module.scss"
import Slider from './sviper/sviper';
import { Link } from 'react-router-dom';
export default function Tinder() {
    return (
        <div className={styles.TinderMain}>
           
            <img className={styles.card__tindBg} src='./img/tinder/bgTind.png'></img>
            <Slider/>
            <div className={styles.line}>
            <div className={styles.box}>
            <Link to={"/HomePage"}>
              <img src="./img/wash/wash2.svg" alt="img"></img>
              </Link>
              <span>Что рядом?</span>
            </div>
            <div className={styles.box}>
                <img src="./img/wash/wash3.svg" alt="img"></img>

              <span>Маршрут</span>
            </div>

            <div className={styles.box}>
              <img src="./img/wash/wash4.svg" alt="img"></img>
              <span>Добавить</span>
            </div>
            <div className={styles.box}>
              <img src="./img/wash/wash5.svg" alt="img"></img>
              <span>Избранное</span>
            </div>
          </div>
        </div >

        


    )
    
    }