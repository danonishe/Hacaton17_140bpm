import React from "react";
import styles from "./myPage.module.scss";
export default function MyPage(props) {
  return (
    <main className={styles.MyPage}>
      <div className={styles.title}>
        <h3>Личный кабинет</h3>
      </div>
      <div className={styles.MyPage_inner}>
        <img
          onClick={() => props.hendelclick()}
          className={styles.close}
          width={16}
          height={16}
          src="./img/map/close.png"
          alt="111"
        />
        <div className={styles.MyPage_inner_box}>
          <div className={styles.foto}>
            <img
              className={styles.foto1}
              width={64}
              src="./img/map/icon2.png"
              alt="111"
            ></img>
            <img
              className={styles.foto2}
              src="./img/map/camera.svg"
              alt="111"
            ></img>
          </div>

          <div>
            <span className={styles.name}>imaginarium</span>
            <span>tayka@gmail.com</span>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.MyPage_inner}>
        <div className={styles.MyPage_inner_box}>
          <div className={styles.foto}>
            <img
              className={styles.foto1}
              width={64}
              src="./img/map/rating.png"
              alt="111"
            ></img>
          </div>

          <div>
            <span className={styles.name}>14 уровень</span>
            <span>900/1000 до 15 уровня</span>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.inp}>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <div className={styles.inp_text}>Передача геоданных</div>
        <div className={styles.bottom}>
          <div className={styles.bottom_inner}>
            <div className={styles.bottom_inner_box}>
              Политика конфиденциальности
            </div>
            <div className={styles.bottom_inner_box}>Условия пользования</div>
            <div className={styles.bottom_inner_box}>Выйти из аккаунта</div>
          </div>
        </div>
      </div>
    </main>
  );
}
