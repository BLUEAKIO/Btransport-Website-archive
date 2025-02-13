import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import NavHeader from './components/Header';
import AppFooter from './components/Footer';
import Home from './pages/Home';
import CompanyDetail from './pages/CompanyDetail';
import OperationalStatus from './pages/OperationalStatus';
import NotFound from './pages/404';
import './i18n';

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <NavHeader />
      <Content style={{ padding: '0 20px', marginTop: 64 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/:companyId" element={<CompanyDetail />} />
          <Route path="/train_info" element={<OperationalStatus />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default App;
