<script setup>
import AppHead from "@/components/AppHead.vue";
import HeroSection from "../components/HeroSection.vue";
import ImageBanner from "../components/ImageBanner.vue";
import AboutSection from "../components/AboutSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import HelpSection from "../components/HelpSection.vue";
import BlogCards from "../components/BlogCards.vue";
import ContactSection from "../components/ContactSection.vue";
</script>

<template>
  <AppHead
    title="Home - Giulia Guerrini"
    description="Percorsi di psicoterapia e yoga per ritrovare equilibrio e benessere."
  />
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
