<template>
  <section class="legal-page">
    <div class="container">
      <div class="legal-wrap">
        <p class="eyebrow">Informative</p>

        <h1>Cookie Policy</h1>

        <div class="content">
          <h2>Cosa sono i cookie</h2>

          <p>
            I cookie sono piccoli file di testo che i siti web salvano sul
            dispositivo dell’utente durante la navigazione. Servono a migliorare
            l’esperienza di utilizzo e garantire il corretto funzionamento del
            sito.
          </p>

          <h2>Cookie tecnici</h2>

          <p>
            Questo sito utilizza cookie tecnici necessari al funzionamento delle
            pagine e alla corretta navigazione dell’utente.
          </p>

          <h2>Cookie analitici</h2>

          <p>
            Eventuali strumenti statistici utilizzati raccolgono dati aggregati
            e anonimi con finalità di analisi e miglioramento dei contenuti del
            sito.
          </p>

          <h2>Gestione dei cookie</h2>

          <p>
            L’utente può modificare o disabilitare i cookie direttamente dalle
            impostazioni del proprio browser. La disattivazione di alcuni cookie
            potrebbe influire sul corretto funzionamento del sito.
          </p>

          <h2>Contatti</h2>

          <p>
            Per informazioni relative all’utilizzo dei cookie è possibile
            contattare il titolare del sito tramite i riferimenti presenti nella
            sezione contatti.
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
