<template>
  <div class="post-blog mt-5">
    <div class="row">
      <div class="col-12">
        <h2>Thêm mới Blog</h2>
        <form @submit.prevent="submitBlog">
          <div class="mb-3">
            <label for="title" class="form-label float-start">Title</label>
            <input
              v-model="blog.title"
              type="text"
              class="form-control"
              id="title"
              :disabled="isRead"
              required
            />
          </div>
          <div class="mb-3">
            <label for="content" class="form-label float-start">Content</label>
            <textarea
              v-model="blog.content"
              class="form-control"
              id="content"
              rows="5"
              required
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="image" class="form-label float-start">Image URL</label>
            <input
              v-model="blog.image"
              type="url"
              class="form-control"
              id="image"
              placeholder="Enter image URL"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary m-5 mt-0 mb-0"
            :hidden="isRead"
          >
            Post
          </button>

          <button
            @click="updateBlog"
            type="button"
            class="btn btn-primary ml-3"
            :hidden="!isRead"
          >
            Update
          </button>
        </form>
      </div>
      <div class="col-12">
        <table class="table table-active mt-3">
          <thead>
            <tr>
              <th>Tác giả</th>
              <th>Tiêu đề</th>
              <th>Nội dung</th>
              <th colspan="2">Tương tác</th>
            </tr>
          </thead>
          <tbody>
            <tr id="blog-tr" v-for="(blog, index) in blogs" :key="index">
              <td v-if="blog.author === userLogin">{{ blog.author }}</td>
              <td v-if="blog.author === userLogin">{{ blog.title }}</td>
              <td v-if="blog.author === userLogin">{{ blog.content }}</td>
              <td v-if="blog.author === userLogin">
                <button @click="editBlog(index)">Sửa</button>
              </td>
              <td v-if="blog.author === userLogin">
                <button @click="deleteBlog(index)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

// Define
const notyf = new Notyf();
const blog = ref({
  title: "",
  content: "",
  image: "",
});
const isRead = ref(false);
const user = ref(JSON.parse(localStorage.getItem("user")) || {});
const blogs = ref(JSON.parse(localStorage.getItem("blogs")) || []);
const currentUser = ref(JSON.parse(localStorage.getItem("currentUser")) || {});

// Username của người dùng hiện tại
const userLogin = currentUser.value.username;

// Lọc bài viết theo tài khoản hiện tại
const filterAuthor = computed(() => {
  return blogs.value.filter((blog) => blog.author === userLogin);
});

const emit = defineEmits(["blogPosted"]);

// CRUD Blog

// Create
const submitBlog = () => {
  blogs.value.push({
    author: currentUser.value.username,
    title: blog.value.title,
    content: blog.value.content,
    image: blog.value.image,
  });
  localStorage.setItem("blogs", JSON.stringify(blogs.value));
  notyf.success("Đã thêm bài đăng mới thành công.");

  emit("blogPosted");
  clearForm();
};

// Edit (đẩy dữ liệu -> form )
const editBlog = (index) => {
  const usernameCurrent = currentUser.value.username;

  // Chọc blog trong blogs dựa vào index - Ex:blogs.forEach(blog => {...})
  const blogEdit = blogs.value[index];

  if (blogEdit.author === usernameCurrent) {
    // Push data {title, content, image} -> form
    blog.value = { ...blogEdit };
    isRead.value = true;
  } else {
    notyf.error("Bạn không có quyền chỉnh sửa bài viết này.");
    return;
  }
  // console.log("Current username: ", usernameCurrent);
  // console.log("Author: ", blogEdit.author);
};

const updateBlog = () => {
  // Tìm vị trí index trong mảng blogs
  const index = blogs.value.findIndex(
    (item) => item.title === blog.value.title
  );

  // blog != null
  if (index !== -1) {
    // Data từ blogs[index] -> Update lại trừ Author
    blogs.value[index] = { author: currentUser.value.username, ...blog.value };
    localStorage.setItem("blogs", JSON.stringify(blogs.value));
    clearForm();
    notyf.success("Đã cập nhật bài đăng thành công.");
    isRead.value = false;
  } else {
    notyf.error("Không tìm thấy bài đăng để cập nhật.");
    return;
  }
};

// Delete
const deleteBlog = (index) => {
  const blogToDelete = blogs.value[index];

  if (blogToDelete.author === currentUser.value.username) {
    blogs.value.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs.value));
    notyf.success("Đã xóa bài đăng thành công.");
    clearForm();
  } else {
    notyf.error("Bạn không có quyền xóa bài viết này.");
    return;
  }
};

const clearForm = () => {
  isRead.value = false;
  blog.value.title = "";
  blog.value.content = "";
  blog.value.image = "";
};
</script>

<style scoped>
#blog-tr td {
  width: 200px;
  height: auto;
}

#blog-tr td button {
  border-radius: 8px;
  margin: 0 auto;
}
</style>
