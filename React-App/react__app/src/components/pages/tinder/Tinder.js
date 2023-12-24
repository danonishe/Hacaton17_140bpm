import React from "react";
import styles from "./Tinder.module.scss";
import Slider from "./sviper/sviper";
import { Link } from "react-router-dom";
import MyPage from "../myPage/myPage";
export default function Tinder() {
  const [isMyPage, setIsMyPage] = React.useState(false);
  function hendelclick() {
    console.log(isMyPage);
    setIsMyPage(!isMyPage);
  }

  return (
    <div className={styles.TinderMain}>
      {isMyPage && (
        <div className={styles.MyPage}>
          <div className={styles.MyPage_inner}>
            <MyPage hendelclick={hendelclick} />{" "}
          </div>
        </div>
      )}
      <div onClick={() => hendelclick()} className={styles.myIcon}>
        <img src="./img/map/icon1.png" alt="img" />
      </div>
      <img className={styles.card__tindBg} src="./img/tinder/bgTind.png"></img>
      <Slider />
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
    </div>
  );
}
