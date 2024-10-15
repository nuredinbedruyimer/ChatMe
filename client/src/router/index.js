// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Feed from "../views/Feed.vue"
import Messages from '../views/Messages.vue';
import Search from '../views/Search.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/register', name:'register', component: Register },
    {path:'/login',name:'login', component:Login},
    {path:'/feed', name:'feed', component:Feed},
    {path:'/messages', name:"messages", component: Messages},
    {path:'/search', name:"search", component: Search},


    


    
  ]
  

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
