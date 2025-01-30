import React from 'react';
import { useTranslation } from '../../node_modules/react-i18next';
import { Row, Col, Card } from 'antd';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <Card title={t('contact.title')} style={{ margin: '20px' }}>
          <p>{t('contact.email')}</p>
          <p>{t('contact.phone')}</p>
        </Card>
      </Col>
    </Row>
  );
};

export default Contact;