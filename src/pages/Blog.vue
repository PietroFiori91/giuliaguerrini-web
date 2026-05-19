<template>
  <HeroBlog />

  <WorksTicker />
  <BlogPreview />
</template>

<script setup>
import { useSeo } from "@/composables/useSeo";

useSeo({
  title: "Blog - Giulia Guerrini",
  description:
    "Articoli e riflessioni su benessere, psicologia e crescita personale.",
});

import HeroBlog from "@/components/HeroBlog.vue";
import WorksTicker from "@/components/WorksTicker.vue";
import BlogPreview from "@/components/BlogPreview.vue";
</script>
