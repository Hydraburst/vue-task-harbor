<template lang="pug">
transition-group(tag="ul" name="user-list") 
  li(
    v-for="(note, index) in noteStore.notes " 
    :key="note.key" 
    :id="index"
    ) 
    notification(
      :note="note"
      @onRemoveNote="(removeNote(index))"
      )
</template>
<script setup>
import Notification from './Notification.vue';
import { useNoteStore } from '../../stores/noteStore';
const noteStore = useNoteStore()


const removeNote = (idx) => {
  noteStore.notes.splice(idx, 1)
}
</script>

<style lang="scss" scoped>
ul {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 1rem;
  right: 2rem;
  list-style: none;
  gap: 1rem;
  margin: 1rem 0;
  padding: 0;
}


li {
  text-align: center;
}


.user-list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}


.user-list-enter-active {
  transition: all 0.3s ease-out;
}


.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}


.user-list-leave-active {
  transition: all 0.3s ease-in;
}


.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


.user-list-move {
  transition: transform 0.8s ease;
}
</style>