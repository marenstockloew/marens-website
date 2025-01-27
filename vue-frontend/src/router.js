import { createRouter, createWebHistory } from "vue-router";

import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Works from "./pages/Works.vue";
import Work from "./pages/Work.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", name: 'Home', component: Home },
  { path: "/about", name: 'About', component: About },
  { path: "/works", name: 'Works', component: Works },
  { path: "/works/:id", name: 'SingleWork', component: Work },
  { path: "/:notFound(.*)", name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
