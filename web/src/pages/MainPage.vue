<template>
  <div class="container__main">
    <my-header></my-header>
    <div class="title">
      <p>ПЕРЕДВИГАЙТЕСЬ БОЛЬШЕ С 140BPM</p>
    </div>
    <div v-if="!showRegistration">
      <form-aut @switchToRegistration="showRegistration = true" />
    </div>
    <div v-else>
      <form-reg @switchToAuthorization="showRegistration = false" />
    </div>
    <img class="nlo" src="@/assets/images/nloPiktch.svg">
  </div>
</template>

<script>


export default {
  data() {
    return {
      showRegistration: false
    };
  }
}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
.blockFrom{
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: $colorGreen;
}

  .title{
    margin: 50px 0px 20px 0px;
  }
  .title p{
    font-size: 24px;
    text-align: center;
    margin: 0 auto; 
    color: $colorBlue;
    font-weight: 900;
  }
  .logo{
    position: absolute;
    left: 16px;
    top: 2px;
  }
  .nlo{
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>