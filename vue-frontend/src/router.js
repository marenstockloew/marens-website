import { createRouter, createWebHistory } from "vue-router";

import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Works from "./pages/Works/Works.vue";
import WorkDetails from "./pages/Works/WorkDetails.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", name: 'Home', component: Home },
  { path: "/about", name: 'About', component: About },
  { path: "/works", name: 'Works', component: Works },
  { path: "/works/:slug", name: 'WorkDetails', component: WorkDetails, props: true },
  { path: "/:notFound(.*)", name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
