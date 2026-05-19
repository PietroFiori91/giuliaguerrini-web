<script setup>
import { useSeo } from "@/composables/useSeo";

useSeo({
  title: "Home - Giulia Guerrini",
  description:
    "Percorsi di psicoterapia e yoga per ritrovare equilibrio e benessere.",
});

import HeroSection from "../components/HeroSection.vue";
import ImageBanner from "../components/ImageBanner.vue";
import AboutSection from "../components/AboutSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import HelpSection from "../components/HelpSection.vue";
import BlogCards from "../components/BlogCards.vue";
import ContactSection from "../components/ContactSection.vue";
</script>

<template>
  <main class="home">
    <HeroSection />
    <ImageBanner />
    <AboutSection />
    <ServicesSection />
    <HelpSection />
    <BlogCards />
    <ContactSection />
  </main>
</template>
