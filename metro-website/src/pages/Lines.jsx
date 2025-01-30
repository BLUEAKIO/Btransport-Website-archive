import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card, List } from 'antd';
import { companies } from '../data/lines';

const Lines = () => {
  const { t } = useTranslation();

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <h1>{t('lines.title')}</h1>
        {companies.map((company) => (
          <Card key={company.id} title={company.name} style={{ marginBottom: '20px' }}>
            <List
              dataSource={company.lines}
              renderItem={(line) => (
                <List.Item>
                  <span>{line.name}</span>
                </List.Item>
              )}
            />
          </Card>
        ))}
      </Col>
    </Row>
  );
};

export default Lines;