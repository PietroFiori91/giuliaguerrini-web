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
    name: "blog",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
