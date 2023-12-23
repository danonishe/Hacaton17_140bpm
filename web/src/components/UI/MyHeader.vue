<template>
  <div class ="header">
    <div class="header__block">
    <div class="header__block_imgs">
        <img src="@/assets/images/logo.svg">
    </div>
    <div class="header__block_imgs">
        <img src="@/assets/images/discord.svg">
        <img src="@/assets/images/vk.svg">
    </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'my-header'
}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
.header
{
    display: flex;
    justify-content: space-between;
    width: 98%;
    .header_imgs
    {
        display: flex;
        justify-content: space-between;
        img
        {
            margin: 2%;
        }
    }

}
</style>