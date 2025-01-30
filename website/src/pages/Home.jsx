import React from 'react';
import { useTranslation } from '../../node_modules/react-i18next';
import { Row, Col } from 'antd';
import RealTimeInfo from '../components/RealTimeInfo';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <h1>{t('home.title')}</h1>
        <p>{t('home.welcome')}</p>
        <RealTimeInfo />
      </Col>
    </Row>
  );
};

export default Home;