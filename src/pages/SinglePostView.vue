<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/vue";

const route = useRoute();
const post = ref(null);

onMounted(async () => {
  post.value = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      body,
      mainImage{
        asset->{url}
      },
      categories[]->{title}
    }
  `,
    {
      slug: route.params.slug,
    },
  );
});
</script>

<template>
  <section class="single-post" v-if="post">
    <div class="container">
      <div class="hero-post">
        <p class="meta">
          {{ post.categories?.[0]?.title }} • {{ post.publishedAt }}
        </p>

        <h1 class="title">
          {{ post.title }}
        </h1>
      </div>

      <div class="cover-wrap" v-if="post.mainImage">
        <img :src="post.mainImage.asset.url" />
      </div>

      <article class="content">
        <PortableText :value="post.body" />
      </article>
    </div>
  </section>
</template>

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
  max-width: 760px;
}

.content p {
  font-size: var(--text-md);
  line-height: 1.9;
  margin-bottom: 28px;
}

@media (min-width: 992px) {
  .title {
    font-size: 4rem;
  }
}
</style>
