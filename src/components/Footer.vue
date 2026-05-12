<template>
  <footer class="footer-custom">
    <div class="container footer-wrap">
      <p>© 2026 Giulia Guerrini</p>

      <div class="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Cookie</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-custom {
  background: #5e7468;
  padding: 30px 0;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p,
a {
  color: white;
}

.footer-links {
  display: flex;
  gap: 20px;
}

a {
  text-decoration: none;
}

@media (max-width: 768px) {
  .footer-wrap {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
