<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black p-0" id="navbar">
    <div class="container-fluid">
      <a style="margin-left: 20%" class="navbar-brand" href="#">
        <router-link to="/" Home>
          <img
            src="../../assets/img/logo.png"
            alt="Error Image"
            width="100px"
          />
        </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse float-end"
        id="navbarNav"
        style="margin-left: 20%"
      >
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link class="router-link" to="/">Trang chủ</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link class="router-link" to="/about">Về tôi</router-link>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link class="router-link" to="/blog"
                >Các bài đăng</router-link
              >
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="checkAccount">
              Đăng bài
            </a>
          </li>

          <template v-if="!isLogin">
            <li class="nav-item">
              <a href="" class="nav-link">
                <router-link class="router-link" to="/login"
                  >Đăng nhập</router-link
                >
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                <router-link class="router-link" to="/register"
                  >Đăng ký</router-link
                >
              </a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="logout">Đăng xuất</a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">Welcome {{ account.username }}!</a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf();
const router = useRouter();
const store = useStore();

const account = computed(() => store.state.user);
const isLogin = computed(() => store.state.user);

const logout = () => {
  notyf.success("Đăng xuất thành công.");
  localStorage.removeItem("currentUser");
  setTimeout(() => {
    // Gọi mutation để cập nhật trạng thái user sau khi đăng xuất
    store.commit("logout");
    router.push("/login");
  }, 1500);
};

//console.log(isLogin);

// Check user đã đăng nhập mới cho vào Post Blog
const checkAccount = () => {
  if (!isLogin.value) {
    notyf.error("Vui lòng đăng nhập!");
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  } else {
    router.push("/test");
  }
};

onMounted(() => {
  store.commit("checkAccount");
});
</script>

<style>
#navbar {
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
}

li.nav-item {
  margin: 0px 10px;
  padding: 5px;
}

.router-link {
  text-decoration: none;
  color: #ffffff8c;
  font-weight: 400;
}

.router-link:hover {
  color: #fff;
}
</style>
