<template>
    <div class="block__plase">
      <img :src="imageSrc" alt="Изображение">
      <p>{{ title }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name:'my-plase',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style lang="scss">
  @import '@/assets/layout/index.scss';

  .block__plase{
    width: 75px;
    height: 90px;
    border-radius: 10px;
    align-items: center;
    text-align: center;
    background-color: $plaseColor;
  }
  .block__plase img{
    padding: 5px 0px 3px 0px;
  
  }
  .block__plase{
    color: #fff;
    font-size: 11px;
    margin: auto;
    margin-bottom: 12px;
  }
  
  </style>
  