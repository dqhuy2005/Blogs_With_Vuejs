<template>
  <div class="container mb-5">
    <div class="row w-100">
      <div class="col-md-6">
        <div class="card">
          <h4>Đăng nhập</h4>
          <div class="card-body">
            <form @submit.prevent method="post">
              <div class="mb-3">
                <label for="username" class="form-label float-start"
                  >Tài khoản</label
                >
                <input
                  v-model="user.username"
                  type="text"
                  class="username form-control"
                  id="username"
                  name="username"
                  required
                  placeholder=""
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label float-start"
                  >Mật khẩu</label
                >
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  required
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                @click="loginTo"
                class="btn text-light bg-black"
                id="create"
              >
                Đăng nhập
              </button>
            </form>
            <div
              class="mt-3 text-center d-flex align-content-center justify-content-between"
            >
              <a id="none" href="#" @click="changeToRegister"
                >Chưa có tài khoản? Đăng ký tại đây.</a
              >
              <br />
              <a id="none" href="#">Quên mật khẩu?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useStore } from "vuex";

const notyf = new Notyf();
const router = useRouter();
const store = useStore();

const user = ref({
  username: "",
  password: "",
});

const accounts = ref([
  { username: "huydq", password: "123" },
  { username: "hungf", password: "111" },
  { username: "admin", password: "admin" },
]);

const listU = ref(
  JSON.parse(localStorage.getItem("listUser")) || accounts.value
);
console.log(listU);

// Đăng nhập
const loginTo = () => {
  const checkAccount = listU.value.find(
    (account) =>
      account.username === user.value.username &&
      account.password === user.value.password
  );

  if (checkAccount) {
    notyf.success("Đăng nhập thành công.");

    // Lưu tài khoản 'hiện tại' vào localStorage
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        username: user.value.username,
        password: user.value.password,
      })
    );

    setTimeout(() => {
      // Setup thuộc tính vào localStorage - user
      store.commit("login", {
        username: user.value.username,
        password: user.value.password,
      });
      router.push("/");
    }, 2000);
  } else {
    notyf.error("Đăng nhập không thành công.");
    return;
  }
};

const changeToRegister = () => {
  router.push("/register");
};
</script>

<style scoped>
.container {
  max-width: 1280px;
  height: 500px;
  margin-top: 50px;
}

.card {
  width: 1200px;
  margin-top: 50px;
}

#none {
  font-size: 12px;
  font-style: normal;
}

#create {
  border-radius: 8px;
  background-color: #000;
  color: #fff;
}
</style>
