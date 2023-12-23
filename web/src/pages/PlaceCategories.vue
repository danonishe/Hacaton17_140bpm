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
      />
      <my-button
        :buttonText="(myButtonTex = 'Продолжить')"
        @click="this.$router.push('/HomePage')"
      />
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      arrayPlace: [
        {
          id: 1,
          imageUrl: "@/assets/images/plase/bar.svg",
          imageTitle: "Бары",
        },
        {
          id: 2,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 3,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Памятники",
        },
        {
          id: 4,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 5,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 6,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 7,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 8,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 9,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 10,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 11,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 12,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 13,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
        {
          id: 14,
          imageUrl: "https://i.postimg.cc/pdsWM1r6/Svg-Place.png",
          imageTitle: "Рестораны",
        },
      ],
    };
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
</style>
  