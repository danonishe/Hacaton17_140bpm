import React from 'react';
import styles from './Authorization.module.scss';

export default function Main() {

    return (
        <div className={styles.Block__aut}>
            <div className={styles.Block__aut__inner}>
                <div className={styles.input__block}>
                    <input placeholder="Логин" class="form-control" v-model="loginValue" type="text"/>
                </div>
                <div className={styles.input__block}>
                    <input placeholder="Пароль" class="form-control" v-model="passwordValue" type="password" />
                </div>
                <div class={styles.block__btn}>
                    <button type="button" class="btn btn-success">Войти</button>
                </div>
                <div className={styles.firstStart}>
                    <p>Впервые на сайте?</p>
                </div>
            </div>
        </div>

    )

}
