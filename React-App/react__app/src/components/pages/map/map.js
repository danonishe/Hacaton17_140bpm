import React, { useEffect, useState, useRef } from "react";
import styles from "./map.module.scss";
import Wash from "../Wash/wash";
import MapComponent from "../MapComponent/MapComponent";
import { Link } from "react-router-dom";
import MyPage from "../myPage/myPage";
// import MyMap from "../map/MyMap";

export default function HomePage(props) {
  const [isMyPage, setIsMyPage] = React.useState(false);
  function hendelclick() {
    console.log(isMyPage);
    setIsMyPage(!isMyPage);
  }

  useEffect(() => {
    // Запрещаем прокрутку на странице при монтировании компонента
    document.body.style.overflow = "hidden";
    // Возвращаем прокрутку при размонтировании компонента
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Запросим от бэка

  const [idContent, setIdContetnt] = useState(0);

  const mapRef = useRef(0);

  var coordinats = [
    //точки которые берем с бд (координаты и данные об автомойке)
    {
      id: 0,
      x: 47.208208,
      y: 38.937189,
      content: "Память Фаине",
      rating: 4.3,
      adres: "Ул. Автомоячная 1а",
      time: "9-00 до 21-00",
      reyting: "1",
      tel: "79501234541",
    },
  ];

  var time = coordinats[idContent].time;
  var address = coordinats[idContent].adres;
  var name = coordinats[idContent].content;
  var arrPhoto = [];
  var reyting = coordinats[idContent].reyting;
  // }

  // ---------------------------------------

  window.scrollTo(0, 0);
  // document.body.classList.add('body__style');

  const [openMyWash, setOpenMyWash] = useState(false);

  function funOpenWash() {
    setOpenMyWash(true);
    console.log("open");
  }

  const screenHeight = window.screen.height;
  // console.log(screenHeight);
  const Map__Height = screenHeight - 50;

  //кнопка маршрут--------------------------------
  const [marshrut, setMarshrut] = useState(0);

  function funMarshrut() {
    console.log("handleClick", idContent, "koor", [marshrut[1], marshrut[0]]);

    const pointB = [coordinats[idContent].x, coordinats[idContent].y]; // координаты точки А
    const pointA = [marshrut[0], marshrut[1]]; // координаты точки Б
    const url = ` https://yandex.ru/maps/?rtext=${pointA}~${pointB}&rtt=auto`;

    window.open(url, "_blank");
  }
  // =================================

  return (
    <div className={styles.HomePage}>
      {isMyPage && (
        <div className={styles.MyPage}>
          <div className={styles.MyPage_inner}>
            <MyPage hendelclick={hendelclick} />{" "}
          </div>
        </div>
      )}
      {/* иконка лк */}
      <div onClick={() => hendelclick()} className={styles.myIcon}>
        <img src="./img/map/icon1.png" alt="img" />
      </div>

      <div style={{ height: `${Map__Height + "px"}` }} className={styles.map}>
        <MapComponent
          marshrut={marshrut}
          setMarshrut={setMarshrut}
          h={Map__Height}
          mapRef={mapRef}
          coordinats={coordinats}
          setIdContetnt={setIdContetnt}
          funOpenWash={funOpenWash}
        />
      </div>
      <Wash
        coordinats={coordinats[idContent]}
        funMarshrut={funMarshrut}
        time={time}
        address={address}
        name={name}
        arrPhoto={arrPhoto}
        reyting={reyting}
        openMyWash={openMyWash}
        setOpenMyWash={setOpenMyWash}
      />
    </div>
  );
}
