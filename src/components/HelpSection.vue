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
              <h4 class="stagger-text">Sofferenza emotiva <br />e trauma</h4>
              <p class="stagger-text">
                ansia, stress e attacchi di panico
                <br />depressione e stati di umore deflesso <br />traumi e
                vissuti di blocco o sopraffazione emotiva <br />difficoltà nella
                regolazione delle emozioni
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
                Relazioni, identità <br />e sessualità
              </h4>
              <p class="stagger-text">
                difficoltà relazionali e affettive
                <br />difficoltà legate all’immagine di sé e all’identità
                personale <br />disturbi della sfera sessuale e dell’intimità
                <br />momenti critici del ciclo di vita e fasi di transizione
              </p>
            </div>
          </div>
        </div>

        <!-- CARD -->
        <div class="col-lg-4 col-10">
          <div class="help-card">
            <img src="../assets/images/help-3.png" alt="" class="help-img" />

            <div class="help-content">
              <h4 class="stagger-text">Corpo, sintomi <br />e comportamenti</h4>
              <p class="stagger-text">
                disturbi psicosomatici <br />disturbi del comportamento
                alimentare e difficoltà con il rapporto col cibo
                <br />dipendenze e comportamenti compulsivi <br />difficoltà nel
                rapporto con il corpo
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
