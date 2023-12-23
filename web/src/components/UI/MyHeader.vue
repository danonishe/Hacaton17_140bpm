<template>
    <div class="header">
        <div class="header__block">
            <div class="header__block_imgs">
                <img style="position: relative; top:-5px" src="@/assets/images/logo.svg">
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

.header {
    background-color: $colorsFooterBg;
    .header__block {
        display: flex;
        justify-content: space-between;
        width: 98%;
       
    }
    .header__block_imgs{
        padding: 10px 5px 0px 0px ;
        align-items: center;
        :first-child{
            margin-right: 10px;
        }
    }
    .header_imgs
        {
        display: flex;
        justify-content: space-between;

     
    }

}
</style>