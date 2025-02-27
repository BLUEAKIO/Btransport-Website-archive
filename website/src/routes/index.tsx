import loadable from '@loadable/component';
import { RouteObject, IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

const Home = loadable(() => import('../pages/Home'));
const CompanyDetail = loadable(() => import('../pages/CompanyDetail'));
const OperationalStatus = loadable(() => import('../pages/OperationalStatus'));
const NotFound = loadable(() => import('../pages/404'));

const routes: (IndexRouteObject | NonIndexRouteObject)[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/company/:companyId',
    element: <CompanyDetail />,
  },
  {
    path: '/train_info',
    element: <OperationalStatus />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
