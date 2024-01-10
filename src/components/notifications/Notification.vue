<template lang="pug">
.noteWrap
    .noteContentWrap(:class="defineWrap")
        .noteStartWrap
            img(:src="defineIcon") 
            p(:class="defineText") {{ message }}
        img(
            :src="defineButton" 
            alt="" 
            class="errorClose" 
            @click="$emit('onRemoveNote')"
        )
</template>

<script setup>
import { defineProps, ref, onMounted} from 'vue'
import errorIcon from '../../assets/icons/error.svg'
import errorCloseIcon from '../../assets/icons/close.svg'
import infoIcon from "../../assets/icons/info-icon.svg"
import infoCloseIcon from "../../assets/icons/info-close.svg"
import warningIcon from "../../assets/icons/warning-icon.svg"
import warningCloseIcon from "../../assets/icons/warning-close.svg"
import successIcon from "../../assets/icons/success-icon.svg"
import succesCloseIcon from "../../assets/icons/success-close.svg"

import { useAuthStore } from '../../stores/auth'

const props = defineProps(['responseStatus', 'errorText'])
const classes = ref({
    noteWrapSuccess: "noteWrapSuccess",
    noteWrapInfo: "noteWrapInfo",
    noteWrapWarning: "noteWrapWarning",
    noteWrapError: "noteWrapError",
})

const defineIcon = ref('')
const defineButton = ref('')
const defineWrap = ref('')
const defineText = ref('')
const message = ref('')

const authStore = useAuthStore()


onMounted(() => {
    setTimeout(() => {
        authStore.notes.pop()
    }, 5000);
})

if (props.responseStatus === '200') {
    defineIcon.value = successIcon
    defineButton.value = succesCloseIcon
    defineWrap.value = classes.value.noteWrapSuccess
    defineText.value = 'successText'
    message.value = "Successfully logined"

} else if (props.responseStatus === '400') {
    defineIcon.value = errorIcon
    defineButton.value = errorCloseIcon
    defineWrap.value = classes.value.noteWrapError
    defineText.value = 'errorText'
    message.value = props.errorText
    console.log(props.errorText)
}
</script>

<style lang="scss" scoped>
.noteWrap {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    top: 2rem;
    right: 1rem;
    min-width: 311px;
}

.noteWrapError {
    border: 1px solid var(--error);
    background-color: var(--errorPrimary);
}

.noteWrapSuccess {
    border: 1px solid var(--notifySuccess);
    background-color: var(--notifySuccessPrimary);
}

.noteWrapWarning {
    border: 1px solid var(--notifyWarning);
    background-color: var(--notifyWarningPrimary);
}

.noteWrapInfo {
    border: 1px solid var(--notifyInfo);
    background-color: var(--notifyInfoPrimary);
}

.noteContentWrap {
    display: flex;
    border-radius: 8px;
    padding: 14px;
    justify-content: space-between;
}

.noteStartWrap {
    display: flex;
    gap: 10px;
}

.errorText {
    color: var(--error);
}

.successText {
    color: var(--notifySuccess);
}

.warningText {
    color: var(--notifyWarning);
}

.infoText {
    color: var(--notifyInfo);
}

.infoText {
    color: var(--notifyInfo);
}

.warningText {
    color: var(--notifyWarning);
}

.successText {
    color: var(--notifySuccess);
}

img {
    height: 16px;
    width: 16px;
}
</style>
