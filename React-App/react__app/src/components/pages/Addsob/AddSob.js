import React, { useState } from "react";
import styles from "./AddSob.module.scss";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AddSob() {
    let navigate = useNavigate();
    function handleRiderect() {
        navigate("/HomePage");
      }
    const [description, setDescriptio] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [date, setdate] = useState('');
    const [adress, setadress] = useState('');

    const handleReg = () => {
        const data = {
            name: nameValue,
            description: description,
            date: date,
            adress: adress
        };
        handleRiderect()
        // //  Axis запрос
        // console.log(data);
        // axios.post("https://ee9d-95-174-102-182.ngrok-free.app/...", data)
        //     .then(response => {
        //         console.log("добавление прошло успешно");
        //     })
        //     .catch(error => {
        //         console.log("Error message:", error);
        //     });
    };

    return (
        <div style={{display:"block"}}>
        <div className={styles.add}>
            <div className={styles.title}>
                <p className='font-impact'>Добавьте мероприятие</p>
            </div>
            <div className={styles.input__block__sit}>
                <div>
                    <div className={styles.input__block}>
                        <input placeholder="Название" className="form-control" value={nameValue} onChange={e => setNameValue(e.target.value)} type="text" />
                    </div>
                    <div className={styles.input__block}>
                        <input placeholder="Описание" className="form-control" value={description} onChange={e => setDescriptio(e.target.value)} type="text" />
                    </div>
                    <div className={styles.input__block}>
                        <input placeholder="Дата" className="form-control" value={date} onChange={e => setdate(e.target.value)} type="text" />
                    </div>
                    <div className={styles.input__block}>
                        <input placeholder="Адрес" className="form-control" value={adress} onChange={e => setadress(e.target.value)} type="text" />
                    </div>
                    <button type="button" className="btn btn-primary" >Или выбрать адрес на карте</button>
                    <p style={{ color: "#ADB5BD", marginBottom:"0px" }}>Фотографии</p>
                    <div className={styles.InputFile}>
                        <div className={styles.formFile}>
                           <img src="./img/plus.svg"/>
                        </div>
                        <div className={styles.formFile}>
                           <img src="./img/plus.svg"/>
                        </div>
                        <div className={styles.formFile}>
                           <img src="./img/plus.svg"/>
                        </div>
                        <div className={styles.formFile}>
                           <img src="./img/plus.svg"/>
                        </div>
                    </div>
                </div>
               

            </div>
            <div className={styles.btn}>
            <button type="button" className="btn btn-success" onClick={handleReg} >Всё готово</button>
            
            </div>
            
        </div>
         <div className={styles.line}>
         <div className={styles.box}>
           <Link to={"/HomePage"}>
             <img src="./img/wash/wash2g.svg" alt="img"></img>
           </Link>
           <span>Что рядом?</span>
         </div>
         <div className={styles.box}>
 
           <img src="./img/wash/wash3f.svg" alt="img"></img>
 
           <span>Маршрут</span>
         </div>
 
         <div className={styles.box}>
         <Link to={"/AddSob"}>
           <img src="./img/wash/wash4.svg" alt="img"></img>
           </Link>
           <span>Добавить</span>
         </div>
         <div className={styles.box}>
           <Link to={"/Favorites"}>
             <img src="./img/wash/wash5.svg" alt="img"></img>
           </Link>
           <span>Избранное</span>
         </div>
       </div>
       </div>
    );
}

export default AddSob;
