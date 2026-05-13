<template>
  <section id="hero" class="hero reveal-section">
    <div class="hero-clouds">
      <img src="../assets/images/hero-cloud.png" alt="nuvola bianca" />
    </div>

    <div class="hero-sun">
      <img src="../assets/images/sun.png" alt="sole giallo" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <p class="h2-hero line-0 mb-3">dottoressa</p>

          <h1 class="h1-hero">
            <span class="line hero-line line-1">Giulia</span>
            <span class="line hero-line line-2">Guerrini</span>
          </h1>

          <div class="icon my-5">
            <img
              class="mx-auto"
              src="../assets/images/hero-logo.png"
              alt="logo"
            />
          </div>

          <p class="hero-desc text-medium mb-5">
            Psicoterapeuta ad orientamento psicoanalitico e docente di Yoga.
          </p>

          <button class="btn hero-btn">Scrivimi →</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: visible;
  height: 95vh;
  display: flex;
  align-items: center;
  background: #f7f3ea;
}

.hero-clouds {
  position: absolute;

  top: -800px;
  left: 0;
  width: 100%;
  height: 130%;

  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.hero-clouds img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  transform: scale(0.85);
  transform-origin: center;
  opacity: 0.9;
}

.hero-sun {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
  filter: blur(0.5px);
}

.hero-sun img {
  width: 180px;
  opacity: 0.85;
}

.hero .container {
  position: relative;
  z-index: 2;
}

.h1-hero {
  font-size: var(--hero);
  font-weight: 300;
  line-height: 0.8;
  letter-spacing: -0.03em;
}

.h2-hero {
  font-size: var(--h3);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.hero-line {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}
</style>
