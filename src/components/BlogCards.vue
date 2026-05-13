<template>
  <section id="blog" class="blog-section reveal-section">
    <div class="container">
      <!-- HEADER -->
      <div class="row color-dark mb-5">
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
      <router-link
        v-for="(post, i) in posts"
        :key="i"
        to="/blog"
        class="blog-item"
        :style="{ '--bg': `url(${post.image})` }"
      >
        <div class="left">
          <h2 class="title stagger-text">{{ post.title }}</h2>
          <p class="subtitle stagger-text">{{ post.subtitle }}</p>
        </div>

        <span class="index">/0{{ i + 1 }}</span>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import blog1 from "../assets/images/blog-1.png";
import blog2 from "../assets/images/blog-2.png";
import blog3 from "../assets/images/blog-3.png";
import blog4 from "../assets/images/blog-4.png";

const posts = [
  {
    title: "Titolo articolo",
    subtitle: "Sottotitolo articolo",
    image: blog1,
  },
  {
    title: "Titolo articolo",
    subtitle: "Sottotitolo articolo",
    image: blog2,
  },
  {
    title: "Titolo articolo",
    subtitle: "Sottotitolo articolo",
    image: blog3,
  },
  {
    title: "Titolo articolo",
    subtitle: "Sottotitolo articolo",
    image: blog4,
  },
];
</script>

<style scoped>
.blog-section {
  background: #dfe4da;
  padding: 100px 0;
}

/* ITEM BASE */
.blog-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 28px 0;
  border-top: 1px solid rgba(39, 49, 45, 0.2);

  text-decoration: none;
  color: #27312d;

  overflow: hidden;
  cursor: pointer;

  transition: background 0.6s ease;
}

/* BACKGROUND IMAGE LAYER */
.blog-item::before {
  content: "";
  position: absolute;
  inset: 0;

  background-image: var(--bg);
  background-size: cover;
  background-position: center;

  opacity: 0;
  transform: scale(1.05);
  transition:
    opacity 0.6s ease,
    transform 0.8s ease;

  z-index: 0;
}

/* overlay soft per leggibilità */
.blog-item::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(223, 228, 218, 0.75);
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 1;
}

/* contenuto sopra overlay */
.blog-item > * {
  position: relative;
  z-index: 2;
}

/* LEFT */
.left {
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: transform 0.5s ease;
}

.title {
  transition: transform 0.5s ease;
}

.subtitle {
  opacity: 0.7;
  transition: opacity 0.4s ease;
}

/* INDEX */
.index {
  transition: transform 0.5s ease;
}

/* 🔥 HOVER EFFECT */
.blog-item:hover::before {
  opacity: 0.85;
  transform: scale(1);
}

.blog-item:hover::after {
  opacity: 1;
}

/* titolo va leggermente a destra */
.blog-item:hover .title {
  transform: translateX(10px);
}

/* numero va a sinistra */
.blog-item:hover .index {
  transform: translateX(-12px);
}

/* sottotitolo si attenua */
.blog-item:hover .subtitle {
  opacity: 0.55;
}
</style>
