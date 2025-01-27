import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { HomeOutlined, LineChartOutlined, ClockCircleOutlined, ContactsOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { companies } from '../data/lines'; // 导入公司数据

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
      case '/timetables':
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
        navigate('/timetables');
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
  const languageMenu = (
    <Menu onClick={handleLanguageChange}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="zh">中文</Menu.Item>
    </Menu>
  );

  // 公司和线路选择下拉菜单
  const companyMenu = (
    <Menu>
      {companies.map((company) => (
        <Menu.SubMenu key={company.id} title={company.name}>
          {company.lines.map((line) => (
            <Menu.Item
              key={`${company.id}-${line.id}`}
              onClick={() => navigate(`/lines/${company.id}/${line.id}`)} // 跳转到线路详情页面
            >
              {line.name}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );

  return (
    <Header style={{ padding: '0 20px', display: 'flex', alignItems: 'center' }}>
      {/* LOGO 区域 */}
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight: '20px' }}
        onClick={() => navigate('/')} // 点击 LOGO 跳转到首页
      >
        <img src={logo} alt="Site Logo" style={{ height: '32px', marginRight: '10px' }} />
        <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Metro Company</span>
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
        <Menu.Item key="3" icon={<ClockCircleOutlined />}>
          {t('timetables.title')}
        </Menu.Item>
        <Menu.Item key="4" icon={<ContactsOutlined />}>
          {t('contact.title')}
        </Menu.Item>
      </Menu>

      {/* 公司和线路选择按钮 */}
      <Dropdown overlay={companyMenu} trigger={['click']} placement="bottomRight">
        <span style={{ cursor: 'pointer', color: 'white', marginLeft: '20px' }}>
          <LineChartOutlined /> Select Line
        </span>
      </Dropdown>

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