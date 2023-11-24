<template>
  <footer class="text-white text-center py-3 footer-custom">
    <div class="contact-links">
      <a href="tel:+123456789"><i class="fas fa-phone"></i>Зателефонувати</a>
      <a href="mailto:studio@example.com"><i class="fa-solid fa-envelope"></i>Написати email</a>
      <a href="https://t.me/studio"><i class="fab fa-telegram"></i> Телеграм</a>
      <a href="https://wa.me/studio"><i class="fab fa-whatsapp"></i> WhatsApp</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer-custom {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: darkslateblue;
  color: #fff;
}

.footer-container {
  padding-bottom: 60px;
}

.footer-custom a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-custom a:hover {
  color: #ddd;
}

.contact-links a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

.contact-links i {
  margin-right: 5px;
  color: #fff;
}

.contact-links a {
  margin-right: 10px;
  color: #fff;
}
</style>