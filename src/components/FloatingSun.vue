<template>
  <div class="sun" :style="style"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const x = ref(0);
const y = ref(0);

const targetX = ref(0);
const targetY = ref(0);

const isMobile = ref(false);

const style = ref({
  transform: "translate(-50%, -50%)",
});

/**
 * mouse tracking
 */
const onMouseMove = (e) => {
  targetX.value = e.clientX;
  targetY.value = e.clientY;
};

/**
 * smooth animation (lerp lento)
 */
const animate = () => {
  // rallentamento forte = movimento morbido
  x.value += (targetX.value - x.value) * 0.006;
  y.value += (targetY.value - y.value) * 0.006;

  if (!isMobile.value) {
    style.value = {
      transform: `translate(${x.value - 90}px, ${y.value - 90}px)`,
    };
  }

  requestAnimationFrame(animate);
};

const checkMobile = () => {
  isMobile.value = window.innerWidth < 992;
};

onMounted(() => {
  checkMobile();

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("resize", checkMobile);

  // centro iniziale
  targetX.value = window.innerWidth / 2;
  targetY.value = window.innerHeight / 2;

  x.value = targetX.value;
  y.value = targetY.value;

  animate();
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("resize", checkMobile);
});
</script>

<style scoped>
.sun {
  position: fixed;
  top: 0;
  left: 0;

  width: 180px;
  height: 180px;
  border-radius: 50%;

  background-color: #2a58ff4f;

  pointer-events: none;
  z-index: 1;

  will-change: transform;

  mix-blend-mode: difference;
  filter: blur(1px) brightness(1.1);
  opacity: 0.9;
}
</style>
