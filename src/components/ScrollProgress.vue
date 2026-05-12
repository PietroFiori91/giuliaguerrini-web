<template>
  <div v-if="visible" class="scroll-progress">
    <div class="bar" :style="{ height: progress + '%' }"></div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isHome = computed(() => route.path === "/");

const progress = ref(0);
const visible = ref(false);

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  progress.value = percent;

  visible.value = isHome.value && scrollTop > 150;
};

const onScroll = () => updateProgress();

/**
 * listener dinamico
 */
watch(
  isHome,
  (val) => {
    if (val) {
      window.addEventListener("scroll", onScroll, { passive: true });
      updateProgress();
    } else {
      window.removeEventListener("scroll", onScroll);
      progress.value = 0;
      visible.value = false;
    }
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);

  width: 2px;
  height: 180px;

  background: rgba(94, 116, 104, 0.15);
  border-radius: 20px;

  z-index: 999;
  overflow: hidden;
}

.bar {
  width: 100%;
  height: 0%;
  background: #5e7468;
  transition: height 0.25s ease-out;
}
</style>
