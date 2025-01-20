<template>
  <div class="row">
    <div class="container col-8">
      <!-- Blog Details -->
      <section id="blog-details" class="blog-details section">
        <div class="container">
          <div class="blog">
            <article class="article">
              <div class="post-img">
                <img :src="blog.image" alt="Blog Image" class="img-fluid" />
              </div>

              <h2 class="title">
                {{ blog.title }}
              </h2>

              <div class="content">
                <p>{{ blog.content }}</p>
              </div>
            </article>
          </div>
          <h4 id="counting" class="mt-4 float-start" v-if="countComment() < 2">
            {{ countComment() }} Comment
          </h4>

          <h4 id="counting" class="mt-4 float-start" v-else>
            {{ countComment() }} Comments
          </h4>
          <br />
          <br />

          <div class="mt-3">
            <ul class="list-group">
              <li
                class="list-group-item-success"
                v-for="(comment, index) in comments"
                :key="index"
                style="display: flex"
              >
                <p style="margin-right: 10px">
                  <strong>{{ comment.name }}: </strong>
                </p>
                {{ comment.text }}
              </li>
            </ul>
          </div>

          <div class="cmt mt-3">
            <h4 class="mt-3 mb-3 float-start">Post Comment</h4>
            <form @submit.prevent="postComment" method="post">
              <textarea
                v-model="commentText"
                class="form-control"
                style="width: 100%; border-radius: 5px"
                name=""
                id=""
                cols="60"
                rows="5"
                placeholder="Điền bình luận *"
              ></textarea>
              <button class="btn btn-success mt-3">Gửi bình luận</button>
            </form>
          </div>
        </div>
      </section>
    </div>

    <!-- Blog Author -->
    <div class="container col-4">
      <div class="blog-author-widget widget-item mt-5">
        <div class="d-flex flex-column align-items-center">
          <img
            src="../assets/img/logoAgain.jpg"
            class="rounded-circle flex-shrink-0"
            alt=""
          />
          <h4 class="mt-3">{{ blog.author }}</h4>
          <div class="social-links">
            <a href="#"><i class="bx bxl-twitter"></i></a>
            <a href="#"><i class="bx bxl-facebook"></i></a>
            <a href="#"><i class="bx bxl-instagram"></i></a>
            <a href="#"><i class="bx bxl-google"></i></a>
          </div>
          <p>
            If you don't have good shot today, don't worry there is a another
            way to be useful!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import router from "../router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const notyf = new Notyf();
const commentText = ref("");
const comments = ref([]);
const user = ref(JSON.parse(localStorage.getItem("user")) || {});
const blogs = ref(JSON.parse(localStorage.getItem("blogs")) || []);
const isLogin = computed(() => store.state.user);
const blog = ref({
  author: "",
  title: "",
  content: "",
  image: "",
});

// Bình luận
const postComment = () => {
  // Check user đã đăng nhập chưa.
  if (!isLogin.value) {
    notyf.error("Vui lòng đăng nhập!");
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  } else {
    if (commentText.value) {
      comments.value.push({
        name: user.value.username,
        text: commentText.value,
      });
      localStorage.setItem("comments", JSON.stringify(comments.value));
      commentText.value = "";
      notyf.success("Đăng bình luận thành công.");
    }
  }
};

// Đếm bình luận
const countComment = () => {
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  return comments.length;
};

// Render ra bình luận
const renderComment = () => {
  comments.value = JSON.parse(localStorage.getItem("comments"));
};

renderComment();

onMounted(() => {
  // Lấy id (index) từ danh sách Blog (ListBlog)
  const blogId = route.params.id;

  // Gán data vào blog
  blog.value = blogs.value[blogId];

  console.log(blog.value);
  console.log(blogId);
});
</script>
