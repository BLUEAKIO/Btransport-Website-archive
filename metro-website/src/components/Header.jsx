import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { HomeOutlined, LineChartOutlined, ClockCircleOutlined, ContactsOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const { Header } = Layout;

const companies = [
  { id: 'A', name: 'Company A' },
  { id: 'B', name: 'Company B' },
];

const NavHeader = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // 根据当前路由动态设置 selectedKeys
  const getSelectedKeys = () => {
    const path = location.pathname;
    if (path.startsWith('/company/A')) return ['2'];
    if (path.startsWith('/company/B')) return ['3'];
    return ['1'];
  };

  // 处理页眉按钮点击事件
  const handleMenuClick = (e) => {
    switch (e.key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('/company/A');
        break;
      case '3':
        navigate('/company/B');
        break;
      case '4':
        navigate('/contact');
        break;
      default:
        break;
    }
  };

  // 处理语言切换事件
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.key);
  };

  // 语言切换下拉菜单
  const languageMenu = (
    <Menu onClick={handleLanguageChange}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="zh">中文</Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ padding: '0 20px', display: 'flex', alignItems: 'center' }}>
      {/* LOGO 区域 */}
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight: '20px' }}
        onClick={() => navigate('/')}
      >
        <img src={logo} alt="Site Logo" style={{ height: '32px', marginRight: '10px' }} />
        <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Metro Company</span>
      </div>

      {/* 导航菜单 */}
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={getSelectedKeys()}
        onClick={handleMenuClick}
        style={{ flex: 1 }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          {t('home.title')}
        </Menu.Item>
        <Menu.Item key="2" icon={<LineChartOutlined />}>
          {t('company.A')}
        </Menu.Item>
        <Menu.Item key="3" icon={<LineChartOutlined />}>
          {t('company.B')}
        </Menu.Item>
        <Menu.Item key="4" icon={<ContactsOutlined />}>
          {t('contact.title')}
        </Menu.Item>
      </Menu>

      {/* 语言切换按钮 */}
      <Dropdown overlay={languageMenu} trigger={['click']} placement="bottomRight">
        <span style={{ cursor: 'pointer', color: 'white', marginLeft: '20px' }}>
          <GlobalOutlined /> {i18n.language === 'en' ? 'English' : '中文'}
        </span>
      </Dropdown>
    </Header>
  );
};

export default NavHeader;