import { Ref, ref } from "vue";
import { defineStore } from "pinia";

interface UserInfo {
  token: string;
  userData: object;
}

export const useUserInfo = defineStore("user", () => {
  const userInfo: Ref<UserInfo> = ref({
    token: "",
    userData: {},
  });
  return {
    userInfo,
  };
});
