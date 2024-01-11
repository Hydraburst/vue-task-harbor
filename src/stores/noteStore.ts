import { defineStore } from "pinia";
import { Ref, ref } from "vue";

interface Note {
  responseStatus: string;
  key: number;
}

export const useNoteStore = defineStore("notesList", () => {
  const notes: Ref<Note[]> = ref([]);
  const addNote = (status: string) => {
    const note = {
      responseStatus: status,
      key: Date.now(),
    };
    notes.value.unshift(note);
  };
  return {
    notes,
    addNote,
  };
});
