import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Dropdown, Drawer, Select } from 'antd';
import { HomeOutlined, LineChartOutlined, GlobalOutlined, MenuOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { companies } from '../data/lines';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CompanyButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  margin-left: 20px;
  transition: color 0.3s;

  &:hover {
    .company-icon {
      color: #ffffff;
    }
    .company-text {
      color: #ffffff;
    }
  }
`;

const CompanyIcon = styled(LineChartOutlined)`
  color: rgba(255, 255, 255, 0.65);
  font-size: 18px;
  transition: color 0.3s;
`;

const CompanyText = styled.span`
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.3s;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const MenuAndLanguageSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  
  img {
    height: 32px;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    margin-right: 10px;
    img {
      height: 24px;
    }
  }
`;

const StyledMenu = styled(Menu)`
  &.ant-menu {
    background: #001529;
    
    .ant-menu-item {
      color: rgba(255, 255, 255, 0.65);
      
      .ant-menu-item-icon {
        color: rgba(255, 255, 255, 0.65);
      }
      
      &:hover {
        color: #ffffff !important;
        
        .ant-menu-item-icon {
          color: #ffffff !important;
        }
      }
      
      &.ant-menu-item-selected {
        color: #ffffff;
        
        .ant-menu-item-icon {
          color: #ffffff;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

const MobileMenuButton = styled(MenuOutlined)`
  display: none;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  padding: 8px;
  transition: color 0.3s;

  &:hover {
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const LanguageSelector = styled.span`
  cursor: pointer;
  color: white;
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

const StyledLanguageSelect = styled(Select)`
  &.ant-select {
    .ant-select-selector {
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: #001529 !important;
      border: none !important;
      
      .ant-select-selection-item {
        display: flex;
        align-items: center;
        gap: 5px;
        color: rgba(255, 255, 255, 0.65) !important;
      }
    }
    
    .ant-select-arrow {
      color: rgba(255, 255, 255, 0.65) !important;
    }
    
    &:hover, &.ant-select-focused, &.ant-select-open {
      .ant-select-selector {
        .ant-select-selection-item {
          color: #ffffff !important;
        }
      }
      .ant-select-arrow {
        color: #ffffff !important;
      }
    }

    .ant-select-dropdown {
      .ant-select-item {
        color: rgba(0, 0, 0, 0.65);
        
        &:hover {
          background-color: rgba(22, 119, 255, 0.1) !important;
          color: #ffffff !important;
        }
        
        &.ant-select-item-option-selected {
          color: #ffffff !important;
          background-color: rgba(22, 119, 255, 0.1) !important;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LanguageIcon = styled(GlobalOutlined)`
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  transition: color 0.3s;

  &:hover {
    color: #ffffff;
  }
`;

const LanguageText = styled.span`
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.3s;
  
  ${({ isHovered }) => isHovered && `
    color: #ffffff;
  `}
`;

const DesktopLanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    ${LanguageText} {
      color: #ffffff;
    }
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileLanguageWrapper = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const LanguageButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  transition: color 0.3s;

  &:hover {
    .language-icon {
      color: #ffffff;
    }
    .language-text {
      color: #ffffff;
    }
  }
`;

const StyledLanguageIcon = styled(GlobalOutlined)`
  color: rgba(255, 255, 255, 0.65);
  font-size: 18px;
  transition: color 0.3s;
`;

const StyledLanguageText = styled.span`
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.3s;
`;

const NavHeader = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getSelectedKeys = () => {
    if (location.pathname.startsWith('/company/')) {
      return ['companies'];
    }
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

  // 语言切换处理函数
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.key);
  };

  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: t('home.title')
    },
    {
      key: '2',
      icon: <LineChartOutlined />,
      label: t('company.operationalStatus')
    },
    {
      key: 'companies',
      icon: <LineChartOutlined style={{ color: location.pathname.startsWith('/company/') ? '#ffffff' : 'rgba(255, 255, 255, 0.65)' }} />,
      label: (
        <span style={{ color: location.pathname.startsWith('/company/') ? '#ffffff' : 'rgba(255, 255, 255, 0.65)' }}>
          {t('header.company')}
        </span>
      ),
      children: companies.map(company => ({
        key: company.id,
        label: (
          <span style={{ 
            color: location.pathname === `/company/${company.id}` ? '#ffffff' : '#000000',
            transition: 'color 0.3s'
          }}>
            {company.name[i18n.language] || company.name.en} ({company.id})
          </span>
        ),
        style: { 
          backgroundColor: location.pathname === `/company/${company.id}` ? '#1890ff' : 'transparent',
          transition: 'background-color 0.3s'
        },
        className: 'ant-menu-item',
        onClick: () => navigate(`/company/${company.id}`),
        onMouseEnter: (e) => {
          e.domEvent.currentTarget.style.backgroundColor = '#1890ff';
          e.domEvent.currentTarget.querySelector('span').style.color = '#ffffff';
        },
        onMouseLeave: (e) => {
          e.domEvent.currentTarget.style.backgroundColor = location.pathname === `/company/${company.id}` ? '#1890ff' : 'transparent';
          e.domEvent.currentTarget.querySelector('span').style.color = location.pathname === `/company/${company.id}` ? '#ffffff' : 'rgba(255, 255, 255, 0.65)';
        }
      }))
    }
  ];

  // 语言菜单配置
  const languageMenu = {
    items: [
      { key: 'zh-CN', label: '简体中文 (中国大陆)' },
      { key: 'zh-HK', label: '繁體中文 (中國香港)' },
      { key: 'en', label: 'English' }
    ],
    onClick: handleLanguageChange,
  };

  return (
    <StyledHeader>
      <LeftSection>
        <LogoWrapper onClick={() => navigate('/')}>
          <img src={logo} alt="Site Logo" />
        </LogoWrapper>
        <StyledMenu
          theme="dark"
          mode="horizontal"
          selectedKeys={getSelectedKeys()}
          onClick={handleMenuClick}
          items={menuItems}
        />
      </LeftSection>
      
      <RightSection>
        <MenuAndLanguageSection>
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
          <DesktopLanguageWrapper>
            <Dropdown 
              menu={languageMenu} 
              trigger={['click']}
              getPopupContainer={(trigger) => trigger.parentNode}
            >
              <LanguageButton>
                <StyledLanguageIcon className="language-icon" />
                <StyledLanguageText className="language-text">
                  {t('header.language')}
                </StyledLanguageText>
              </LanguageButton>
            </Dropdown>
          </DesktopLanguageWrapper>
          <MobileLanguageWrapper>
            <Dropdown 
              menu={languageMenu} 
              trigger={['click']}
              getPopupContainer={(trigger) => trigger.parentNode}
            >
              <LanguageIcon />
            </Dropdown>
          </MobileLanguageWrapper>
        </MenuAndLanguageSection>
      </RightSection>

      <Drawer
        title={t('header.menu')}
        placement="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          theme="light"
          mode="vertical"
          selectedKeys={getSelectedKeys()}
          items={menuItems}
          onClick={(e) => {
            handleMenuClick(e);
            setMobileMenuOpen(false);
          }}
        />
      </Drawer>
    </StyledHeader>
  );
};

export default NavHeader;
