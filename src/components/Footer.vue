<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <!-- IDENTITY -->
      <div class="footer-block">
        <h3 class="footer-title">Dott.ssa Giulia Guerrini</h3>
        <p class="footer-text">
          Psicoterapeuta ad orientamento psicoanalitico<br />
          Docente di Yoga
        </p>
      </div>

      <!-- CONTACTS -->
      <div class="footer-block">
        <h4 class="footer-subtitle">Contatti</h4>
        <a href="mailto:info@giuliaguerrini.com">info@giuliaguerrini.com</a
        ><br />
        <a href="tel:+393347858449">+39 334 785 8449</a><br />
        <span>Milano - via Carlo de Cristoforis 2., Italia</span>
      </div>

      <!-- NAV -->
      <div class="footer-block">
        <h4 class="footer-subtitle">Navigazione</h4>
        <router-link to="/">Home</router-link><br />
        <router-link to="/blog">Blog</router-link><br />
      </div>

      <!-- LEGAL -->
      <div class="footer-block">
        <h4 class="footer-subtitle">Legale</h4>
        <router-link to="/privacy">Privacy Policy</router-link><br />
        <router-link to="/cookie">Cookie Policy</router-link><br />
        <router-link to="/note-legali">Note Legali</router-link>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Tutti i diritti riservati</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--primary);
  color: var(--white);
  padding: 60px 20px 30px;
}

/* MOBILE BASE */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.footer-title {
  font-size: var(--text-lg);
  margin-bottom: 10px;
}

.footer-subtitle {
  font-size: var(--text-md);
  margin-bottom: 12px;
  opacity: 0.9;
}

.footer-text,
.footer-block a,
.footer-block span {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  line-height: 1.6;
}

.footer-block a {
  position: relative;
}

.footer-block a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 1px;
  background: white;
  transition: 0.3s ease;
}

.footer-block a:hover::after {
  width: 100%;
}

.footer-bottom {
  margin-top: 50px;
  text-align: center;
  font-size: var(--text-xs);
  opacity: 0.7;
}

/* =========================
TABLET (≥ 768px)
========================= */
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

/* =========================
DESKTOP (≥ 992px)
========================= */
@media (min-width: 992px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .site-footer {
    padding: 80px 60px 30px;
  }
}
</style>
