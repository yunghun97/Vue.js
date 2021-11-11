import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from "./components/MainContent.vue";
import ArticleRegister from "./components/ArticleRegister.vue";
import ArticleList from "./components/ArticleList.vue";
import ArticleView from "./components/ArticleView.vue";
import ArticleModify from "./components/ArticleModify.vue";
import ArticleDelete from "./components/ArticleDelete.vue";

Vue.use(VueRouter)
export default {
  const routes = [
    {
      path: "/",
      name: "main",
      component: MainContent
    },
    {
      path: "/list",
      name: "list",
      component: ArticleList
    },
    {
      path: "/register",
      name: "register",
      component: ArticleRegister
    },
    {
      path: "/view",
      name: "view",
      component: ArticleView
    },
    {
      path: "/modify",
      name: "modify",
      component: ArticleModify
    },
    {
      path: "/delete",
      name: "delete",
      component: ArticleDelete
    }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  });
}