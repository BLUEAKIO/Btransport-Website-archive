import { createRouter, createWebHistory } from 'vue-router';
import LineInfo from '../components/LineInfo.vue';
import StationDetails from '../views/StationDetails.vue';

const routes = [
  {
    path: '/',
    component: LineInfo,
  },
  {
    path: '/station/:id', // 动态路由参数
    name: 'StationDetails',
    component: StationDetails,
    props: true, // 将路由参数作为 props 传递
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;