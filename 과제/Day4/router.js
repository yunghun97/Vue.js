import list from "./views/list.js"
import detail from "./views/detail.js"

const router = new VueRouter({
    routes: [
        {
            path: '/', component: list
        },
        {
            path: '/detail/:id', component: detail,
        }
    ] 
});