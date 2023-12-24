import React, { useEffect } from "react";
import styles from "./favorites.module.scss";
import { Link } from "react-router-dom";
import MyPage from "../myPage/myPage";
const Favorites = () => {
  const [arrFav, setArrFav] = React.useState([]);
  var mass = [
    {
      id: 0,
      img1: "./img/fav/fav1.png",
      title: "Ипподром в Golden Horse",
      text: "Проходят соревнования региона в загородном спортивном клубе Golden,Horse",
      data: "Когда: 21 декабря 2023",
    },
    {
      id: 1,
      img1: "./img/fav/fav1.png",
      title: "Ипподром в Golden Horse",
      text: "Проходят соревнования региона в загородном спортивном клубе Golden,Horse",
      data: "Когда: 22 декабря 2023",
    },
    {
      id: 2,
      img1: "./img/fav/fav1.png",
      title: "Ипподром в Golden Horse",
      text: "Проходят соревнования региона в загородном спортивном клубе Golden,Horse",
      data: "Когда: 23 декабря 2023",
    },
  ];

  useEffect(() => {
    setArrFav(mass);
  }, []);
  console.log(arrFav);

  return (
    <div className={styles.favorites}>
      <div className={styles.TinderMain}></div>
      <h1>Избранные</h1>

      <div lassName={styles.favorites_body}>
        {arrFav.map((el) => {
          return (
            <Favorite
              id={el.id}
              img1={el.img1}
              title={el.title}
              text={el.text}
              data={el.data}
              setArrFav={setArrFav}
              arrFav={arrFav}
            />
          );
        })}
      </div>
      <div className={styles.line}>
        <div className={styles.box}>
          <Link to={"/HomePage"}>
            <img src="./img/wash/wash2g.svg" alt="img"></img>
          </Link>
          <span>Что рядом?</span>
        </div>
        <div className={styles.box}>
          <Link to={"/Tinder"}>
            <img src="./img/wash/wash3.svg" alt="img"></img>
          </Link>
          <span>Маршрут</span>
        </div>

        <div className={styles.box}>
          <img src="./img/wash/wash4.svg" alt="img"></img>
          <span>Добавить</span>
        </div>
        <div className={styles.box}>
          <img src="./img/wash/wash5f.svg" alt="img"></img>
          <span>Избранное</span>
        </div>
      </div>
    </div>
  );
};

const Favorite = (props) => {
  function deleteItem(id) {
    const updatedMass = props.arrFav.filter((item) => item.id !== id);
    props.setArrFav(updatedMass);
    console.log(id);
  }

  return (
    <main className={styles.favorite}>
      <div className={styles.favorite_body}>
        <img className={styles.img1} src={props.img1} alt="qqq"></img>
        <div className={styles.body_box_head}>
          <div className={styles.body_box}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.text_body}>{props.text}</div>
            <div>{props.data}</div>
          </div>
          <img
            onClick={() => deleteItem(props.id)}
            className={styles.img2}
            src="./img/fav/trash.svg"
            alt="qqq"
          ></img>
        </div>
      </div>
    </main>
  );
};

export default Favorites;
