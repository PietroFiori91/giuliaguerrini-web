<template>
  <section class="single-post">
    <div class="container">
      <div class="row">
        <div class="hero-post">
          <p class="meta">{{ post.category }} • {{ post.date }}</p>

          <h1 class="title">
            {{ post.title }}
          </h1>
        </div>

        <div class="cover-wrap">
          <img :src="post.image" :alt="post.title" />
        </div>

        <article class="content">
          <p v-for="(p, i) in post.body" :key="i">
            {{ p }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const posts = [
  {
    slug: "equilibrio-cambiamento",
    title: "Ritrovare equilibrio nei momenti di cambiamento",
    category: "Benessere",
    date: "14 Maggio 2026",
    image: "/src/assets/images/blog-cover-1.png",
    body: [
      "Ogni cambiamento apre una soglia interiore. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ogni cambiamento apre una soglia interiore. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ogni cambiamento apre una soglia interiore. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ogni cambiamento apre una soglia interiore. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ogni cambiamento apre una soglia interiore. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
];

const post = posts.find((p) => p.slug === route.params.slug);
</script>

<style scoped>
.single-post {
  padding: 70px 0;
  background: #f7f3ea;
}

.hero-post {
  max-width: 900px;
  margin-bottom: 50px;
}

.meta {
  font-size: var(--text-xs);
  opacity: 0.7;
  margin-bottom: 18px;
}

.title {
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 1.05;
}

.cover-wrap {
  aspect-ratio: 16 / 4;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 60px;
}

.cover-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.content {
  max-width: 900px;
}

@media (min-width: 992px) {
  .title {
    font-size: 4rem;
  }

  .single-post {
    padding: 110px 0;
  }
}
</style>
