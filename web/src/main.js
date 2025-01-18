import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import LineInfo from './views/LineInfo.vue'; // 引入线路信息页面
import StationDetails from './views/StationDetails.vue'; // 引入车站详情页面

// 配置路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/line-info', component: LineInfo }, // 线路信息页面
    {
      path: '/station/:id', // 动态路由参数
      name: 'StationDetails',
      component: StationDetails,
      props: true, // 将路由参数作为 props 传递
    },
  ],
});

// 创建 Vue 应用
const app = createApp(App);

// 使用 i18n 和路由
app.use(i18n);
app.use(router);

// 挂载应用
app.mount('#app');