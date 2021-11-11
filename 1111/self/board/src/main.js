import Vue from 'vue'
import App from "./App.vue";
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  components: {
    HeaderNav,
  },
  mounted() {
    this.$router.push("/");
  },
  render: h => h(App)
}).$mount('#app')