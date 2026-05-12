<template>
  <section id="blog" style="background: #dfe4da" class="reveal-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="stagger-text">Brevi letture</h2>
          <p class="stagger-text">Ultimi articoli</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 blog-item" v-for="n in 4" :key="n">
          <div>
            <h3 class="stagger-text">Titolo</h3>
            <p class="stagger-text">Sottotitolo articolo</p>
          </div>

          <span class="stagger-text">/0{{ n }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-item {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
