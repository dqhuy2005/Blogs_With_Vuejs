<script setup>
import hh from "./components/commons/header.vue";
import foo from "./components/commons/footer.vue";
</script>

<template>
  <div class="app">
    <hh></hh>
    <br />
    <main class="main-content">
      <RouterView />
    </main>
    <br />

    <foo />
  </div>
</template>
<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
}
</style>
