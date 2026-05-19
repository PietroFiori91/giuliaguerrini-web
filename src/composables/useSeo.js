import { useHead } from "@vueuse/head";

export function useSeo({
  title,
  description,
  image = "/og-image.png",
  url = "https://tuodominio.it",
}) {
  useHead({
    title,
    meta: [
      { name: "description", content: description },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },

      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "var(--primary)" },
    ],
    link: [{ rel: "canonical", href: url }],
  });
}
