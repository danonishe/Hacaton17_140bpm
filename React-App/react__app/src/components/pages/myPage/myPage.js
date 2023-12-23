import React from "react";
import styles from "./myPage.module.scss";
export default function MyPage() {
  return (
    <main className={styles.MyPage}>
      <div className={styles.title}>
        <h3>Личный кабинет</h3>
      </div>
      <div className={styles.MyPage_inner}>
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
    </main>
  );
}
