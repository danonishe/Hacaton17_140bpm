import React, { useState } from "react";
import style from "./interests.module.scss";
import { Link } from "react-router-dom";

function Interests() {
  const [isActive, setIsActive] = useState([]);

  const funActive = (index) => {
    const updatedActive = [...isActive];
    if (updatedActive[index] === "blue") {
      updatedActive[index] = "#d9d9d9"; // Если текущий цвет - blue, меняем на серый
    } else {
      updatedActive[index] = "blue"; // Иначе меняем на синий
    }
    setIsActive(updatedActive);
  };

  const arr = [
    "Бары",
    "Рестораны",
    "Памятники",
    "Пляжи",
    "Галареи",
    "Дискотеки",
    "Церкви",
    "Кофейни",
    "Чехов",
    "Парки",
    "Театры",
    "Архитектура",
    "Променад",
    "Площадки",
    "Зоны пикника",
    "Рощи",
    "Кенотеатры",
    "Цирки",
    "Залы",
  ];

  const Item = (props) => {
    return (
      <div
        className={style.plitka}
        style={{ backgroundColor: props.isActive[props.index] || "#d9d9d9" }}
        onClick={() => funActive(props.index)}
      >
        <div className={style.icon}>
          <img src={`./img/icon/icon${props.index + 1}b.svg`} alt="icon" />
        </div>
        <p>{props.el}</p>
      </div>
    );
  };

  return (
    <div className={style.interests}>
      <main>
        <div className={style.logo}>
          <img src="./img/logo/logo.png" alt="logo"></img>
        </div>
        <h1>ВЫБЕРТЕ КАТЕГОРИИ МЕСТ, КОТОРЫЕ ВАС ПРИВЛЕКАЮТ</h1>
        {/* <h3>Это поможет более точно подбирать рекомендации для вас</h3> */}
        <div className={style.container}>
          {arr.map((el, index) => (
            <Item el={el} index={index} isActive={isActive} key={index} />
          ))}
          <div style={{ marginTop: "80px" }} className={style.button}>
            <Link to="./../SelectionTour">
              <div className={style.button_inner}>Продолжить</div>
            </Link>
          </div>
          <div className={style.button}>
            <Link to="./../SelectionTour">
              <div
                style={{ backgroundColor: "#AEAEAE", marginTop: "10px" }}
                className={style.button_inner}
              >
                Пропустить
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Interests;
