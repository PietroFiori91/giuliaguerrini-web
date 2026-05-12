<script setup>
import { ref, nextTick, onMounted } from "vue";
import { useRouter } from "vue-router";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import GoTop from "./components/GoTop.vue";
import PageLoader from "./components/PageLoader.vue";
import ScrollProgress from "./components/ScrollProgress.vue";

import { initgsap } from "@/js/gsap.js";
import { initSmoothScroll } from "@/js/smoothScroll";

const loading = ref(false);
const router = useRouter();

const scrollY = ref(0);

const updateScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();
});

/**
 * LOADER SU CAMBIO PAGINA
 */
router.beforeEach((to, from, next) => {
  loading.value = true;
  next();
});

router.afterEach(async () => {
  loading.value = false;

  await nextTick();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initgsap();
    });
  });
});

/**
 * SMOOTH SCROLL (UNA SOLA VOLTA)
 */
onMounted(() => {
  initSmoothScroll();
});
</script>

<template>
  <PageLoader v-if="loading" />

  <ScrollProgress />
  <GoTop />

  <div>
    <Navbar />

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>
