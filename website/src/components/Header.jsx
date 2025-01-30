import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { HomeOutlined, LineChartOutlined, ClockCircleOutlined, ContactsOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { companies } from '../data/lines';

const { Header } = Layout;

const NavHeader = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedKeys = () => {
    switch (location.pathname) {
      case '/':
        return ['1'];
      case '/lines':
        return ['2'];
      case '/train_info':
        return ['3'];
      case '/contact':
        return ['4'];
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
        navigate('/lines');
        break;
      case '3':
        navigate('/train_info');
        break;
      case '4':
        navigate('/contact');
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
      { key: 'en', label: 'English' },
      { key: 'zh', label: '中文' },
    ],
    onClick: handleLanguageChange,
  };

  const companyMenu = {
    items: companies.map((company) => ({
      key: company.id,
      label: company.name,
      children: [
        {
          key: `company-${company.id}`,
          label: t('company.introduction'),
          onClick: () => navigate(`/companies/${company.id}`),
        },
        ...company.lines.map((line) => ({
          key: `${company.id}-${line.id}`,
          label: line.name,
          onClick: () => navigate(`/lines/${company.id}/${line.id}`),
        })),
      ],
    })),
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
          {t('lines.title')}
        </Menu.Item>
        <Menu.Item key="3" icon={<LineChartOutlined />}>
          {t('company.operationalStatus')}
        </Menu.Item>
        <Menu.Item key="4" icon={<ContactsOutlined />}>
          {t('contact.title')}
        </Menu.Item>
      </Menu>

      <Dropdown menu={companyMenu} trigger={['click']} placement="bottomRight">
        <span style={{ cursor: 'pointer', color: 'white', marginLeft: '20px' }}>
          <LineChartOutlined /> {t('header.selectLine')}
        </span>
      </Dropdown>

      <Dropdown menu={languageMenu} trigger={['click']} placement="bottomRight">
        <span style={{ cursor: 'pointer', color: 'white', marginLeft: '20px' }}>
          <GlobalOutlined /> {t('header.language')}
        </span>
      </Dropdown>
    </Header>
  );
};

export default NavHeader;