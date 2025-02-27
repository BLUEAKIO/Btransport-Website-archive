import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import NavHeader from './components/layout/Header';
import AppFooter from './components/layout/Footer';
import routes from './routes';
import './i18n';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <NavHeader />
      <Content style={{ padding: '0 20px', marginTop: 64 }}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default App;
