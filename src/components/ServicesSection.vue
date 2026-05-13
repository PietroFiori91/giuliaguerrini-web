<template>
  <section id="services" class="services-section reveal-section">
    <div class="container">
      <div class="services-card">
        <div class="row g-5 align-items-start">
          <!-- LEFT -->
          <div class="col-lg-6">
            <div class="left-content">
              <h3 class="h2-services stagger-text mb-4">A chi mi rivolgo</h3>

              <p class="stagger-text intro-text">
                Un percorso di benessere è per chi sente il bisogno di fermarsi,
                ascoltarsi e ritrovare equilibrio. Accompagno persone in diverse
                fasi della vita, offrendo uno spazio sicuro in cui mente e corpo
                possono tornare in armonia.
              </p>
            </div>
          </div>

          <!-- RIGHT -->
          <div class="col-lg-6">
            <div class="accordion-wrap">
              <div
                v-for="(item, index) in items"
                :key="index"
                class="accordion-item-custom"
              >
                <button class="accordion-head" @click="toggle(index)">
                  <div class="title-wrap">
                    <span class="dot"></span>
                    <span class="text-medium stagger-text">{{
                      item.title
                    }}</span>
                  </div>

                  <span class="icon">
                    {{ openIndex === index ? "×" : "+" }}
                  </span>
                </button>

                <transition name="accordion">
                  <div
                    v-if="openIndex === index"
                    class="accordion-body stagger-text"
                  >
                    <p>
                      {{ item.text }}
                    </p>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <!-- END RIGHT -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const openIndex = ref(0);

const items = [
  {
    title: "Sovraccarico",
    text: "Quando tutto pesa troppo e senti il bisogno di ritrovare respiro, calma e centratura.",
  },
  {
    title: "Cambiamento",
    text: "Nei momenti di transizione personale, lavorativa o affettiva che richiedono nuove risorse.",
  },
  {
    title: "Ricerca di sé",
    text: "Per chi desidera conoscersi meglio, comprendere i propri schemi e crescere interiormente.",
  },
  {
    title: "Equilibrio",
    text: "Quando mente e corpo chiedono ascolto e desideri una nuova armonia quotidiana.",
  },
];

const toggle = (index) => {
  if (openIndex.value === index) {
    openIndex.value = null;
    return;
  }

  if (openIndex.value !== null) {
    openIndex.value = null;

    setTimeout(() => {
      openIndex.value = index;
    }, 260);
  } else {
    openIndex.value = index;
  }
};
</script>

<style scoped>
.h2-services {
  color: var(--text-dark);
}
.services-section {
  padding: 100px 0;
  background: var(--bg);
}

.services-card {
  background: #6b817857;
  border-radius: 12px;
  padding: 60px;
}

.left-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro-text {
  max-width: 520px;
  line-height: 1.7;
  color: var(--text-dark);
}

/* RIGHT SIDE */
.accordion-wrap {
  width: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.accordion-item-custom {
  border-bottom: 1px solid rgba(39, 49, 45, 0.2);
}

.accordion-head {
  width: 100%;
  background: transparent;
  border: none;
  padding: 22px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--text-dark);
  font-size: 1.15rem;
  text-align: left;
}

.accordion-head:hover .icon {
  transform: rotate(90deg);
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #27312d90;
  flex-shrink: 0;
}

.icon {
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1;
  transition: transform 0.35s ease;
}

.accordion-body {
  height: 110px;
  padding: 12px 0 0 30px;
  overflow: hidden;
}

.accordion-body p {
  color: var(--text-dark);
  line-height: 1.7;
  max-width: 460px;
}

/* ANIMATION */
.accordion-enter-active,
.accordion-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* ANIMATION SMOOTH */
.accordion-enter-active,
.accordion-leave-active {
  transition:
    max-height 0.45s ease,
    opacity 0.35s ease,
    transform 0.35s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-8px);
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 180px;
  opacity: 1;
  transform: translateY(0);
}

/* MOBILE */
@media (max-width: 992px) {
  .services-card {
    padding: 34px 24px;
    margin: 0;
  }

  .services-section {
    padding: 70px 0;
  }

  .intro-text {
    margin-bottom: 20px;
  }
}
</style>
