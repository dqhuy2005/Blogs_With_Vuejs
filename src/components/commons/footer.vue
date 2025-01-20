<template>
  <section class="footer light-background">
    <div class="container-fluid">
      <div class="row g-4 mb-2">
        <!-- About Us -->
        <div class="col-md-4 col-12">
          <div class="widget">
            <h3 class="widget-heading">About Us</h3>
            <p>
              Mục đích thực hiện một trang blog đơn giản bằng BS5 và Vue.js làm
              bài tập nộp Assignment môn học.
              <br />
              <strong>Đặng Quốc Huy - PS41316</strong>
            </p>
            <a href="#" class="btn btn-outline-info btn-sm">Learn more</a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="col-md-4 col-12">
          <div class="widget">
            <h3 class="widget-heading">Navigation</h3>
            <ul class="footer-links d-flex flex-column gap-2">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
        </div>

        <!-- Social Media -->
        <div class="col-md-4 col-12">
          <div class="widget">
            <h3 class="widget-heading">Connect with Us</h3>
            <ul class="social-icons d-flex justify-content-center">
              <li>
                <a href="#"><i class="bx bxl-facebook"></i> </a>
              </li>
              <li>
                <a href="#"><i class="bx bxl-twitter"></i> </a>
              </li>
              <li>
                <a href="#"><i class="bx bxl-linkedin"></i></a>
              </li>
              <li>
                <a href="#"><i class="bx bxl-google"></i> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="copyright d-flex flex-column flex-md-row align-items-center justify-content-between"
      >
        <p class="mb-md-0">
          <strong>&copy None Person</strong>. All Rights Reserved.
        </p>
        <div class="credits">
          Designed by
          <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>
          | Distributed by
          <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: #6c757d;
  font-size: 14px;
}

.widget-heading {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 5px;
}

.footer-links a {
  color: #dee2e6;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #007bff;
}

.social-icons {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
}

.social-icons li {
  display: inline;
}

.social-icons a {
  color: #6c757d;
  text-decoration: none;
  font-size: 20px;
  transition: 0.3s;
}

.social-icons a i {
  margin-top: 10px;
}

.copyright {
  font-size: 13px;
  text-align: center;
}

.credits a {
  color: #007bff;
  text-decoration: none;
}

.credits a:hover {
  text-decoration: underline;
}
</style>
