<script setup>
import { useHead } from "@vueuse/head";

const props = defineProps({
  title: {
    type: String,
    default: "Giulia Guerrini - Psicologa e Psicoterapeuta",
  },
  description: {
    type: String,
    default:
      "Psicoterapia e yoga per il benessere mente-corpo. Percorsi di crescita personale a Milano.",
  },
  image: {
    type: String,
    default: "/og-image.png",
  },
  url: {
    type: String,
    default: "https://tuodominio.it",
  },
});

useHead({
  title: props.title,
  meta: [
    /* SEO BASIC */
    {
      name: "description",
      content: props.description,
    },

    /* MOBILE */
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },

    /* OPEN GRAPH (Facebook / WhatsApp / LinkedIn) */
    {
      property: "og:title",
      content: props.title,
    },
    {
      property: "og:description",
      content: props.description,
    },
    {
      property: "og:image",
      content: props.image,
    },
    {
      property: "og:url",
      content: props.url,
    },
    {
      property: "og:type",
      content: "website",
    },

    /* TWITTER */
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: props.title,
    },
    {
      name: "twitter:description",
      content: props.description,
    },
    {
      name: "twitter:image",
      content: props.image,
    },

    /* ACCESSIBILITÀ / SEO TECH */
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "theme-color",
      content: "#5e7468",
    },
  ],

  link: [
    {
      rel: "canonical",
      href: props.url,
    },
  ],
});
</script>
