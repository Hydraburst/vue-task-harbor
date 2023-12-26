<template>
    <div class="noteList">
        <transition-group name="list" tag="ul">
            <li v-for="note in notes" :key="Date.now()" :id="Date.now()">
                <notifications :message="note" :responseStatus="authStore.responseStatus" />
            </li>
        </transition-group>
    </div>
    <form @submit.prevent>
        <div class="formContent">
            <div class="inputSection">
                <label for="email">Email</label>
                <div :class="['inputFieldWrap', setMailError]">
                    <input 
                        id="email" 
                        type="text" 
                        v-model="userEmail" 
                        @blur="validateEmail" 
                        @click="toggleEmailError" 
                    />
                </div>
                <span class="errorText" v-if="!isEmailValid">{{ invalidEmailErrorText }}</span>
            </div>
            <div class="inputSection">
                <label for="password">Password</label>
                <div :class="['inputFieldWrap', setPasswordError]">
                    <input 
                        id="password" 
                        :type="type" 
                        v-model="userPassword" 
                        @blur="validatePassword"
                        @click="togglePasswordError" 
                    />
                    <img :src="passwordImg" alt="img" @click="toggleShowPassword" />
                </div>
                <span class="errorText" v-if="!isPasswordValid">{{ invalidPasswordErrorText }}</span>
            </div>
            <button type="submit" @click="submitForm">
                <p>Log in</p>
            </button>
            <p class="footerText">New user?<span>Sign up</span></p>
        </div>
    </form>
</template>
<script setup>
import imgNotVisible from "../assets/not-visible.png"
import imgVisible from "../assets/visible.png"
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from "../stores/auth"

import Notifications from "./notifications/notifications.vue"


const authStore = useAuthStore()
const showPassword = ref(false)
const isEmailValid = ref(true)
const isPasswordValid = ref(true)
const userEmail = ref('')
const userPassword = ref('')
const invalidEmailErrorText = ref('')
const invalidPasswordErrorText = ref('')
const passwordImg = ref(imgVisible)
const type = ref('password')
const notes = ref([])


onMounted(() => {
    setInterval(() => {
        cleanNotes()
    }, 5000)
})

const cleanNotes = () => {
    if (notes.value.length > 0) {
        notes.value.splice(0, 1)
    }
}

const signIn = async () => {
    await authStore.auth({ identifier: email.value, password: password.value })
    notes.value.push(authStore.error)
    
};
const submitForm = () => {
    validateEmail()
    validatePassword()

    if (isEmailValid.value && isPasswordValid.value) {
        signIn()
        userEmail.value = ""
        userPassword.value = ""
    }
    else {
        return;
    }
};
const validateEmail = () => {
    if (userEmail.value !== "") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        isEmailValid.value = emailPattern.test(userEmail.value)
        invalidEmailErrorText.value = 'Please enter valid Email adress.'
    }
    else {
        invalidEmailErrorText.value = 'Required field'
        isEmailValid.value = false
    }
}
const validatePassword = () => {
    if (userPassword.value !== "") {
        isPasswordValid.value = userPassword.value.length >= 8
        invalidPasswordErrorText.value = "Please enter a valid password"
    }
    else {
        invalidPasswordErrorText.value = "Required field"
        isPasswordValid.value = false
    }
}
const toggleEmailError = () => {
    if (!isEmailValid.value) {
        isEmailValid.value = true;
    }
}
const togglePasswordError = () => {
    if (!isPasswordValid.value) {
        isPasswordValid.value = true;
    }
}
const toggleShowPassword = () => {
    if (showPassword.value) {
        passwordImg.value = imgNotVisible;
        type.value = 'text';
        showPassword.value = !showPassword.value;
    }
    else {
        passwordImg.value = imgVisible;
        type.value = 'password';
        showPassword.value = !showPassword.value;
    }
}
const setMailError = computed(function () {
    return {
        inputFieldError: !isEmailValid.value,
    };
})
const setPasswordError = computed(function () {
    return {
        inputFieldError: !isPasswordValid.value
    }
})
</script>

<style scoped lang="sass">


.list-enter-active,
.list-leave-active 
  transition: all 0.5s ease

.list-enter-from,
.list-leave-to 
  opacity: 0


form 
    background-color: #e9dffb
    min-width: 402px
    border-radius: 4px
    margin: 0 auto
    z-index: 100
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)


p 
    font-size: 12px


label 
    font-size: 14px
    line-height: 20px


.footerText 
    span 
        font-weight: 600
        border-bottom: 2px solid black


input 
    margin: 0
    padding: 0
    background: none
    border: none
    outline: none
    font-family: inherit
    font-size: 100%
    vertical-align: baseline
    box-sizing: border-box


button 
    background-color: var(--primary)
    margin-top: 36px
    border-radius: 4px
    border: none
    cursor: pointer
    transition: all 0.3s ease-in-out
    &:hover
        background-color: var(--primaryHover)
    &:active
        transform: scale(0.95)



img 
    max-width: 20px
    max-height: 15px

button 
    p 
        color: #fff
        font-weight: 500
        font-size: 16px
        padding: 14px 0


.formContent 
    padding: 2rem 1.625rem
    display: flex
    flex-direction: column
    gap: 20px


.inputSection 
    display: flex
    flex-direction: column
    gap: 8px

.inputFieldWrap 
    display: flex
    padding: 14px 16px 14px 16px
    flex-direction: row
    justify-content: space-between
    background-color: #fff
    border-radius: 4px
    border: 1px solid var(--primary)
    align-items: center


.inputFieldError 
    border: 1px solid var(--error)


.errorText 
    color: var(--error)
    font-size: 14px


.inputSection 
    p 
        font-size: 14px


.footerText 
    text-align: center
.noteList
    position: absolute
    top: 1rem
    right: 1rem
    ul 
        display: flex
        flex-direction: column
        gap: 0.75rem

@media screen and (max-width: 376px) 
    form 
        min-width: 355px
</style>