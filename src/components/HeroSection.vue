<template>
  <section id="hero" class="hero reveal-section mt-5">
    <div class="hero-clouds">
      <img src="../assets/images/hero-cloud.png" alt="nuvola bianca" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="h2-hero line-0 mb-3">Dottoressa</h2>

          <h1 class="h1-hero">
            <span class="line hero-line line-1">Giulia</span>
            <span class="line hero-line line-2">Guerrini</span>
          </h1>

          <div class="icon my-5">
            <img
              class="mx-auto"
              src="../assets/images/hero-logo.png"
              alt="logo"
            />
          </div>

          <p class="hero-desc text-medium mb-5">
            Psicoterapeuta ad orientamento psicoanalitico e docente di Yoga.
          </p>

          <a href="mailto:info@giuliaguerrini.com"
            ><button class="btn">
              Contattami <span class="btn-dot"></span></button
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {});

onBeforeUnmount(() => {});
</script>

<style scoped>
.hero {
  position: relative;
  overflow: visible;
  height: 95vh;
  display: flex;
  align-items: center;
  background: #f7f3ea;
}

.hero-clouds {
  position: absolute;
  inset: 0;
  top: -200px;

  width: 100%;
  height: calc(100% + 180px);

  z-index: 0;
  pointer-events: none;

  overflow: hidden;
}

.hero-clouds img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;

  opacity: 0.9;
}

.hero .container {
  position: relative;
  z-index: 2;
}

.h1-hero {
  font-size: var(--hero);
  font-weight: 300;
  line-height: 0.8;
  letter-spacing: -0.03em;
}

.h2-hero {
  font-size: var(--h3);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.hero-line {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}

@media (min-width: 576px) {
  .hero-clouds {
    top: -200px;
    height: calc(100% + 260px);
  }
}

@media (min-width: 768px) {
  .hero-clouds {
    top: -300px;
    height: calc(100% + 260px);
  }
}

@media (min-width: 992px) {
  .hero-clouds {
    top: -400px;
    height: calc(100% + 340px);
  }

  .hero-clouds img {
    transform: scale(1.03);
  }
}

@media (min-width: 1200px) {
  .hero-clouds {
    top: -500px;
    height: calc(100% + 400px);
  }
}
@media (min-width: 1400px) {
  .hero-clouds {
    top: -600px;
    height: calc(100% + 400px);
  }
}
@media (min-width: 1600px) {
  .hero-clouds {
    top: -700px;
    height: calc(100% + 400px);
  }
}
</style>
