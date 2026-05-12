<template>
  <AppHead
    title="Blog - Articoli Psicologia"
    description="Articoli su psicologia, crescita personale e benessere mente-corpo."
  />

  <main>
    <section>
      <div class="container">
        <!-- TITLE -->
        <div class="row">
          <div class="col-12 text-center mb-4">
            <h2 class="stagger-text">Brevi letture</h2>
          </div>
        </div>

        <!-- GRID -->
        <div class="row">
          <div class="col-3 col-md-12" v-for="n in 4" :key="n">
            <article class="blog-card">
              <h3 class="stagger-text">Articolo {{ n }}</h3>
              <p class="stagger-text">Anteprima articolo</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.blog {
  background: var(--secondary);
}

/* solo styling specifico componente (NO layout, NO typography) */
.blog-card {
  padding: var(--space-3);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius);
  background: var(--white);
}
</style>
