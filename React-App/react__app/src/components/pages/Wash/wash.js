import React, { useState, useRef } from "react";
import styles from "./Wash.module.scss";
import { Link } from "react-router-dom";

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
    if (position.y < 350) {
      setPosition({
        //   x: touch.clientX - startPosition.x,
        y: screenHeight - 375,
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
              <img src="./img/wash/wash3.svg" alt="img"></img>
              <span>Маршрут</span>
            </div>
            <div className={styles.line_inner}></div>
            <div className={styles.box}>
              <img src="./img/wash/wash4.svg" alt="img"></img>
              <span>Добавить</span>
            </div>
            <div className={styles.box}>
              <img src="./img/wash/wash5.svg" alt="img"></img>
              <span>Избранное</span>
            </div>
          </div>
          <img src="./img/wash/wash1.png" alt="img" />
          <div className={styles.name_blok}>
            <span className={styles.name}>Память Фаине!</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wash;
