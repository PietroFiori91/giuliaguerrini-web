<template>
  <div class="loader">
    <div class="dot"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.loader {
  position: fixed;
  inset: 0;
  background: #f7f3ea;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  opacity: 1;
  transition: opacity 0.5s ease;
}

.dot {
  width: 14px;
  height: 14px;
  background: #5e7468;
  border-radius: 50%;
  animation: pulse 1s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.8);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
