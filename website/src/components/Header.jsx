import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { HomeOutlined, LineChartOutlined, ClockCircleOutlined, ContactsOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const { Header } = Layout;

const NavHeader = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedKeys = () => {
    switch (location.pathname) {
      case '/':
        return ['1'];
      case '/train_info':
        return ['2'];
      default:
        return ['1'];
    }
  };

  const handleMenuClick = (e) => {
    switch (e.key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('/train_info');
        break;
      default:
        break;
    }
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.key);
  };

  const languageMenu = {
    items: [
      { key: 'zh-CN', label: '简体中文 (中国大陆)' },
      { key: 'zh-HK', label: '繁體中文 (中國香港)' },
      { key: 'en', label: 'English' },
      //{ key: 'ja', label: '日本語' },
    ],
    onClick: handleLanguageChange,
  };

  return (
    <Header style={{ padding: '0 20px', display: 'flex', alignItems: 'center' }}>
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight: '20px' }}
        onClick={() => navigate('/')}
      >
        <img src={logo} alt="Site Logo" style={{ height: '32px', marginRight: '10px' }} />
        <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>BTransport</span>
      </div>

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
          {t('company.operationalStatus')}
        </Menu.Item>
      </Menu>

      <Dropdown menu={languageMenu} trigger={['click']} placement="bottomRight">
        <span style={{ cursor: 'pointer', color: 'white', marginLeft: '20px' }}>
          <GlobalOutlined /> {t('header.language')}
        </span>
      </Dropdown>
    </Header>
  );
};

export default NavHeader;