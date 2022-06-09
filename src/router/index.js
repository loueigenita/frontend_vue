import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Computer from "../views/computer/Computer.vue";
import ViewComputer from "../views/computer/ViewComputer.vue";
import CreateNewComputer from "../views/computer/CreateNewComputer.vue";
import Update from "../views/computer/Update.vue";
import Delete from "../views/computer/Delete.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/computer-items",
      component: Computer,
    },
    {
      path: "/computer-items/:id",
      name: "view-computer",
      component: ViewComputer,
      props: true,
    },
    {
      path: "/computer-edit/:id",
      name: "view-computer-edit",
      component: Update,
      props: true,
    },
    {
      path: "/computers-items-delete/:id",
      name: "view-computer-delete",
      component: Delete,
      props: true,
    },
    {
      path: "/create-new-computer",
      component: CreateNewComputer,
    },
  ],
});

export default router;
