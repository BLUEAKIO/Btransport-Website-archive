import React from 'react';
import { Row, Col, Card, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { companies } from '../data/lines';

const { Title } = Typography;

const CompanyLogos = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Col span={24}>
      <Row justify="center" style={{ marginBottom: 24 }}>
        <Title level={2}>{t('home.company')}</Title>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        {companies.map((company) => (
          <Col key={company.id}>
            <Card
              hoverable
              onClick={() => navigate(`/companies/${company.id}`)}
              bodyStyle={{ padding: 16, textAlign: 'center' }}
            >
              <Space align="center" direction="vertical">
                <img
                  src={`/assets/companies/${company.id}.png`}
                  alt={company.name.en}
                  style={{ 
                    height: 60,
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default CompanyLogos;
