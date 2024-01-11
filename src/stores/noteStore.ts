import { defineStore } from "pinia";
import {ref} from "vue"

export const useNoteStore = defineStore("notesList", () => {
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
  return {
    notes,
    addNote,
  }
});
