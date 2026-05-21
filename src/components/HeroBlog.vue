<template>
  <section id="hero" class="hero hero-blog reveal-section">
    <div class="hero-clouds">
      <img src="../assets/images/hero-cloud.png" alt="nuvola bianca" />
    </div>

    <div class="container hero-inner">
      <div class="row">
        <div class="col-12 text-center">
          <!-- spacer identico alla home -->
          <p class="h2-hero line-0 mb-3 ghost">&nbsp;</p>

          <h1 class="h1-hero blog-title">
            <span class="line">Blog</span>
            <span class="line hero-line ghost">&nbsp;</span>
          </h1>

          <!-- icon spacer identico -->
          <div class="icon my-5 ghost"></div>

          <!-- subtitle spacer -->
          <p class="hero-desc mb-5 ghost">&nbsp;</p>

          <!-- button spacer -->
          <div class="ghost-btn"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import gsap from "gsap";

onMounted(async () => {
  await nextTick();

  // aspetta fine paint + uscita loader
  setTimeout(() => {
    requestAnimationFrame(() => {
      gsap.from(".blog-title .line", {
        y: 40,
        opacity: 0,
        filter: "blur(6px)",
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
      });
    });
  }, 650);
});
</script>

<style scoped>
.hero {
  position: relative;
  height: 85vh;
  display: flex;
  align-items: center;
  background: #f7f3ea;
  overflow: visible;
}

.hero-inner {
  position: relative;
  z-index: 2;
}

/* invisibili ma occupano spazio identico Home */
.ghost {
  opacity: 0;
}

.ghost-btn {
  height: 180px; /* uguale al bottone home */
}

/* =========================
   CLOUDS (UGUALE HOME)
========================= */
.hero-clouds {
  position: absolute;
  inset: 0;
  top: -80px;

  width: 100%;
  height: calc(100% + 180px);

  z-index: 0;
  pointer-events: none;
  overflow: visible;
}

.hero-clouds img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
  opacity: 0.9;
}

/* responsive clouds identico home */
@media (min-width: 576px) {
  .hero-clouds {
    top: -120px;
    height: calc(100% + 260px);
  }
}

@media (min-width: 768px) {
  .hero-clouds {
    top: -180px;
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

/* =========================
   TYPO
========================= */
.h1-hero {
  font-size: var(--hero);
  font-weight: 300;
  line-height: 0.8;
  letter-spacing: -0.03em;
}

/* ALZAMENTO BLOG */
.blog-title {
  transform: translateY(-10px);
}

/* container sopra nuvole */
.hero .container {
  position: relative;
  z-index: 2;
}
</style>
