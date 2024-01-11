import { ref } from "vue";
import { defineStore } from "pinia";


export const useUserInfo = defineStore("user", () => {
  const userInfo = ref({
    token: "",
    userData: "",
  });
  return {
    userInfo,
  };
});