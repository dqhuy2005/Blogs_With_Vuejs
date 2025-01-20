<template>
  <div class="container">
    <div class="section">
      <div class="row">
        <div class="col-4 align-items-center text-start">
          <span class="section-subtitle" data-aos="fade-up">Welcome </span>
          <h1 class="mb-4" data-aos="fade-up">Assignment BS5 - Vue.js</h1>
          <p data-aos="fade-up">
            - Trang web được thiết kế bằng Bootstrap 5 (v5.3) và Vue.js.
            <br />
            - Made by myself / PS41316
            <br />
            - Design web dựa trên Pattern có sẵn
            <br />
            - Các nghiệp vụ: <br />
            1. CRUD blog <br />
            2. Đăng nhập / Đăng ký <br />
            3. Comment blog (Chưa hoàn chỉnh) <br />
            4. Quản lý tài khoản (Thiếu)
          </p>
          <p class="mt-5" data-aos="fade-up">
            <a href="#" class="btn btn-get-started">Get Started</a>
          </p>
        </div>

        <div class="col-8">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                v-for="(blog, index) in slideShow()"
                :key="index"
                :class="['carousel-item', { active: index === 0 }]"
                data-bs-interval="2500"
              >
                <img :src="blog.image" class="d-block w-100" alt="Blog Image" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- List Blog -->
      <ListBlog />
    </div>
  </div>
</template>

<script setup>
import ListBlog from "./ListBlog.vue";
import { ref } from "vue";
import img1 from "../assets/img/bg2.jpg";
import img2 from "../assets/img/bg3.jpg";
import img3 from "../assets/img/bg4.jpg";

const user = ref(JSON.parse(localStorage.getItem("user")) || {});
const blogs = ref(JSON.parse(localStorage.getItem("blogs")) || []);

const slideShow = () => {
  let arr = blogs.value.slice(0, 3);
  return arr;
};
</script>

<style scoped>
.container {
  margin: 30px 0px 50px 0px;
}

.section-subtitle {
  font-size: 16px;
  color: #6c757d;
}

h1 {
  width: 300px;
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
}

p {
  width: 350px;
  font-size: 16px;
  color: #6c757d;
}

.btn-get-started {
  background-color: #28a745;
  color: #fff;
  border-radius: 25px;
  padding: 10px 25px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}

.carousel-inner img {
  border-radius: 10px;
}
</style>
