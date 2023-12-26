<template>
    <div class="noteWrap">
        <div v-if="responseStatus === '100'" :class="['noteContentWrap', 'noteWrapWarning']">
            <div class="noteStartWrap">
                <img :src="warningIcon">
                <p class="warningText">
                    {{ message }}
                </p>
                <img :src="warningCloseIcon" alt="" class="errorClose">
            </div>
        </div>
    </div>
    <div class="noteWrap">
        <div v-if="responseStatus === '200'" :class="['noteContentWrap','noteWrapSuccess']">
            <div class="noteStartWrap">
                <img :src="successIcon">
                <p class="successText">
                    {{ message }}
                </p>
            </div>
            <img :src="succesCloseIcon" alt="" class="errorClose">
        </div>
    </div>
    <div class="noteWrap">
        <div v-if="responseStatus === '300'" :class="['noteContentWrap', 'noteWrapInfo']">
            <div class="noteStartWrap">
                <img :src="infoIcon">
                <p class="infoText">
                    {{ message }}
                </p>
            </div>
            <img :src="infoCloseIcon" alt="" class="errorClose">
        </div>
    </div>
    <div class="noteWrap">
        <div v-if="responseStatus === '400'" :class="['noteContentWrap', 'noteWrapError']">
            <div class="noteStartWrap">
                <img :src="errorIcon">
                <p class="errorText">
                    {{ message }}
                </p>
            </div>
            <img :src="errorCloseIcon" alt="" class="errorClose">
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import errorIcon from '../../assets/error.svg'
import errorCloseIcon from '../../assets/close.svg'
import infoIcon from "../../assets/info-icon.svg"
import infoCloseIcon from "../../assets/info-close.svg"
import warningIcon from "../../assets/warning-icon.svg"
import warningCloseIcon from "../../assets/warning-close.svg"
import successIcon from "../../assets/success-icon.svg"
import succesCloseIcon from "../../assets/success-close.svg"

const props = defineProps(['message', 'responseStatus'])
</script>

<style lang="sass" scoped>
    .noteWrap
        border-radius: 8px
        display: flex
        flex-direction: column
        top: 2rem
        right: 1rem
        min-width: 311px
    .noteWrapError 
        border: 1px solid var(--error)
        background-color: var(--errorPrimary)
    .noteWrapSuccess
        border: 1px solid var(--notifySuccess)
        background-color: var(--notifySuccessPrimary)
    .noteWrapWarning
        border: 1px solid var(--notifyWarning)
        background-color: var(--notifyWarningPrimary)
    .noteWrapInfo
        border: 1px solid var(--notifyInfo)
        background-color: var(--notifyInfoPrimary)
    .noteContentWrap
        display: flex
        border-radius: 8px
        padding: 14px
        justify-content: space-between
    .noteStartWrap 
        display: flex
        gap: 10px
    .errorText 
        color: var(--error)
    .successText
        color: var(--notifySuccess)
    .warningText
        color: var(--notifyWarning)
    .infoText 
        color: var(--notifyInfo)
    .infoText 
        color: var(--notifyInfo)
    .warningText 
        color: var(--notifyWarning)
    .successText 
        color: var(--notifySuccess)
    img 
        height: 16px
        width: 16px
</style>