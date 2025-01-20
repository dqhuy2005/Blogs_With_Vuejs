import { createStore } from "vuex";

// Kiểm tra localStorage có user không?
export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    blog: JSON.parse(localStorage.getItem("blog")) || [],
  },
  mutations: {
    login(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    checkAccount(state) {
      state.user = JSON.parse(localStorage.getItem("user"));
    },
  },
});
