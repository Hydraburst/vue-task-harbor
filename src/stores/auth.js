import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const userInfo = ref({
    token: "",
    email: "",
    username: "",
  });

  const error = ref("");
  const responseStatus = ref("")
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
    } catch (err) {
      error.value = err.response.data.error.message;
      responseStatus.value="400"
    }
    if (!error.value) {
      responseStatus.value="200"
      error.value = "Successfully"
    }    
  };
  return {
    auth,
    userInfo,
    error,
    responseStatus,
  };
});
