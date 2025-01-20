<template>
  <div class="container">
    <section id="blog-posts-2" class="blog-posts-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="item in blogs">
            <article>
              <div class="post-img">
                <img :src="item.image" alt="" class="img-fluid" />
                <div class="overlay">Show Detail</div>
              </div>

              <div class="meta-top">
                <ul>
                  <li class="d-flex align-content-start">
                    <a id="title-article" href="#"
                      ><strong>{{ item.title }}</strong></a
                    >
                  </li>
                  <!-- <li class="d-flex align-content-start">
                    <i class="bi bi-dot"></i>
                    <a href="#"
                      ><time>{{ item.date }}</time></a
                    >
                  </li> -->
                </ul>
              </div>
              <br />
              <h2 class="title">
                <a href="#" class="text-center">{{ item.content }}</a>
              </h2>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- <el-pagination
    @current-change="handlePageChange"
    :current-page="currentPage"
    :page-size="pageSize"
    :total="totalItems"
    layout="total, prev, pager, next"
  >
  </el-pagination> -->

  <!-- Chuyển trang / SubList -->
  <!-- <section id="blog-pagination" class="blog-pagination section">
    <div class="container mb-5">
      <div class="d-flex justify-content-center">
        <ul>
          <li class="mt-1">
            <button
              class="btn btn-outline-info border-0 d-block"
              @click="goFirst"
              :disabled="currentPage == 1"
            >
              <i class="bx bx-chevrons-left" style="color: "></i>
            </button>
          </li>
          <li class="mt-1">
            <button
              class="btn btn-outline-info border-0 d-block"
              @click="goPrevious"
              :disabled="currentPage == 1"
            >
              <i class="bx bx-chevron-left"></i>
            </button>
          </li>
          <li v-for="i in totalPages">
            <button
              @click="changePage(i)"
              class="bi-circle"
              style="border-radius: 50%"
            >
              {{ i }}
            </button>
          </li>

          <li class="mt-1">
            <button
              class="btn btn-outline-info border-0"
              href="#"
              @click="goNext"
              :disabled="currentPage == totalPages"
            >
              <i class="bx bx-chevron-right"></i>
            </button>
          </li>
          <li class="mt-1">
            <button
              class="btn btn-outline-info border-0 d-block"
              @click="goLast"
              :disabled="currentPage == totalPages"
            >
              <i class="bx bx-chevrons-right"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section> -->
</template>

<script setup>
// import img1 from "../assets/img/bg4.jpg";
// import img2 from "../assets/img/anoyo.jpg";
// import img3 from "../assets/img/Outsider.jpg";
// import img4 from "../assets/img/bg1.jpg";
// import img5 from "../assets/img/bg2.jpg";
// import img6 from "../assets/img/bg4.jpg";

// const items = ref([
//   {
//     title: "Music",
//     date: "Jan 1, 2022",
//     content: "Dolorum optio tempore voluptas dignissimos",
//     image: img1,
//   },
//   {
//     title: "Music",
//     date: "Sep 18, 2022",

//     content: "Nisi magni odit consequatur autem nulla dolorem",
//     image: img2,
//   },
//   {
//     title: "Music",
//     date: "Feb 12, 2022",
//     content: "Possimus soluta ut id suscipit soluta",
//     image: img3,
//   },
//   {
//     title: "Music",
//     date: "Feb 12, 2022",
//     content: "Possimus soluta ut id suscipit soluta",
//     image: img4,
//   },
//   {
//     title: "Music",
//     date: "Feb 12, 2022",
//     content: "Possimus soluta ut id suscipit soluta",
//     image: img5,
//   },
//   {
//     title: "Music",
//     date: "Feb 12, 2022",
//     content: "Possimus soluta ut id suscipit soluta",
//     image: img6,
//   },
// ]);

import { ref, computed } from "vue";

const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
console.log(blogs);

const currentPage = ref(1);
const pageSize = ref(3);

// const paginatedData = computed(() => {
//   const start = (currentPage.value - 1) * pageSize.value;
//   const end = start + pageSize.value;
//   return items.value.slice(start, end);
// });

// const totalItems = computed(() => items.value.length);
// const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value));

// const changePage = (element) => {
//   currentPage.value = element;
// };

// const goFirst = () => {
//   currentPage.value = 1;
// };

// const goPrevious = () => {
//   if (currentPage.value > 1) {
//     currentPage.value--;
//   }
// };

// const goNext = () => {
//   if (currentPage.value < totalPages.value) {
//     currentPage.value++;
//   }
// };

// const goLast = () => {
//   currentPage.value = totalPages.value;
// };
</script>

<style scoped>
.container {
  margin-top: 25px;
}

i {
  color: #000;
  font-size: 24px;
}

a {
  text-decoration: none;
  list-style: none;
}
.title {
  margin-top: -25px;
  color: #2d465e;
  transition: 0.4s;
  float: inline-start;
}

.title a {
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

time {
  margin-left: 10px;
}

.img-fluid {
  transition: 0.5s ease-in-out;
}

.img-fluid:hover {
  opacity: 0.3;
  transform: scale(1.3);
}

.post-img {
  position: relative;
  display: inline-block;
  background-color: black;
  width: 100%;
}

.post-img img {
  display: block;
  width: 100%;
  height: 220px;
}

.post-img .overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff8c;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 18px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.post-img:hover .overlay {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.1);
}
</style>
