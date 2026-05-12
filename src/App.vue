<script setup>
import { onMounted, ref, nextTick } from "vue";
import { useRouter } from "vue-router";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import GoTop from "./components/GoTop.vue";
import PageLoader from "./components/PageLoader.vue";
import ScrollProgress from "./components/ScrollProgress.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { initgsap } from "@/js/gsap.js";
import { initSmoothScroll } from "@/js/smoothScroll";

const loading = ref(true);
const router = useRouter();

const scrollY = ref(0);

const updateScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 600);
});

/**
 * LOADER SU CAMBIO PAGINA
 */
router.beforeEach(() => {
  loading.value = true;
});

router.afterEach(async () => {
  await nextTick();

  setTimeout(() => {
    loading.value = false;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initgsap();
        ScrollTrigger.refresh();
      });
    });
  }, 500);
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
