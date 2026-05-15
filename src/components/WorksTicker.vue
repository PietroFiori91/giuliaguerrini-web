<template>
  <section class="works-strip">
    <div class="move-track" ref="track">
      <div class="container-fluid px-0">
        <div class="row g-0 align-items-center text-center">
          <div class="col-2 item text-item">Works</div>
          <div class="col-2 item shape-item">
            <img src="@/assets/images/shape.png" alt="" />
          </div>

          <div class="col-2 item text-item">Works</div>
          <div class="col-2 item shape-item">
            <img src="@/assets/images/shape.png" alt="" />
          </div>

          <div class="col-2 item text-item">Works</div>
          <div class="col-2 item shape-item">
            <img src="@/assets/images/shape.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const track = ref(null);

let lastScroll = 0;
let offset = 0;

const onScroll = () => {
  const current = window.scrollY;

  const direction = current > lastScroll ? 1 : -1;

  offset += direction * 1.2;

  if (track.value) {
    track.value.style.transform = `translate3d(${offset}px,0,0)`;
  }

  lastScroll = current;
};

onMounted(() => {
  lastScroll = window.scrollY;
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.works-strip {
  background: #f7f3ea;
  padding: 28px 0;
  overflow: hidden;
}

.move-track {
  will-change: transform;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-item {
  font-size: 1.35rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 0.08em;
  color: var(--text-dark);
}

.shape-item img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

/* =========================
TABLET
========================= */

@media (min-width: 768px) {
  .works-strip {
    padding: 34px 0;
  }

  .text-item {
    font-size: 2rem;
  }

  .shape-item img {
    width: 24px;
    height: 24px;
  }
}

/* =========================
DESKTOP
========================= */

@media (min-width: 992px) {
  .works-strip {
    padding: 42px 0;
  }

  .text-item {
    font-size: 3rem;
  }

  .shape-item img {
    width: 34px;
    height: 34px;
  }
}
</style>
