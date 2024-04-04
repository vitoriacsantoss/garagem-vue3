import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import AcessorioView from "../views/AcessorioView.vue";
import CorView from "../views/CorView.vue";
import MarcasView from "../views/MarcaView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/Acessorios",
      name: "Acessorios",
      component: AcessorioView,
    },
    {
      path: "/Cores",
      name: "Cores",
      component: CorView,
    },
    {
      path: "/Marcas",
      name: "Marcas",
      component: MarcasView,
    },
    
  ],
});

export default router;