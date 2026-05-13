<template>
  <section id="blog" class="blog-section reveal-section">
    <div class="container">
      <!-- HEADER -->
      <div class="row mb-5">
        <div class="col-6">
          <h3 class="stagger-text">Brevi letture</h3>
        </div>

        <div class="col-6 text-end">
          <p class="stagger-text text-medium">
            Una selezione dei miei ultimi articoli
          </p>
        </div>
      </div>

      <!-- LIST -->
      <router-link v-for="n in 4" :key="n" to="/blog" class="blog-item">
        <div class="left">
          <h2 class="title">Titolo articolo</h2>
          <p class="subtitle">Sottotitolo articolo</p>
        </div>

        <span class="index">/0{{ n }}</span>
      </router-link>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.blog-section {
  background: #dfe4da;
  padding: 100px 0;
}

.blog-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 28px 0;
  border-top: 1px solid rgba(39, 49, 45, 0.2);

  text-decoration: none;
  color: #27312d;

  cursor: none;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.subtitle {
  opacity: 0.7;
}

.index {
  transition: transform 0.4s ease;
}

.blog-item:hover .subtitle {
  opacity: 0.35;
}

.blog-item:hover .index {
  transform: translateX(-10px);
}
</style>
