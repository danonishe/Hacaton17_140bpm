<template>
  <footer>
    <div class="footer__text__block">
        <img src="@/assets/images/footer/mesto.svg">
        <p>Что рядом?</p>
    </div>
    <div class="footer__text__block">
        <img src="@/assets/images/footer/march.svg">
        <p>Маршрут</p>
    </div>
    <div class="footer__text__block">
        <img src="@/assets/images/footer/add.svg">
        <p>Добавить</p>
    </div>
    <div class="footer__text__block">
        <img src="@/assets/images/footer/izbr.svg">
        <p>Избранное</p>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'my-footer'
}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';

footer{
    position: absolute;
    bottom: 0;
    height: 52px;
    width: 100%;
    background-color: $colorsFooterBg;
    display: flex;
    justify-content: space-between;
    padding: 5px 16px;
    img
    {
        filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
    }
}
.footer__text__block{
    align-items: center;
    text-align: center;
}
.footer__text__block p{
    color: $colorsTextFooter ;
    font-size: 12px;
}
</style>