<template lang="pug">
.noteList
    form(@submit.prevent)
        .formContent
            .inputSection
                label(for="email") Email
                .inputFieldWrap(:class="setMailError") 
                    input#email(
                        type="text" 
                        v-model="userEmail" 
                        @blur="validateEmail" 
                        @click="toggleEmailError" 
                    ) 
                span.errorText(v-if="!isEmailValid") {{invalidEmailErrorText}}
            .inputSection
                label(for="password") Password
                .inputFieldWrap(:class="setPasswordError") 
                    input#password( 
                        :type="type" 
                        v-model="userPassword" 
                        @blur="validatePassword"
                        @click="togglePasswordError" 
                    ) 
                    img(
                        :src="passwordImg"
                        alt="img" 
                        @click="toggleShowPassword"
                    ) 
                span.errorText(v-if="!isPasswordValid") {{ invalidPasswordErrorText }}
            button(type="submit" @click="submitForm") 
                p Log in
            p.footerText New user?
                span Sign up
</template>
<script setup>
import imgNotVisible from "../assets/icons/not-visible.png"
import imgVisible from "../assets/icons/visible.png"
import { ref, computed } from 'vue'
import { loginUser } from "../services/api/loginApi"
import { useNoteStore } from "../stores/noteStore"
import { useUserInfo } from "../stores/userInfo"
import router from "../router/router"

const userInfo = useUserInfo()
const noteStore = useNoteStore()
const showPassword = ref(false)
const isEmailValid = ref(true)
const isPasswordValid = ref(true)
const userEmail = ref('')
const userPassword = ref('')
const invalidEmailErrorText = ref('')
const invalidPasswordErrorText = ref('')
const passwordImg = ref(imgVisible)
const type = ref('password')


const signIn = async () => {
    try {
        const response = await loginUser({ identifier: email.value, password: password.value })
        if (response) {
            noteStore.addNote('succeeded')
            userInfo.userInfo.token = response.data.jwt
            userInfo.userInfo.userData = response.data.use
            router.push("/dashboard")
        }
    } catch (error) {
        noteStore.addNote('failed')
    }

}

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
}

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

<style lang="scss" scoped>
form {
    background-color: #e9dffb;
    min-width: 402px;
    border-radius: 4px;
    margin: 0 auto;
    z-index: 100;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}


p {
    font-size: 12px;
}


label {
    font-size: 14px;
    line-height: 20px;
}

.footerText span {
    font-weight: 600;
    border-bottom: 2px solid black;
}

input {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box
}

button {
    background-color: var(--primary);
    margin-top: 36px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: var(--primaryHover);
    }

    &:active {
        transform: scale(0.95);
    }

    p {
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        padding: 14px 0
    }
}

img {
    max-width: 20px;
    max-height: 15px;
}

.formContent {
    padding: 2rem 1.625rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.inputSection {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
        font-size: 14px;
    }
}

.inputFieldWrap {
    display: flex;
    padding: 14px 16px 14px 16px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid var(--primary);
    align-items: center;
}

.inputFieldError {
    border: 1px solid var(--error);
}

.errorText {
    color: var(--error);
    font-size: 14px;
}

.footerText {
    text-align: center;
}

@media screen and (max-width: 376px) {
    form {
        min-width: 355px;
    }
}
</style>
