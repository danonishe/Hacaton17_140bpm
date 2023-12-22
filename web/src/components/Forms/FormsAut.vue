<template>
  <div class="blockFrom">
    <div class="blockFrom__innerAut">
      <my-input :placeholder="myPlaceholder = 'Логин'" id="login"/>
      <my-input :placeholder="myPlaceholder = 'Пароль'" id="password"/>
      <my-button :buttonText="myButtonTex = 'Войти'" @click="submitForm" />
      <div class="firstStart" @click="switchToRegistration">
        <p>Впервые на сайте?</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'form-aut',
  methods: {
    switchToRegistration() {
      this.$emit('switchToRegistration');
    },
    submitForm() {
      const data = {
        login: this.$refs.login,
        password: this.$refs.password,
      };
      console.log(data);
    //   axios.post('your-server-url', data)
    //     .then(response => {
    //       // Обработка успешного ответа от сервера
    //     })
    //     .catch(error => {
    //       // Обработка ошибки
    //     });
     }
  },
  data() {
    return {
      myPlaceholder: '',
      myButtonText: ''
    };
  }
}
</script>


<style lang="scss">
@import '@/assets/layout/index.scss';

.firstStart {
  color: #ffffff;
  width: 100%;
  text-align: right;
  padding-right: 24px;
  margin-top: 20px;
}

.blockFrom__innerAut {
  width: 350px;
  height: 250px;
  background-color: $colorBlue;
  border-radius: 10px;
  position: relative;
}

.firstStart {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>