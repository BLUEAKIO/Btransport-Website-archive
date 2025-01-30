import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card, Typography, List } from 'antd';
import { companies } from '../data/lines';

const { Title, Paragraph } = Typography;

const CompanyDetail = () => {
  const { companyId } = useParams();
  const { t } = useTranslation();

  const company = companies.find((c) => c.id === companyId);

  if (!company) {
    return <div>{t('notFound.company')}</div>;
  }

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <Title level={2}>{company.name}</Title>
        <Card title={t('company.introduction')} style={{ marginBottom: '20px' }}>
          <Paragraph>
            {company.description || t('company.description')}
          </Paragraph>
        </Card>
        <Card title={t('company.lineMap')} style={{ marginBottom: '20px' }}>
          <Paragraph>
            {t('company.lineMap')} for {company.name} {t('company.noDelays')}
          </Paragraph>
        </Card>
        <Card title={t('company.operationalStatus')}>
          <List
            dataSource={company.lines}
            renderItem={(line) => (
              <List.Item>
                <span>{line.name}: {t('company.noDelays')}</span>
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default CompanyDetail;