<template>
  <section id="services" class="services-section reveal-section">
    <div class="container">
      <div class="services-card">
        <div class="row g-5 align-items-start">
          <!-- LEFT -->
          <div class="col-lg-6">
            <div class="left-content">
              <h3 class="h2-services stagger-text mb-4">Di cosa mi occupo</h3>

              <p class="stagger-text intro-text">
                Accompagno le persone in percorsi di cura e crescita personale,
                lavorando su ansia, traumi, difficoltà relazionali, disturbi
                psicosomatici, depressione, disturbi della sfera sessuale,
                dipendenze, problematiche legate all’immagine di sé e al
                rapporto con il proprio corpo, disturbi alimentari e problemi
                evolutivi del ciclo di vita. <br /><br />Su richiesta, integro
                alla clinica tecniche di respirazione, rilassamento e lavoro
                mente-corpo per favorire equilibrio psicofisico, presenza,
                concentrazione e consapevolezza.
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
                    <span class="text-md stagger-text">{{ item.title }}</span>
                  </div>

                  <span class="icon">
                    {{ openIndex === index ? "×" : "+" }}
                  </span>
                </button>

                <transition name="accordion">
                  <div
                    v-if="openIndex === index"
                    class="accordion-body stagger-text text-md"
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
    title: "Sostegno psicologico",
    text: "Percorsi di supporto e orientamento rivolti a chi attraversa momenti di vulnerabilità, cambiamento o stress emotivo. Il lavoro psicologico accompagna la persona verso una più profonda consapevolezza di sè e delle proprie dinamiche interiori per aver accesso alle proprie risorse interne durante momenti di cambiamento delicati.",
  },
  {
    title: "Psicoterapia",
    text: "La psicoterapia rappresenta uno spazio di parola, ascolto e trasformazione, in cui il sintomo e la sofferenza vengono accolti come espressioni di una storia personale e affettiva più profonda. Il percorso terapeutico accompagna la persona verso una maggiore comprensione di sé, delle proprie modalità relazionali e dei vissuti emotivi che attraversano il corpo e la mente. Lavoro con adolescenti e adulti che vivono momenti di sofferenza psicologica, difficoltà relazionali, problematiche legate al corpo e all’alimentazione, stati depressivi, ansia, traumi e dipendenze.",
  },
  {
    title: "Mente-corpo",
    text: "Su richiesta, il lavoro clinico può essere affiancato da tecniche di respirazione, meditazione e tecniche derivate dallo Yoga tradizionale, come sostegno al processo terapeutico, per sostenere presenza, regolazione emotiva e connessione con sè stessi.",
  },
  {
    title: "Classi Yoga",
    text: "Propongo percorsi individuali e classi di gruppo, in presenza e online, secondo il metodo Prana Vashya e Hatha, metodi tradizionali, in cui ogni movimento è guidato dal ritmo del respiro e orientato allo sviluppo di stabilità, ascolto e consapevolezza.",
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
}

.services-card {
  background: #6b817857;
  border-radius: 12px;
  padding: 60px;
}

.stagger-text {
  color: var(--text-dark);
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
  overflow: auto;
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
