<template>
  <div class="container">
    <PostBlog @blogPosted="loadBlogs" />
  </div>
</template>

<script setup>
import PostBlog from "./PostBlog.vue";

const loadBlogs = () => {};
</script>

<style scoped>
.container {
  margin: 30px 0px 50px 0px;
}
</style>
