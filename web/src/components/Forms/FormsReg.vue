<template>
    
    <div class="blockFrom">
        <div class="blockFrom__innerReg">
            <my-input :placeholder="myPlaceholder='Логин'" />
            <my-input :placeholder="myPlaceholder='Почта'"/>
            <my-input :placeholder="myPlaceholder='Имя'"/>
            <my-input :placeholder="myPlaceholder='Пароль'"/>
            <my-input :placeholder="myPlaceholder='Подтвердите пароль'"/>
            <my-button :buttonText="myButtonTex='Зарегестрироваться'"/>
            <div class="firstStart" @click="switchToAuthorization">
              <p>Уже зарегистрирован!</p>
            </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'form-reg',
    methods: {
    switchToAuthorization() {
        this.$emit('switchToAuthorization');
      }
    },
    data() {
    return {
      myPlaceholder: "",
      myButtonText: ''
    };
    
  }
}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
.firstStart{
  color: #ffffff;
  width: 100%;
  text-align: right;
  padding-right: 24px;
  margin-top: 20px;
}
.blockFrom__innerReg{
  width: 350px;
  height: 500px;
  background-color: $colorBlue;
  border-radius:10px;
  position: relative;
  }
  .firstStart{
    position: absolute;
    bottom: 0;
    right: 0;
  }

</style>