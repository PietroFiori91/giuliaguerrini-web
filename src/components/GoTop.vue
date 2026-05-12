<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);
const offsetBottom = ref(30);

const handleScroll = () => {
  const scrollY = window.scrollY;
  const threshold = 150;

  isVisible.value = scrollY > threshold;

  const footer = document.querySelector("footer");
  if (!footer) return;

  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const overlap = windowHeight - footerRect.top;

  if (overlap > 0) {
    offsetBottom.value = overlap + 20;
  } else {
    offsetBottom.value = 30;
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      class="go-top"
      :style="{ bottom: offsetBottom + 'px' }"
      @click="scrollToTop"
    >
      ↑
    </button>
  </Transition>
</template>

<style scoped>
.go-top {
  position: fixed;
  right: 30px;

  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: #5e7468;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;

  transition: bottom 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.go-top.at-footer {
  position: absolute;
  bottom: 20px;
}

.go-top:hover {
  transform: translateY(-3px);
  opacity: 0.9;
}

/* 🎬 Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
