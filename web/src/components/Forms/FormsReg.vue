<template>
  <div class="blockFrom">
    <div class="blockFrom__innerReg">
      <div className="input__block">
        <input class="form-control" placeholder="Почта"  v-model="email" type="email">
      </div>
      <div className="input__block">
        <input class="form-control" placeholder="Имя"  v-model="name" type="text"/>
      </div>
      <div className="input__block">
        <input class="form-control" placeholder="Пароль"  v-model="password" type="password">
      </div>
      <div className="input__block">
        <input class="form-control" placeholder="Подтвердите пароль"  v-model="confirmPassword" type="password"/>
      </div>
      <my-button :buttonText="myButtonTex='Зарегистрироваться'" @click="submitForm" />
      <div class="firstStart" @click="switchToAuthorization">
        <p>Уже зарегистрирован!</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {


  name: 'form-reg',
  data() {
    return {
      myPlaceholder: '',
      myButtonText: '',
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    switchToAuthorization() {
      this.$emit('switchToAuthorization');
    },
    submitForm() {
      const data = {
        login: this.email,
        name: this.name,
        password: this.password,
      };
      
     //Отправка запроса с помощью Axios
      axios.post(this.$store.state.db+'/auth/register', data)
        .then(response => {
        console.log("Регистрация прошла успешно");
        const myToken = response.data.token;
        this.$store.commit('setJWT',myToken);
          console.log(this.$store.state.jwt );
          this.$router.push('/PlaceCategories');
        })
        .catch(error => {
          console.log("нет", error);
        })
    }
  }
};
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

.blockFrom__innerReg {
  width: 350px;
  height: 500px;
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
