import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/page/:catagory/:item",
    component: () => import("@/views/PageView")
  },
  {
    path: "/article/:catagory/:item/:article",
    component: () => import("@/views/PageView")
  },
  {
    path: "/catagory/:catagory/:item",
    component: () => import("@/views/CatagoryView")
  },
  {
    path: "/redirect/:catagory/:item",
    component: () => import("@/views/RedirectView")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;
