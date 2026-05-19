<template>
  <section class="legal-page">
    <div class="container">
      <div class="legal-wrap">
        <p class="eyebrow">Informative</p>

        <h1>Note Legali</h1>

        <div class="content">
          <h2>Proprietà del sito</h2>

          <p>
            Tutti i contenuti presenti su questo sito, inclusi testi, immagini,
            elementi grafici e materiali pubblicati, sono protetti dalle
            normative vigenti in materia di diritto d’autore.
          </p>

          <h2>Utilizzo dei contenuti</h2>

          <p>
            È vietata la copia, riproduzione o diffusione dei contenuti senza
            autorizzazione del titolare del sito.
          </p>

          <h2>Responsabilità</h2>

          <p>
            I contenuti pubblicati hanno finalità esclusivamente informative e
            non sostituiscono percorsi professionali, terapeutici o consulenze
            personalizzate.
          </p>

          <h2>Link esterni</h2>

          <p>
            Il sito può contenere collegamenti a risorse esterne. Non si assume
            responsabilità riguardo contenuti, disponibilità o aggiornamenti di
            siti terzi.
          </p>

          <h2>Contatti</h2>

          <p>
            Per comunicazioni ufficiali è possibile utilizzare i riferimenti
            presenti nella sezione contatti del sito.
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
