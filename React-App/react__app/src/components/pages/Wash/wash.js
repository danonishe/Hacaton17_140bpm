import React, { useState, useRef, useEffect } from "react";
import styles from "./Wash.module.scss";
import { Link, useLocation } from "react-router-dom";

const Wash = ({
  address,
  time,
  name,
  arrPhoto,
  reyting,
  openMyWash,
  setOpenMyWash,
  funMarshrut,
  coordinats,
}) => {
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

  const slides = [];

  const scrollImg = [];
  for (var s = 0; s < slides.length; s++) {
    scrollImg.push({
      key: s,
      value: (
        <div className={styles.scroller__blok} key={s + 100}>
          <img src={slides[s]}></img>
        </div>
      ),
    });
  }

  let [startIndex, setStartIndex] = useState(0);
  const [openInfo, setOpenInfo] = useState(false);

  const handleMenuClick = () => {
    setOpenInfo(!openInfo);
  };
  const endIndex = startIndex + 3;
  const currentSlides = slides.slice(startIndex, endIndex);

  //_----------------------------------------------
  const [screenHeight, setScreenHeight] = useState(window.innerHeight - 60);

  const [position, setPosition] = useState({ x: 0, y: screenHeight });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    setStartPosition({
      // x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
    if (touch.clientY - position.y < 100) {
      setDragging(true);
    }
    //   console.log(touch.clientY- position.y)
  };

  const handleTouchMove = (event) => {
    if (dragging) {
      const touch = event.touches[0];
      setPosition({
        //   x: touch.clientX - startPosition.x,
        y: touch.clientY - startPosition.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    if (position.y > screenHeight - 50) {
      setPosition({
        //   x: touch.clientX - startPosition.x,
        y: screenHeight,
      });
    }
    if (position.y < 250) {
      setPosition({
        //   x: touch.clientX - startPosition.x,
        y: 75,
      });
    }
  };

  const style = {
    width: "100%",
    position: "absolute",
    top: position.y,

    //   userSelect: "none",
  };

  const styleIcon = {
    opacity: 0,
    transition: "all 1s ease-in-out",
    pointerEvents: "none",
  };
  const styleIcon2 = {
    opacity: "60%",
    transition: "all 1s ease-in-out",
  };

  if (openMyWash === true && position.y > window.innerHeight - 80) {
    setPosition({
      y: screenHeight - 75,
    });

    setOpenMyWash(false);
  }
  // console.log("(window.innerHeight",window.innerHeight)

  return (
    <div
      className="open__menu"
      ref={ref}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={style}
    >
      <div className={styles.Wash__info}>
        <div className={styles.Wash_info_title}>
          <div className={styles.line}>
            <div className={styles.box}>
              <img src="./img/wash/wash2.svg" alt="img"></img>
              <span>Что рядом?</span>
            </div>
            <div className={styles.box}>
              <Link to={"/Tinder"}>
                <img src="./img/wash/wash3.svg" alt="img"></img>
              </Link>

              <span>Маршрут</span>
            </div>

            <div className={styles.line_inner}></div>
            <div className={styles.box}>
              <img src="./img/wash/wash4.svg" alt="img"></img>
              <span>Добавить</span>
            </div>
            <div className={styles.box}>
              <Link to={"/Favorites"}>
                <img src="./img/wash/wash5.svg" alt="img"></img>
              </Link>
              <span>Избранное</span>
            </div>
          </div>
          <div className={styles.line2}>
            <img src="./img/wash/wash1.png" alt="img" />
            <div className={styles.name_blok}>
              <span className={styles.name}>Память Фаине!</span>
            </div>
            <div className={styles.body_text}>
              В этом году у уроженки города Таганрога юбилей. В честь этого
              вечером будет концерт с труппой театра.
            </div>
            <div className={styles.body_button}>
              <button
                onClick={funMarshrut}
                type="button"
                className="btn btn-primary"
              >
                <span>Маршрут</span>
              </button>
            </div>
          </div>

          <Link to={"/Tinder"}>
            <div className={styles.body_butbig}>
              <img src="./img/wash/bac1.png" alt="qqq" />

              <div className={styles.body_butbig_text}>
                <img
                  className={styles.body_butbig_img2}
                  src="./img/wash/treugolnic.png"
                  alt="qqq"
                />
                Куда сходить
              </div>
            </div>
          </Link>

          <div className={styles.line2}>
            <div className={styles.body_butbig_img3}>
              <img width={352} src="./img/wash/foto2.png" alt="www" />
            </div>

            <div className={styles.name_blok}>
              <span className={styles.name}>Продолжаем играть!</span>
            </div>
            <div className={styles.body_text}>
              23-24 декабря стартует новый этап соревнования по орентации в
              городе!
            </div>
            <div className={styles.body_button2}>
              <button type="button" className={styles.body_button2_inner}>
                Участвовать
              </button>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default Wash;
