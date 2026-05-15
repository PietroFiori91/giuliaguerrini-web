<script setup>
import { ref, onMounted } from "vue";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries";

const posts = ref([]);

const getExcerpt = (post) => {
  const text = post.body?.[0]?.children?.[0]?.text || "";

  return text.slice(0, 140) + "...";
};

onMounted(async () => {
  const data = await client.fetch(POSTS_QUERY);

  console.log("POSTS RAW:", data);

  posts.value = data;
});
</script>

<template>
  <section class="blog-preview reveal-section">
    <div class="container">
      <div
        v-for="(post, i) in posts"
        :key="post._id || i"
        class="row blog-item"
        :class="[
          { reverse: i % 2 === 1 },
          i % 2 === 0 ? 'reveal-left' : 'reveal-right',
        ]"
      >
        <!-- IMAGE -->
        <div class="col-10 col-lg-6 img">
          <img :src="post.mainImage?.asset?.url" :alt="post.title" />
        </div>

        <!-- TEXT -->
        <div class="col-10 col-lg-6 text">
          <p class="meta">
            {{ post.categories?.[0]?.title }}
          </p>

          <h2 class="stagger-text">{{ post.title }}</h2>

          <p class="excerpt stagger-text">
            {{ getExcerpt(post) }}
          </p>

          <router-link
            v-if="post.slug?.current"
            :to="`/blog/${post.slug.current}`"
            class="btn-read"
          >
            Leggi <span class="dot"></span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-preview {
  padding: 100px 0;
  background: #f7f3ea;
}

.blog-item {
  display: flex;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
}

.blog-item.reverse {
  flex-direction: row-reverse;
}

.img {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 18px;
  overflow: hidden;
}

.img img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text {
  flex: 1;
  max-width: 520px;
}

.meta {
  font-size: var(--text-xs);
  opacity: 0.6;
  margin-bottom: 10px;
}

.text h2 {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 16px;
}

.excerpt {
  font-size: var(--text-md);
  line-height: 1.7;
  opacity: 0.85;

  /* taglio preview elegante */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btn-read {
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: var(--text-sm);
  color: var(--bg);
  background-color: var(--primary);
  padding: 2px 20px;
  border-radius: 20px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--bg);
}

@media (max-width: 992px) {
  .blog-item,
  .blog-item.reverse {
    flex-direction: column;
  }

  .text {
    max-width: 100%;
  }
}
</style>
