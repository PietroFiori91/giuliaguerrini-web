<template>
  <section id="contacts" class="reveal-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 mb-5">
          <h3 class="stagger-text">Iniziamo insieme</h3>
        </div>
      </div>

      <div class="row justify-content-center gy-5">
        <div class="col-10 col-lg-4 text-center">
          <img class="mx-auto mb-5" src="../assets/images/ico-1.png" alt="" />
          <h4 class="stagger-text mb-3">Email</h4>
          <a href="mailto:info@giuliaguerrini.it"
            ><p class="stagger-text">info@giuliaguerrini.it</p></a
          >
        </div>

        <div class="col-10 col-lg-4 text-center">
          <img class="mx-auto mb-5" src="../assets/images/ico-2.png" alt="" />
          <h4 class="stagger-text mb-3">Telefono</h4>
          <a href="tel:+393347858449"
            ><p class="stagger-text">+39 334 785 8449</p></a
          >
        </div>

        <div class="col-10 col-lg-4 text-center">
          <img class="mx-auto mb-5" src="../assets/images/ico-3.png" alt="" />
          <h4 class="stagger-text mb-3">Indirizzo</h4>
          <p class="stagger-text">Milano</p>
        </div>
      </div>
    </div>
  </section>

  <section class="reveal-section mb-0 pb-0">
    <div class="container">
      <div class="row align-center mt-5">
        <div class="col-10 col-lg-8">
          <h3 class="stagger-text text-contacts my-5">
            Ti aspetto per un incontro conoscitivo
          </h3>
          <a href="mailto:info@giuliaguerrini.it"
            ><button class="btn">Scrivimi <span class="btn-dot"></span></button
          ></a>
        </div>

        <div class="col-10 col-lg-4">
          <div class="doctor"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.doctor {
  height: 320px;
  background: url("../assets/images/gg-footer.png") center/contain no-repeat;
}
.text-contacts {
  font-size: 42px;
  line-height: 0.95;
}

@media (min-width: 576px) {
  .doctor {
    height: 350px;
  }
}

@media (min-width: 768px) {
  .doctor {
    height: 370px;
  }
  .text-contacts {
    font-size: 62px;
  }
}

@media (min-width: 992px) {
  .text-contacts {
    font-size: 80px;
    line-height: 70px;
  }
}

@media (min-width: 1200px) {
  .doctor {
    height: 400px;
  }
}
</style>
