import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const userInfo = ref({
    token: "",
    email: "",
    username: "",
  });

  const notes = ref([]);
  const error = ref("");
  const responseStatus = ref("");

  const addNote = (err, status) => {
    const note = {
      error: err,
      responseStatus: status,
      key: Date.now(),
    };
    notes.value.unshift(note);
  };

  const auth = async (payload) => {
    error.value = "";
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
      responseStatus.value = "400";
      addNote(error, responseStatus);
    }
    if (!error.value) {
      responseStatus.value = "200";
      error.value = "Successfully";
      addNote(error, responseStatus);
    }
  };
  return {
    auth,
    userInfo,
    error,
    responseStatus,
    notes,
    addNote
  };
});
