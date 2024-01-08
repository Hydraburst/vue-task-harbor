<template lang="pug">
background
.container
    .containerContent
        .pageTitle
            h2 Welcome
            h4 Log in to your account
        login-form
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue';
import Background from '../components/Background.vue';
</script>

<style scoped lang="scss">
h2 {
    font-size: 60px;
    font-weight: 800;
    line-height: 66px;
}



h4 {
    font-size: 20px;
    font-weight: 500;
}



.pageTitle {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 auto;
    max-width: 400px;
    text-align: center;
    margin-bottom: 44px;
}



.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>