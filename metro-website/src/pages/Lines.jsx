import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import LineMap from '../components/LineMap';

const Lines = () => {
  const { t } = useTranslation();

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <h1>{t('lines.title')}</h1>
        <p>{t('lines.map')}</p>
        <LineMap />
      </Col>
    </Row>
  );
};

export default Lines;