import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { HomeOutlined, LineChartOutlined, ClockCircleOutlined, ContactsOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from '../../node_modules/react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { companies } from '../data/lines';

const { Header } = Layout;

const NavHeader = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // 根据当前路由动态设置 selectedKeys
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
        return ['1']; // 默认选中首页
    }
  };

  // 处理页眉按钮点击事件
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

  // 处理语言切换事件
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.key); // 根据选择的语言键值切换语言
  };

  // 语言切换下拉菜单
  const languageMenu = {
    items: [
      { key: 'en', label: 'English' },
      { key: 'zh', label: '中文' },
    ],
    onClick: handleLanguageChange,
  };

  // 公司和线路选择下拉菜单
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
      {/* LOGO 区域 */}
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight: '20px' }}
        onClick={() => navigate('/')} // 点击 LOGO 跳转到首页
      >
        <img src={logo} alt="Site Logo" style={{ height: '32px', marginRight: '10px' }} />
        <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>BTransport</span>
      </div>

      {/* 导航菜单 */}
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={getSelectedKeys()} // 动态设置 selectedKeys
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

      {/* 公司和线路选择按钮 */}
      <Dropdown menu={companyMenu} trigger={['click']} placement="bottomRight">
        <span style={{ cursor: 'pointer', color: 'white', marginLeft: '20px' }}>
          <LineChartOutlined /> {t('header.selectLine')}
        </span>
      </Dropdown>

      {/* 语言切换按钮 */}
      <Dropdown menu={languageMenu} trigger={['click']} placement="bottomRight">
        <span style={{ cursor: 'pointer', color: 'white', marginLeft: '20px' }}>
          <GlobalOutlined /> {t('header.language')}
        </span>
      </Dropdown>
    </Header>
  );
};

export default NavHeader;