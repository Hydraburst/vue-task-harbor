<script setup>
import Notifications from './components/notifications/notifications.vue';
import Header from './components/header/Header.vue';
import router from './router/router';
import { useRoute } from 'vue-router';
import { useUserInfo } from './stores/userInfo';
import { onMounted } from 'vue';

const userInfo = useUserInfo();
onMounted(()=>{
    if(userInfo.userInfo.token) {
        router.push({name: 'dashboard'})
    }
})
</script>
<template lang="pug">
<router-view />
notifications
</template>
<style scoped></style>
