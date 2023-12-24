import React from 'react';
import styles from "./Tinder.module.scss"
import Slider from './sviper/sviper';

export default function Tinder() {
    return (
        <div className={styles.TinderMain}>
            
            <img className={styles.card__tindBg} src='./img/tinder/bgTind.png'></img>
            <Slider/>
      
        </div >

        


    )
    
}
