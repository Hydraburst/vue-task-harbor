<template>
    <div class="topLeftBg">
        <img class="bgImg bgImgLeft" :src="bgLsBlue" alt="">
        <img class="bgImg bgImgLeft" :src="bgLsPurple" alt="">
        <img class="bgImg bgImgLeft bgLs" :src="bgLs" alt="">

    </div>
    <div class="botRightBg">
        <img class="bgImg bgImgRight" :src="bgRsBlue" alt="">
        <img class="bgImg bgImgRight bgRsBlue" :src="bgRsBirch" alt="">
        <img class="bgImg bgImgRight bgLs" :src="bgLs" alt="">

    </div>
    <div class="logo">
        <div class="logoElements">
            <img :src="logoTop" alt="logo">
            <div class="logoBotSection">
                <img :src="logoBot" alt="">
                <img :src="logoMid" alt="">
                <div class="underline"></div>
            </div>
        </div>
    </div>
</template>
<script>
import logoTop from "../assets/logo-top.svg"
import logoMid from "../assets/logo-mid.svg"
import logoBot from "../assets/logo-bot.svg"
import bgLsBlue from "../assets/bg-ls-blue.png"
import bgLsPurple from "../assets/bg-ls-purple.png"
import bgLs from "../assets/bg-ls.png"
import bgRsBirch from "../assets/bg-rs-birch.png"
import bgRsBlue from "../assets/bg-rs-blue.png"

export default {
    setup() {
        return {
            logoTop,
            logoMid,
            logoBot,
            bgLsBlue,
            bgLsPurple,
            bgLs,
            bgRsBirch,
            bgRsBlue,
        }
    }
}
</script>
<style scoped lang="sass">
.logo 
    display: flex
    justify-content: flex-end
    padding: 32px 66px
    align-items: flex-start


.logoElements 
    display: flex
    flex-direction: column
    gap: 8px
    max-width: 58px
    max-height: 80px
    align-items: center


.underline 
    margin-top: 6px
    border-bottom: 3px solid black


.bgImg 
    position: absolute
    max-width: 100%
    z-index: -1


.bgImgRight 
    right: 0
    bottom: 0


.bgImgLeft 
    top: 0
    left: 0


@media screen and (max-width: 769px) 
    .bgImg 
        width: 370px
    

    .bgRsBlue 
        width: 290px
    

    .bgLs 
        width: 320px
    


@media (max-width:481px) 
    .bgImg 
        width: 180px
    

    .bgRsBlue 
        width: 120px
    

    .bgLs 
        width: 150px
    

    .logo 
        justify-content: center
        align-items: center
    
</style>