<template>
  <div class="list-blog container py-5">
    <h2 class="mb-4">List of Blogs</h2>
    <div class="row gy-4">
      <div v-for="(blog, index) in blogs" :key="index" class="col-12">
        <div class="blog-card d-flex align-items-center p-3">
          <div class="row">
            <div class="blog-image col-3 me-3">
              <a href="#">
                <router-link :to="{ name: 'DetailBlog', params: { id: index } }"
                  ><img :src="blog.image" alt="Blog Image" class="img-fluid"
                /></router-link>
              </a>
            </div>
            <!-- Blog Content -->
            <div class="blog-content col-8">
              <h5 class="mb-2">{{ blog.title }}</h5>
              <br />
              <br />
              <p class="mb-0">{{ blog.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const blogs = ref([]);

const loadBlogs = () => {
  const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.value = storedBlogs;
};

// Chạy hàm khi router đến ListBlog
onMounted(() => {
  loadBlogs();
});
</script>

<style scoped>
.list-blog {
  border-radius: 10px;
  padding: 20px;
}

.blog-card {
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
}

.blog-image img {
  width: 250px;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
}

.blog-content h5 {
  float: left;
  color: #000;
}

.blog-content p {
  float: left;
  text-align: justify;
  color: #000;
}
</style>
