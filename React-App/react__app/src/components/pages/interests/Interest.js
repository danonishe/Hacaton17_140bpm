import React, { useState } from "react";
import style from "./interests.module.scss";
import { Link } from "react-router-dom";
import Header from "../../ui/Header/Header";

function Interests() {
  const token = localStorage.getItem('token');

  const [isActive, setIsActive] = useState([]);

  const funActive = (index) => {
    const updatedActive = [...isActive];
    if (updatedActive[index] === "blue") {
      updatedActive[index] = "#3D8BFD"; // If the current color is blue, change it to gray
    } else {
      updatedActive[index] = "blue"; // Otherwise, change it to blue
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
        style={{ backgroundColor: props.isActive[props.index] || "#3D8BFD" }}
        onClick={() => funActive(props.index)}
      >
        <div className={style.icon}>
          <img src={`./img/interests/icon${props.index + 1}.svg`} alt="icon" />
        </div>
        <p>{props.el}</p>
      </div>
    );
  };

  function AddFav(token, blueElements) {

    const data = {
      types: blueElements,
    };
    console.log(token);
    console.log(data);
    const url = "https://7d4c-95-174-102-182.ngrok-free.app/user/addFavType";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `auth._token.local=Bearer%20${token};`,
      },
      body: data,
    })
      .then((response) => {
        response.json()
        console.log(response);
        console.log("Успешно");
      })
      .then((data) => {
        console.log("Успешно");
        console.log(data);
      })
      .catch((error) => {
        console.log("Произошла ошибка", error);
      });
  }
  const handleContinue = () => {
    const blueElements = isActive.reduce((acc, color, index) => {
      if (color === "blue") {
        acc.push(index);
      }
      return acc;
    }, []);
    AddFav(token, blueElements);
  };

  return (
    <div className={style.interests}>
      <main>
        <Header />
        <h1>
          ВЫБЕРТЕ КАТЕГОРИИ МЕСТ,
          <br /> КОТОРЫЕ ВАС ПРИВЛЕКАЮТ
        </h1>
        <div className={style.container}>
          {arr.map((el, index) => (
            <Item el={el} index={index} isActive={isActive} key={index} />
          ))}
          <div style={{ marginTop: "80px" }} className={style.button}>
            <Link to="#">
              <div className={style.button_inner} onClick={handleContinue}>
                Продолжить
              </div>
            </Link>
          </div>
          <div className={style.button}>
            <Link to="#">
              <div
                style={{ backgroundColor: "#3D8BFD", marginTop: "10px" }}
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
