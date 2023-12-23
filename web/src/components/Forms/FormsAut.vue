<template>
  <div class="blockFrom">
    <div class="blockFrom__innerAut">
       <div className="input__block">
        <input placeholder="Логин" class="form-control" v-model="loginValue" type="text">
      </div>
      <div className="input__block">
        <input placeholder="Пароль" class="form-control" v-model="passwordValue" type="password" />
      </div>
      <my-button :buttonText="myButtonText = 'Войти'" @click="submitForm" />
      <div class="firstStart" @click="switchToRegistration">
        <p>Впервые на сайте?</p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'form-aut',
  mounted() {
  },
  data() {
    return {
      myPlaceholder: '',
      myButtonText: '',
      loginValue: '',
      passwordValue: ''
    };
  },
  methods: {
    switchToRegistration() {
      this.$emit('switchToRegistration');
    },
    ...mapActions(['saveToken']),
    submitForm() {
      const data = {
        login: this.loginValue,
        password: this.passwordValue,
      };

      axios.post(this.$store.state.db+'/auth/login', data)
        .then(response => {
          console.log("Авторизация прошла успешно");
          const myToken = response.data.token;
          this.$store.commit('setJWT',myToken);
          console.log(this.$store.state.jwt );
          this.$router.push('/HomePage');

        })
        .catch(error => {
          console.log("нет", error);
        });
    },
  },
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
.input{
  width: 100%;
  height: 48px;
 
}
.input__block{
 padding: 0 24px;
 margin: 24px 0;
}
.input::placeholder{
  color: $placeholderColor;
  font-size: 16px;
}
</style>
