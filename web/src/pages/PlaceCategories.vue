<template>
  <div>
    <my-header></my-header>
    <div class="titlePlase">
      <p>Выберите категории мест которые вас привлекают</p>
    </div>
    <div class="place__block">
        <my-plase
        v-for="el in arrayPlace"
        :key="el.id"
        :imageSrc="el.imageUrl"
        :title="el.imageTitle"
        @addPlace="addPlace"
        @removePlace="removePlace"
      />
      <my-button
        :buttonText="(myButtonTex = 'Продолжить')"
        @click="this.$router.push('/HomePage'), handleButtonClick"
      />
    

    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
    selectedPlaces: [],
      arrayPlace: [
        {
          id: 1,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Бары",
          selected: false,
        },
        {
          id: 2,
          imageUrl: "https://i.postimg.cc/vxyYxMdJ/Svg-Place-1.png",
          imageTitle: "Рестораны",
          selected: false,
        },
        {
          id: 3,
          imageUrl: "https://i.postimg.cc/nXrHD06h/Svg-Place-2.png",
          imageTitle: "Памятники",
          selected: false,
        },
        {
          id: 4,
          imageUrl: "https://i.postimg.cc/tYXRXXkP/Svg-Place-3.png",
          imageTitle: "Кофейни",
          selected: false,
        },
        {
          id: 5,
          imageUrl: "https://i.postimg.cc/gnNzjft7/Svg-Place-6.png",
          imageTitle: "Клубы",
          selected: false,
        },
        {
          id: 6,
          imageUrl: "https://i.postimg.cc/hh8PWJLc/Svg-Place-4.png",
          selected: false,
          imageTitle: "Церкви",
        },
        {
          id: 7,
          imageUrl: "https://i.postimg.cc/XrPnc9bc/Svg-Place-7.png",
          imageTitle: "Залы",
          selected: false,
        },
        {
          id: 8,
          imageUrl: "https://i.postimg.cc/2Lxz4JkV/svgviewer-output-18-2.png",
          imageTitle: "Парки",
          selected: false,
        },
        {
          id: 9,
          imageUrl: "https://i.postimg.cc/QFvrWsQf/svgviewer-output-19-1.png",
          imageTitle: "Рощи",
          selected: false,
        },
        {
          id: 10,
          imageUrl: "https://i.postimg.cc/cgSyXm5Y/svgviewer-output-20-1.png",
          imageTitle: "Архитектура",
          selected: false,
        },
        {
          id: 11,
          imageUrl: "https://i.postimg.cc/jWNYH9vt/svgviewer-output-23-1.png",
          imageTitle: "Площадки",
          selected: false,
        },
        {
          id: 12,
          imageUrl: "https://i.postimg.cc/QVjZ7f7Z/svgviewer-output-22-1.png",
          imageTitle: "Кемпинги",
          selected: false,
        },
        {
          id: 13,
          imageUrl: "https://i.postimg.cc/VrWyTC3h/svgviewer-output-25-1.png",
          imageTitle: "Театры",
          selected: false,
        },
        {
          id: 14,
          imageUrl: "https://i.postimg.cc/7f6vsbXB/svgviewer-output-27-1.png",
          imageTitle: "Кинотеатры",
          selected: false,
        },
        {
          id: 15,
          imageUrl: "https://i.postimg.cc/8fk8VCGz/svgviewer-output-28-1.png",
          imageTitle: "Цирки",
          selected: false,
        },
        {
          id: 16,
          imageUrl: "https://i.postimg.cc/xqgD3LGJ/svgviewer-output-30-1.png",
          imageTitle: "Пляжи",
          selected: false,
        },
      ],
    };
  },
  methods: {
    addPlace(id) {
        console.log("добавление");
    this.selectedPlaces.push(id);
  },
  removePlace(id) {
    const index = this.selectedPlaces.indexOf(id);
    console.log("удаление");
    if (index !== -1) {
      this.selectedPlaces.splice(index, 1);
    }
  },
  handleButtonClick() {
    console.log(this.arrayPlace); 
  },
},

};
</script>
  
  <style lang="scss">
@import "@/assets/layout/index.scss";
.titlePlase {
  padding: 70px 0px 20px 0px;
}
.titlePlase p {
  font-size: 24px;
  text-align: center;
  margin: 0 auto;
  color: $colorBlue;
  font-weight: 900;
}
.place__block {
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
}
.block__btn {
  width: 100%;
}
.block__btn{
    margin-top: 75px;
}
</style>
  