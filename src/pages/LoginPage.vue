<template>
    <background />
    <div class="container">
        <div class="containerContent">
            <div class="pageTitle">
                <h2>Welcome</h2>
                <h4>Log in to your account</h4>
            </div>
            <login-form />
        </div>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import Background from '../components/Background.vue';

export default {
    components: { LoginForm, Background },
}
</script>

<style scoped lang="sass">

h2 
    font-size: 60px
    font-weight: 800
    line-height: 66px


h4 
    font-size: 20px
    font-weight: 500


.pageTitle 
    display: flex
    flex-direction: column
    gap: 8px
    margin: 0 auto
    max-width: 400px
    text-align: center
    margin-bottom: 44px


.container 
    display: flex
    justify-content: center
    align-items: center

</style>