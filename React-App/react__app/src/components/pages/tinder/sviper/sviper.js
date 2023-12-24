import React, { useEffect, useState } from "react";
import styles from "./sviper.module.scss";
// core version + navigation, pagination modules:
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLocation } from "react-router";

export default function Slider() {
  // init Swiper:
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
    });
  }, []);

  const location = useLocation();
  const [myCoor, setMyCoor] = useState(0);
  useEffect(() => {
    // Получение текущих координат
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setMyCoor([latitude, longitude]);
      },
      (error) => {
        console.log("Ошибка при получении координат", error);
      }
    );
  }, []);

  console.log("koor", [myCoor[0], myCoor[1]]);
  console.log("funMarshrut", location.state?.data);
  function funMarshrut() {
    console.log("koor", [myCoor[0], myCoor[1]]);

    const pointB = [47.21066, 38.93363]; // координаты точки А
    const pointA = [myCoor[0], myCoor[1]]; // координаты точки Б
    const url = ` https://yandex.ru/maps/?rtext=${pointA}~${pointB}&rtt=auto`;

    window.open(url, "_blank");
  }
  // init Swiper:
  return (
    <div
      className="swiper"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        className="swiper-wrapper"
        style={{
          position: "relative",
          zIndex: "5",
          width: "85%",
          height: "480px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          marginTop: "45%",
        }}
      >
        <div className="swiper-slide">
          <div className={styles.card__tind}>
            <img
              className={styles.card__tindimgPlase}
              src="./img/tinder/faina.jpeg"
            ></img>
            <div className={styles.infoCard}>
              <p className={styles.title}>Память Фаине!</p>
              <p className={styles.Subtitle}>
                В этом году у уроженки города Таганрога юбилей. В честь этого
                вечером будет концерт с труппой театра.
              </p>
              <button onClick={funMarshrut} className="btn btn-primary">
                Маршрут
              </button>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className={styles.card__tind}>
            <img
              className={styles.card__tindimgPlase}
              src="./img/tinder/faina.jpeg"
            ></img>
            <div className={styles.infoCard}>
              <p className={styles.title}>Память Фаине!</p>
              <p className={styles.Subtitle}>
                В этом году у уроженки города Таганрога юбилей. В честь этого
                вечером будет концерт с труппой театра.
              </p>
              <button className="btn btn-primary">Маршрут</button>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className={styles.card__tind}>
            <img
              className={styles.card__tindimgPlase}
              src="./img/tinder/faina.jpeg"
            ></img>
            <div className={styles.infoCard}>
              <p className={styles.title}>Память Фаине!</p>
              <p className={styles.Subtitle}>
                В этом году у уроженки города Таганрога юбилей. В честь этого
                вечером будет концерт с труппой театра.
              </p>
              <button className="btn btn-primary">Маршрут</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
