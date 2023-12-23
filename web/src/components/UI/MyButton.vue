<template>
    <div class="block__btn">
        <button type="button" class="btn btn-success">{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
    name: 'my-button',
    props: {
    buttonText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';

.btn{
    width: 100%;
    height: 38px;

}
.block__btn{
   padding: 0 24px;
}
</style>