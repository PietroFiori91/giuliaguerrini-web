import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Blog from "../pages/Blog.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/blog",
    component: () => import("@/pages/Blog.vue"),
  },
  {
    path: "/blog/:slug",
    component: () => import("@/pages/SinglePostView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // se torni indietro (browser back)
    if (savedPosition) {
      return savedPosition;
    }

    // sempre top quando cambi pagina
    return { top: 0 };
  },
});

export default router;
