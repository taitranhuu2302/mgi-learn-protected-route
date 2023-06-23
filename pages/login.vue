<template>
  <div id="root">
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script setup lang="ts">

const router = useRouter()

const handleLogin = async () => {
  const token = useCookie('token')
  token.value = `1`
  await router.push('/')
}
</script>

<style scoped>
#root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
button {
  padding: 10px 20px;
  cursor: pointer;
  background-color: cornflowerblue;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  opacity: 0.8;
}
</style>
