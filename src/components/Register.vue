<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <h4>Đăng ký</h4>

        <div class="col-12 card-body">
          <form
            @submit.prevent="addSomething"
            action=""
            method="get"
            class="p-5"
          >
            <label class="form-label float-start" for="">Tài khoản</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              placeholder="Nhập tên tài khoản"
              v-model="user.username"
            />
            <br />
            <label class="form-label float-start" for="">Mật khẩu</label>
            <input
              type="password"
              class="form-control"
              name=""
              id=""
              placeholder="Nhập mật khẩu"
              v-model="user.password"
            />
            <br />
            <label class="form-label float-start" for=""
              >Xác nhận mật khẩu</label
            >
            <input
              type="password"
              class="form-control"
              name=""
              id=""
              placeholder="Nhập lại mật khẩu"
              v-model="confirmPW"
            />
            <br />
            <button @click="create" id="create">Tạo tài khoản</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useRouter } from "vue-router";
const notyf = new Notyf();

const emit = defineEmits(["add-user"]);
const router = useRouter();
const user = ref({
  username: "",
  password: "",
});

const confirmPW = ref("");

const listAcc = ref(JSON.parse(localStorage.getItem("listUser")) || []);

const create = () => {
  // Điều kiện 1
  if (!user.value.username || !user.value.password || !confirmPW.value) {
    notyf.error("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  // Điều kiện 2
  if (user.value.password !== confirmPW.value) {
    notyf.error("Mật khẩu không khớp.");
    return;
  }

  listAcc.value.push({ ...user.value });

  // Cập nhật lại listUser
  localStorage.setItem("listUser", JSON.stringify(listAcc.value));

  notyf.success("Tạo User thành công.");

  router.push("/login");

  // Clean form
  user.value.username = "";
  user.value.password = "";
  confirmPW.value = "";
};
</script>
<style scoped>
.container {
  margin-top: 50px;
}

.card {
  margin-top: 50px;
}

#create {
  border-radius: 8px;
  background-color: #000;
  color: #fff;
}
</style>
