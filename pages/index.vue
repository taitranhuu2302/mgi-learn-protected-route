<template>
  <div id="root">
    <div v-if="error">
      {{ error.data.message }}
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: todos, error } = useFetch("/api/todos");
</script>

<style scoped>
#root {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
