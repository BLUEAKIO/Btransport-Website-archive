import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import NavHeader from './components/Header';
import AppFooter from './components/Footer';
import Home from './pages/Home';
import Lines from './pages/Lines';
import Contact from './pages/Contact';
import LineDetail from './pages/LineDetail';
import CompanyDetail from './pages/CompanyDetail';
import OperationalStatus from './pages/OperationalStatus';
import './i18n';

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <NavHeader />
      <Content style={{ padding: '0 20px', marginTop: 64 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lines" element={<Lines />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lines/:companyId/:lineId" element={<LineDetail />} />
          <Route path="/company/:companyId" element={<CompanyDetail />} />
          <Route path="/train_info" element={<OperationalStatus />} />
        </Routes>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default App;
