<template lang="pug">
.headerWrap
    .leftSide
        .logo
            .logoElements
                img(:src="logoTop" alt="logo")
                .logoBotSection
                    img(:src="logoBot" alt="")
                    img(:src="logoMid" alt="")
                    .underline
        ul(class="navList")
            li(class="navListItem")
                router-link(:to="{name: 'work'}")
                    .linkContent
                        p Your work
                        img(:src="typeDn")
            li(class="navListItem")
                router-link(:to="{name: 'project'}")
                    .linkContent 
                        p Project
                        img(:src="typeDn") 
            li(class="navListItem")
                router-link(:to="{name: 'teams'}")
                    .linkContent
                        p Teams
                        img(:src="typeDn")
            li(class="navListBtn")
                .btnWrap
                    p Create
    .rightSide
        .searchFieldWrap
            img(:src="searchIcn")
            input(placeholder="Search issue or project")
        .settingWrap 
            img(:src="infoIcn")
            img(:src="settingIcn")
        img(:src="userIcn")
</template>
<script setup>
import logoTop from "../../assets/img/logo-white.svg"
import logoBot from "../../assets/img/logo-bot.svg"
import logoMid from "../../assets/img/logo-mid.svg"
import typeDn from "../../assets/icons/type-down.svg"
import searchIcn from "../../assets/icons/union.svg"
import infoIcn from "../../assets/icons/info_2.svg"
import settingIcn from "../../assets/icons/setting.svg"
import userIcn from "../../assets/icons/user-icon.svg"
import { RouterLink } from "vue-router"

</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
    color: black;
    display: flex;
    padding: 25px 0px;
}

.linkContent {
    display: flex;
    gap: 6px;
    padding: 6px 8px;
    &:hover {
        background-color: var(--primaryHover);
        border-radius: 4px;
    }
}

.router-link-active {
    border-bottom: 2px solid black;
}

.leftSide {
    display: flex;
    gap: 45px;
}

.rightSide {
    display: flex;
    gap: 30px;
}

.settingWrap {
    display: flex;
    gap: 18px;
}

.searchFieldWrap {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid var(--accent);
    border-radius: 1px;
    padding: 14px 16px;
    background-color: var(--primary);
    min-width: 280px;

    input {
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        outline: none;

        &::placeholder {
            font-size: 14px;
            font-weight: 400;
            color: black;
        }
    }

}

.headerWrap {
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: var(--primary);
    justify-content: space-between;
    padding: 4px 40px;
}

.underline {
    margin-top: 8px;
    border-bottom: 3px solid black;
}

.logo {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.logoElements {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 58px;
    max-height: 80px;
    align-items: center;
    line-height: 0;
}

.navList {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
}

.navListItem {
    padding: 8px 6px;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
}

.btnWrap {
    background-color: var(--accent);
    border-radius: 4px;

    p {
        color: #fff;
        padding: 12px 16px;
    }
}
</style>