import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const userInfo = ref({
    token: "",
    email: "",
    username: "",
  });
  const auth = async (payload) => {
    try {
      let response = await axios.post("http://localhost:1337/api/auth/local", {
        ...payload,
      });
      userInfo.value = {
        token: response.data.jwt,
        email: response.data.email,
        username: response.data.username,
      };
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return {
    auth,
    userInfo,
  };
});
