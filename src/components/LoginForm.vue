<template>
     <form @submit.prevent>
        <div class="formContent">
            <div class="inputSection">
                <p>Email</p>
                <div class="inputFieldWrap" :class="setMailError">
                    <input 
                        type="text" 
                        v-model="userEmail" 
                        @blur="validateEmail" 
                        @click="toggleEmailError" 
                    />
                </div>
                <p class="errorText" v-if="!isEmailValid">{{ invalidEmailErrorText }}</p>
            </div>
            <div class="inputSection">
                <p>Password</p>
                <div class="inputFieldWrap" :class="setPasswordError">
                    <input 
                        :type="type" 
                        v-model="userPassword" 
                        @blur="validatePassword" 
                        @click="togglePasswordError" 
                    />
                    <img 
                        :src="passwordImg" 
                        alt="img" 
                        @click="toggleShowPassword" 
                    />
                </div>
                <p class="errorText" v-if="!isPasswordValid">{{ invalidPasswordErrorText }}</p>
            </div>
            <button type="submit" @click="submitForm">
                <p>Log in</p>
            </button>
            <p class="footerText">New user? <span>Sign up</span></p>
        </div>
    </form>
</template>
<script>
import imgNotVisible from "../assets/not-visible.png"
import imgVisible from "../assets/visible.png"
export default {
    data() {
        return {
            imgNotVisible,
            imgVisible,
            userEmail: '',
            showPassword: false,
            userPassword: '',
            isEmailValid: 'true',
            isPasswordValid: 'true',
            invalidEmailErrorText: '',
            invalidPasswordErrorText: '',
            passwordImg: imgVisible,
            type: 'password'
        };
    },
    methods: {
        submitForm() {
            this.validateEmail()
            this.validatePassword()
            if (this.isEmailValid && this.isPasswordValid) {
                this.userEmail = ""
                this.userPassword = ""
            } else {
                return
            }
        },
        validateEmail() {
            if (this.userEmail !== "") {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                this.isEmailValid = emailPattern.test(this.userEmail);
                this.invalidEmailErrorText = 'Please enter valid Email adress.'
            } else {
                this.invalidEmailErrorText = 'Required field'
                this.isEmailValid = false;
            }
        },
        validatePassword() {
            if (this.userPassword !== "") {
                this.isPasswordValid = this.userPassword.length >= 8;
                this.invalidPasswordErrorText = "Please enter a valid password"
            } else {
                this.invalidPasswordErrorText = "Required field"
                this.isPasswordValid = false
            }
        },

        toggleEmailError() {
            if (!this.isEmailValid) {
                this.isEmailValid = true;
            }
        },
        togglePasswordError() {
            if (!this.isPasswordValid) {
                this.isPasswordValid = true;
            }
        },
        toggleShowPassword() {
            if (this.showPassword) {
                this.passwordImg = this.imgNotVisible
                this.type = 'text'
                this.showPassword = !this.showPassword
            } else {
                this.passwordImg = this.imgVisible
                this.type = 'password'
                this.showPassword = !this.showPassword
            }

        }
    },
    computed: {
        setMailError() {
            return {
                inputFieldError: !this.isEmailValid,
            }
        },
        setPasswordError() {
            return {
                inputFieldError: !this.isPasswordValid
            }
        },
    }
}

</script>
<style scoped>
form {
    background-color: #e9dffb;
    border-radius: 4px;
    margin: 0 auto;
    z-index: 100;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

p {
    font-size: 12px;
}

span {
    font-weight: 600;
    border-bottom: 2px solid black;
}

input {
    margin: 0;
    background: none;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
}

button {
    background-color: var(--primary);
    margin-top: 36px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

img {
    max-width: 20px;
    max-height: 15px;
}

button p {
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    padding: 14px 0;
}
.formContent {
    padding: 1.75rem 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.inputSection {
    display: flex;
    flex-direction: column;
    gap: 8px;
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
    color:var(--error);
}

.inputSection p {
    font-size: 14px;
}

.footerText {
    text-align: center;
}
</style>