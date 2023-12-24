import styles from './Registration.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../ui/Header/Header';
import React, { useState } from 'react';
import axios from 'axios';
export default function Registration() {
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    let navigate = useNavigate();
    function handleRiderect() {
        navigate("/Interests");
      }
    const handleRegistration = () => {
        // ... (ваша логика обработки регистрации)
        if (passwordValue !== confirmPasswordValue) {
            console.log("Пароли не совпадают");
            return;
        }

        // Создайте объект с данными для отправки
        const data = {
            login: emailValue,
            name: nameValue,
            password: passwordValue
        };

        // Выполните Axis запрос
        console.log(data);
        axios.post("https://2305-95-174-102-182.ngrok-free.app/auth/register", data)
            .then(response => {
                console.log("Авторизация прошла успешно");
                const myToken = response.data.token;
                console.log(myToken);
                // После успешной регистрации и получения токена
                localStorage.setItem('token', myToken);

                handleRiderect();
              
            })
            .catch(error => {
                console.log("нет", error);
            });
    };
   


    return (


        <div className={styles.mian}>
            <Header />

            <div className={styles.title}>
                <p className='font-impact'>ПЕРЕДВИГАЙТЕСЬ БОЛЬШЕ С 140BPM</p>
            </div>
            <div className={styles.Block__aut}>
                <div className={styles.Block__aut__inner}>
                    <div className={styles.input__block}>
                        <input placeholder="Почта" className="form-control" value={emailValue} onChange={e => setEmailValue(e.target.value)} type="text" />                </div>
                    <div className={styles.input__block}>
                        <input placeholder="Имя" className="form-control" value={nameValue} onChange={e => setNameValue(e.target.value)} type="text" />                </div>
                    <div className={styles.input__block}>
                        <input placeholder="Пароль" className="form-control" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} type="password" />                </div>
                    <div className={styles.input__block}>
                        <input placeholder="Подтвердите пароль" className="form-control" value={confirmPasswordValue} onChange={e => setConfirmPasswordValue(e.target.value)} type="password" />                </div>
                    <div className={styles.block__btn}>
                        <button type="button" className="btn btn-success" onClick={handleRegistration}>Зарегистрироваться</button>                </div>
                    <div className={styles.firstStart}>
                        <Link className={styles.firstStartText} to={"./.."}> <p>Уже зарегистрирован</p></Link>
                    </div>
                </div>
            </div>
            <img src="./img/nlo.svg" className={styles.imgFoot} alt='nlo'></img>
        </div>

    )

}
