<template>
  <section class="blog-list">
    <div class="container">
      <div v-for="(post, index) in posts" :key="post.slug" class="blog-row">
        <div
          class="row align-items-center g-5"
          :class="{ 'flex-lg-row-reverse': index % 2 !== 0 }"
        >
          <!-- IMAGE -->
          <div class="col-12 col-lg-5">
            <div class="cover-wrap">
              <img :src="post.image" :alt="post.title" />
            </div>
          </div>

          <!-- TEXT -->
          <div class="col-12 col-lg-7">
            <div class="content-wrap">
              <p class="meta">{{ post.category }} • {{ post.date }}</p>

              <h2 class="title">
                {{ post.title }}
              </h2>

              <p class="excerpt">
                {{ post.excerpt }}
              </p>

              <router-link :to="`/blog/${post.slug}`" class="read-btn">
                Leggi
                <span class="dot"></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    title: "Ritrovare equilibrio nei momenti di cambiamento",
    excerpt:
      "Nei passaggi importanti della vita può emergere il bisogno di fermarsi e ridefinire il proprio centro.",
    image: new URL("@/assets/images/blog-cover-1.png", import.meta.url).href,
    slug: "equilibrio-cambiamento",
    date: "14 Maggio 2026",
    category: "Benessere",
  },
  {
    title: "Ascoltare il corpo per comprendere la mente",
    excerpt: "Il corpo spesso esprime ciò che la mente fatica a raccontare.",
    image: new URL("@/assets/images/blog-cover-2.png", import.meta.url).href,
    slug: "corpo-e-mente",
    date: "8 Maggio 2026",
    category: "Psicoterapia",
  },
  {
    title: "Respirare meglio nelle giornate intense",
    excerpt:
      "Piccoli rituali quotidiani possono cambiare il modo in cui attraversiamo lo stress.",
    image: new URL("@/assets/images/blog-cover-3.png", import.meta.url).href,
    slug: "respirazione-stress",
    date: "2 Maggio 2026",
    category: "Yoga",
  },
  {
    title: "Il valore del silenzio interiore",
    excerpt:
      "Fare spazio dentro di sé permette di ascoltare ciò che davvero conta.",
    image: new URL("@/assets/images/blog-cover-4.png", import.meta.url).href,
    slug: "silenzio-interiore",
    date: "28 Aprile 2026",
    category: "Crescita",
  },
];
</script>
<style scoped>
.blog-list {
  padding: 70px 0;
  background: #f7f3ea;
}

.blog-row {
  padding: 60px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.cover-wrap {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 10px;
}

.cover-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.meta {
  font-size: var(--text-xs);
  margin-bottom: 14px;
  opacity: 0.7;
}

.title {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.05;
  margin-bottom: 20px;
}

.excerpt {
  font-size: var(--text-sm);
  line-height: 1.8;
  margin-bottom: 24px;
}

.read-btn {
  background: var(--primary);
  padding: 4px 12px;
  border-radius: 12px;
  color: var(--bg);
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--bg);
}

@media (min-width: 992px) {
  .title {
    font-size: 3rem;
  }

  .blog-list {
    padding: 110px 0;
  }
}
</style>
