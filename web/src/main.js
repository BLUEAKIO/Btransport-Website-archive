import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import LineInfo from './views/LineInfo.vue'; // 引入新页面

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/line-info', component: LineInfo }, // 添加新路由
  ],
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');