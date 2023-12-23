import React from 'react';
import styles from './Registration.module.scss';
import { Link } from 'react-router-dom';
import Header from '../../ui/Header/Header';
export default function Registration() {

    return (
        <div className={styles.mian}>
        <Header/>
      
        <div class={styles.title}>
                <p className='font-impact'>ПЕРЕДВИГАЙТЕСЬ БОЛЬШЕ С 140BPM</p>
            </div>
        <div className={styles.Block__aut}>
            <div className={styles.Block__aut__inner}>
                <div className={styles.input__block}>
                    <input placeholder="Логин" class="form-control" v-model="loginValue" type="text" />
                </div>
                <div className={styles.input__block}>
                    <input placeholder="Почта" class="form-control" v-model="loginValue" type="text" />
                </div>
                <div className={styles.input__block}>
                    <input placeholder="Имя" class="form-control" v-model="loginValue" type="text" />
                </div>
                <div className={styles.input__block}>
                    <input placeholder="Паароль" class="form-control" v-model="loginValue" type="text" />
                </div>
                <div className={styles.input__block}>
                    <input placeholder="Подтвердите пароль" class="form-control" v-model="passwordValue" type="password" />
                </div>
                <div class={styles.block__btn}>
                    <button type="button" class="btn btn-success">Зарегестрироваться</button>
                </div>
                <div className={styles.firstStart}>
                    <Link className={styles.firstStartText} to={"./../Authorization"}> <p>Уже зарегистрирован</p></Link>
                </div>
            </div>
        </div>
        <img src="./img/nlo.svg" className={styles.imgFoot} alt='nlo'></img>
        </div>

    )

}
