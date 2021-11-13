import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Book from "../views/Book.vue";
import About from "../views/About.vue";
import BookList from "@/components/book/BookList.vue";
import BookView from "@/components/book/BookView.vue";
import BookModify from "@/components/book/BookModify.vue";
import BookCreate from "@/components/book/BookCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    name: "book",
    path: "/book",
    component: Book,
    // 중첩 route 설정.
    children: [
      {
        path: "list",
        name: "book-list",
        component: BookList
      },
      {
        path: "create",
        name: "book-create",
        component: BookCreate
      },
      {
        path: "view/:isbn",
        name: "book-view",
        component: BookView
      },
      {
        path: "modify/:isbn",
        name: "book-modify",
        component: BookModify
      }
    ],
    redirect: "/book/list"
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
