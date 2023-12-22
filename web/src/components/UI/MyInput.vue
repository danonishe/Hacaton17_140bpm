<template>
  <div className="input__block">
    <input class="form-control " :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    placeholder: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/layout/colors.scss';

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