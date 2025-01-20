import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Blog from "../components/Blog.vue";
import About from "../components/About.vue";
import Test from "../components/Test.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import DetailBlog from "../components/DetailBlog.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/about", name: "About", component: About },
  { path: "/test", name: "Test", component: Test },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/detail-blog/:id", name: "DetailBlog", component: DetailBlog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
