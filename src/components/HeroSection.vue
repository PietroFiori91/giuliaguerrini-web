<template>
  <section id="hero" class="hero reveal-section parallax">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <p class="h2-hero mb-3">dottoressa</p>

          <h1 class="h1-hero">
            <span class="line hero-line line-1">Giulia</span>
            <span class="line hero-line line-2">Guerrini</span>
          </h1>

          <div class="icon my-5">
            <img class="mx-auto" src="../assets/images/hero-logo.png" alt="" />
          </div>

          <p class="hero-desc text-regular text-md mb-5">
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
  height: 95vh;
  display: flex;
  align-items: center;
  background: #f7f3ea;
}

.h1-hero {
  font-size: var(--hero);
  font-weight: 300;
  line-height: 0.8;
  letter-spacing: -0.03em;
}

.h2-hero {
  font-size: var(--h3);
  font-weight: 400;
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
