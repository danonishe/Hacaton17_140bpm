import React, { useState } from 'react';
import styles from './Authorization.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../ui/Header/Header';
import axios from 'axios';

export default function Authorization() {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    let navigate = useNavigate();
    function handleRiderect() {
        navigate("/HomePage");
      }
    const handleLogin = () => {
        // Создайте объект с данными для отправки
         const data = {
            login: loginValue,
            password: passwordValue,
        };
        console.log(data);
      axios.post("https://ee9d-95-174-102-182.ngrok-free.app/auth/login", data)
        .then(response => {
          console.log("Авторизация прошла успешно");
          const myToken = response.data.token;
          // После успешной регистрации и получения токена
          localStorage.setItem('token', myToken);

          handleRiderect();
        })
        .catch(error => {
          console.log("нет", error);
        });
    }

    return (
        <div className={styles.mian}>
            <Header/>
      
        <div className={styles.title}>
                <p className='font-impact'>ПЕРЕДВИГАЙТЕСЬ БОЛЬШЕ С 140BPM</p>
            </div>
        <div className={styles.Block__aut}>
            <div className={styles.Block__aut__inner}>
                <div className={styles.input__block}>
                <input placeholder="Логин" className="form-control" value={loginValue} onChange={e => setLoginValue(e.target.value)} type="text" />                </div>
                <div className={styles.input__block}>
                <input placeholder="Пароль" className="form-control" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} type="password" />                </div>
                <div className={styles.block__btn}>
                <button type="button" className="btn btn-success" onClick={handleLogin}>Войти</button>
                </div>
                <div className={styles.firstStart}>
                    <Link  className={styles.firstStartText} to={"./../Registration"}> <p >Впервые на сайте?</p></Link>
                </div>
            </div>
        </div>
        <img src="./img/nlo.svg" className={styles.imgFoot} alt='nlo'></img>
        </div>

    )

}
