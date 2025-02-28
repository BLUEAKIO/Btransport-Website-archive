import React from 'react';
import type { ColProps } from 'antd';
import { Layout, Row, Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import Logo from '/assets/BTransport-Logo-White.svg?url';
import BLUEAKIOLogo from '/assets/BLUEAKIO-Logo-White.svg?url';
import styled from 'styled-components';

const { Footer } = Layout;

const ResponsiveRow = styled(Row)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const RightAlignedCol = styled(Col)`
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const BottomSection = styled.div`
  padding: 15px 50px;
  background-color: #001529;
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const BottomRow = styled(Row)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

interface BottomColProps extends ColProps {
  align?: string;
  flex?: string | number;
  marginLeft?: string | number;
}

const BottomCol = styled(Col)<BottomColProps>`
  display: flex;
  justify-content: ${props => props.align || 'flex-start'};
  flex: ${props => props.flex || 'none'};
  margin-left: ${props => props.marginLeft || '0'};

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-left: 0;
    width: 100%;
  }
`;

const LinkSpace = styled(Space)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px !important;

  .ant-space-item {
    margin-right: 0 !important;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 4px !important;
  }
`;

interface FooterProps {
  // 可以添加需要的props类型
}

const AppFooter: React.FC<FooterProps> = () => {
  const { t } = useTranslation();

  return (
    <Footer style={{ 
      background: '#001529',
      color: 'rgba(255, 255, 255, 0.65)',
      padding: '0',
      marginTop: '40px',
      fontSize: '14px'
    }}>
      {/* 顶部主导航 */}
      {/*<div style={{
        padding: '40px 50px',
        backgroundColor: '#001529',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Row gutter={[48, 32]} justify="start">
          <Col xs={24} sm={12} md={6} lg={4}>
            <h4 style={{ 
              color: '#fff',
              marginBottom: '20px', 
              fontWeight: 'bold',
              fontSize: '14px'
            }}>{t('footer.travelInfo')}</h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              lineHeight: '2'
            }}>
              <li><a href="/train_info" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>{t('footer.trainInfo')}</a></li>
              <li><a href="/schedule" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>{t('footer.schedule')}</a></li>
              <li><a href="/stations" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>{t('footer.stations')}</a></li>
              <li><a href="/fares" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>{t('footer.fares')}</a></li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6} lg={4}>
            <h4 style={{ color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>{t('footer.services')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li><a href="/cards">{t('footer.transitCards')}</a></li>
              <li><a href="/passes">{t('footer.passes')}</a></li>
              <li><a href="/reservations">{t('footer.reservations')}</a></li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6} lg={4}>
            <h4 style={{ color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>{t('footer.company')}</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li><a href="/about">{t('footer.aboutUs')}</a></li>
              <li><a href="/news">{t('footer.news')}</a></li>
              <li><a href="/sustainability">{t('footer.sustainability')}</a></li>
            </ul>
          </Col>
        </Row>
      </div>*/}

      {/* 中部公司信息 */}
      <div style={{
        padding: '30px 50px',
        backgroundColor: '#001529',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <ResponsiveRow justify="space-between" align="middle">
          <Col>
            <img 
              src={Logo} 
              alt="Btransport" 
              style={{ 
                height: '40px',
                display: 'block',
                marginBottom: 0,
                verticalAlign: 'middle'
              }} 
            />
          </Col>
          <RightAlignedCol>
            <span style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: '12px'
            }}>© {new Date().getFullYear()} Btransport<br />{t('footer.beta')}<br />{t('footer.version')}</span>
          </RightAlignedCol>
        </ResponsiveRow>
      </div>

      {/* 底部链接和版权 */}
      <BottomSection>
        <BottomRow justify="space-between" align="middle">
          <BottomCol>
            <img 
              src={BLUEAKIOLogo} 
              alt="Btransport" 
              style={{ height: '20px' }}
            />
          </BottomCol>
          <BottomCol flex="auto" marginLeft="40px">
            <LinkSpace 
              wrap 
              split={
                <span style={{
                  color: 'rgba(255,255,255,0.3)',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}>|</span>
              }
            >
              <a href="https://www.blueakio.com" style={{fontSize: "12px"}} target="_blank" rel="noopener noreferrer">{t("BLUEAKIO.website")}</a>
              <a href="https://design.blueakio.com" style={{fontSize: "12px"}} target="_blank" rel="noopener noreferrer">{t("BLUEAKIO.DesignBLUEAKIO")}</a>
              <a href="https://transport.blueakio.com" style={{fontSize: "12px"}} target="_blank" rel="noopener noreferrer">{t("BLUEAKIO.BTransport")}</a>
              <a href="https://tc.blueakio.com" style={{fontSize: "12px"}} target="_blank" rel="noopener noreferrer">{t("BLUEAKIO.TangibleCraft")}</a>
              <a href="https://status.blueakio.com" style={{fontSize: "12px"}} target="_blank" rel="noopener noreferrer">{t("BLUEAKIO.status")}</a>
            </LinkSpace>
          </BottomCol>
          <BottomCol>
            <span style={{color: 'rgba(255,255,255,0.45)', fontSize: '12px'}}>© {new Date().getFullYear()} BLUEAKIO</span>
          </BottomCol>
        </BottomRow>
      </BottomSection>
    </Footer>
  );
};

export default AppFooter;
