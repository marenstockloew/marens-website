import { createRouter, createWebHistory } from "vue-router";

import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Works from "./pages/Works.vue";
import Work from "./pages/Work.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/works", component: Works },
    { path: "/works/:id", component: Work },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
