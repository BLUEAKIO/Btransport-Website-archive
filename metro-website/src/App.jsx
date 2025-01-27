import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import NavHeader from './components/Header';
import AppFooter from './components/Footer';
import Home from './pages/Home';
import Lines from './pages/Lines';
import Timetables from './pages/Timetables';
import Contact from './pages/Contact';
import LineDetail from './pages/LineDetail'; // 导入线路详情页面

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <NavHeader />
      <Content style={{ padding: '0 20px', marginTop: 64 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lines" element={<Lines />} />
          <Route path="/timetables" element={<Timetables />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lines/:companyId/:lineId" element={<LineDetail />} /> {/* 动态路由 */}
        </Routes>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default App;