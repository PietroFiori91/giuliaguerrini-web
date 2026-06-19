<template>
  <section id="help" class="reveal-section help-section">
    <div class="container">
      <!-- TITLE -->
      <div class="row">
        <div class="col-12 mb-5">
          <h3 class="stagger-text">Lavoro con</h3>
        </div>
      </div>

      <!-- CARDS -->
      <div class="row justify-content-center g-5">
        <!-- CARD -->
        <div class="col-lg-4 col-10">
          <div class="help-card">
            <img src="../assets/images/help-1.png" alt="" class="help-img" />

            <div class="help-content">
              <h4 class="stagger-text">
                SOFFERENZA EMOTIVA,<br />BURN OUT E TRAUMA
              </h4>
              <p class="stagger-text">
                Ansia, Stress, Attacchi di panico, Depressione e stati di umore
                deflesso, Traumi, Burn out, Difficoltà nella regolazione delle
                emozioni
              </p>
            </div>
          </div>
        </div>

        <!-- CARD -->
        <div class="col-lg-4 col-10">
          <div class="help-card">
            <img src="../assets/images/help-2.png" alt="" class="help-img" />

            <div class="help-content">
              <h4 class="stagger-text">
                RELAZIONI, IDENTITA’ <br />E SESSUALITA’
              </h4>
              <p class="stagger-text">
                Difficoltà relazionali e affettive, difficoltà legate
                all’immagine di sé e all’identità personale, disturbi della
                sfera sessuale e dell’intimità personale e di coppia, momenti
                critici del ciclo di vita e fasi di transizione
              </p>
            </div>
          </div>
        </div>

        <!-- CARD -->
        <div class="col-lg-4 col-10">
          <div class="help-card">
            <img src="../assets/images/help-3.png" alt="" class="help-img" />

            <div class="help-content">
              <h4 class="stagger-text">CORPO <br />E SINTOMI</h4>
              <p class="stagger-text">
                Disturbi del comportamento alimentare, Disturbi psicosomatici,
                Dipendenze, Comportamenti compulsivi, difficoltà nel rapporto
                con il corpo e dismorfofobia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.help-section {
  padding: 100px 0;
  background: var(--bg);
}

.help-img {
  width: 55%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 24px;
  margin: 0 auto 48px auto;
  display: block;
}

.help-card {
  text-align: center;
}

.help-content {
  border-left: none;
  padding-left: 0;
}

.help-content h4 {
  margin-bottom: 10px;
}

.help-content p {
  color: var(--text);
  line-height: 1.6;
}

/* MOBILE */
@media (min-width: 992px) {
  .help-img {
    width: 70%;
    margin: 0 0 48px 0;
  }

  .help-card {
    text-align: start;
  }

  .help-content {
    border-left: 1px solid var(--primary);
    padding-left: 18px;
  }
}
@media (min-width: 1200px) {
  .help-img {
    width: 50%;
  }
}
</style>
