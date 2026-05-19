<template>
  <section class="legal-page">
    <div class="container">
      <div class="legal-wrap">
        <p class="eyebrow">Informative</p>

        <h1>Privacy Policy</h1>

        <div class="content">
          <h2>Titolare del trattamento</h2>

          <p>
            I dati personali raccolti tramite questo sito vengono trattati nel
            rispetto della normativa vigente in materia di protezione dei dati
            personali.
          </p>

          <h2>Dati raccolti</h2>

          <p>
            Possono essere raccolti dati forniti volontariamente tramite modulo
            contatti o strumenti di comunicazione.
          </p>

          <h2>Finalità del trattamento</h2>

          <p>
            I dati vengono utilizzati esclusivamente per rispondere alle
            richieste inviate dall’utente.
          </p>

          <h2>Diritti dell’utente</h2>

          <p>
            L’utente può richiedere modifica, aggiornamento o cancellazione dei
            dati scrivendo al titolare del trattamento.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.legal-page {
  padding: 140px 0;
  background: #f7f3ea;
  min-height: 100vh;
}

.legal-wrap {
  max-width: 850px;
}

.eyebrow {
  font-size: var(--text-xs);
  opacity: 0.6;
  margin-bottom: 14px;
}

h1 {
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 300;
  line-height: 0.9;
  margin-bottom: 60px;
}

.content h2 {
  font-size: var(--text-lg);
  margin-top: 50px;
  margin-bottom: 18px;
  font-weight: 400;
}

.content p {
  font-size: var(--text-sm);
  line-height: 1.9;
  opacity: 0.82;
}
</style>
