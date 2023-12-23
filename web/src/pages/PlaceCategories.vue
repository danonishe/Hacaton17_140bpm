<template>
    <img class="logo" src="@/assets/images/logo.svg">
    <div>
        <div class="titlePlase">
            <p >Выберите категории мест которые вас привлекают</p>
        </div>
        <div class="place__block">
            <my-plase :imageSrc="imageUrl='https://i.postimg.cc/pdsWM1r6/Svg-Place.png'" :title="imageTitle='Бары'" />
            <my-plase :imageSrc="imageUrl='https://i.postimg.cc/pdsWM1r6/Svg-Place.png'" :title="imageTitle='Бары'" />
            <my-plase :imageSrc="imageUrl='https://i.postimg.cc/pdsWM1r6/Svg-Place.png'" :title="imageTitle='Бары'" />
            <my-plase :imageSrc="imageUrl='https://i.postimg.cc/pdsWM1r6/Svg-Place.png'" :title="imageTitle='Бары'" />
            <my-plase :imageSrc="imageUrl='https://i.postimg.cc/pdsWM1r6/Svg-Place.png'" :title="imageTitle='Бары'" />
            <my-plase :imageSrc="imageUrl='https://i.postimg.cc/pdsWM1r6/Svg-Place.png'" :title="imageTitle='Бары'" />
            <my-plase :imageSrc="imageUrl='https://i.postimg.cc/pdsWM1r6/Svg-Place.png'" :title="imageTitle='Бары'" />
            <my-plase :imageSrc="imageUrl='https://i.postimg.cc/pdsWM1r6/Svg-Place.png'" :title="imageTitle='Бары'" />
            <my-plase :imageSrc="imageUrl='https://i.postimg.cc/pdsWM1r6/Svg-Place.png'" :title="imageTitle='Бары'" />

        </div>
    </div>
  </template>
  
  <script>  
  export default {
    data() {
        return {
            imageUrl: "",
            imageTitle: ""
        };
      }
  };
  </script>
  
  <style lang="scss">
  @import '@/assets/layout/index.scss';
  .titlePlase{
    padding: 70px 0px 20px 0px;
  }
  .titlePlase p{
    font-size: 24px;
    text-align: center;
    margin: 0 auto; 
    color: $colorBlue;
    font-weight: 900;
  }
  .place__block{
    padding: 0 16px;
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  