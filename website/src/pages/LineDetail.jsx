import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from '../../node_modules/react-i18next';
import { Row, Col, Card, Typography, Table } from 'antd';
import { companies } from '../data/lines';

const { Title, Paragraph } = Typography;

const LineDetail = () => {
  const { companyId, lineId } = useParams();
  const { t } = useTranslation();

  const company = companies.find((c) => c.id === companyId);
  const line = company?.lines.find((l) => l.id === lineId);

  if (!company || !line) {
    return <div>{t('notFound.line')}</div>;
  }

  // 时刻表数据
  const timetableColumns = [
    {
      title: t('timetable.line'),
      dataIndex: 'line',
      key: 'line',
    },
    {
      title: t('timetable.departure'),
      dataIndex: 'departure',
      key: 'departure',
    },
    {
      title: t('timetable.arrival'),
      dataIndex: 'arrival',
      key: 'arrival',
    },
  ];

  const timetableData = [
    {
      key: '1',
      line: t('timetable.line1'),
      departure: '08:00',
      arrival: '08:30',
    },
    {
      key: '2',
      line: t('timetable.line2'),
      departure: '08:15',
      arrival: '08:45',
    },
  ];

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <Title level={2}>
          {company.name} - {line.name}
        </Title>
        <Card title={t('line.map')} style={{ marginBottom: '20px' }}>
          <Paragraph>{t('line.map')} for {line.name} {t('company.noDelays')}</Paragraph>
        </Card>
        <Card title={t('line.operationalStatus')} style={{ marginBottom: '20px' }}>
          <Paragraph>{t('company.noDelays')}</Paragraph>
        </Card>
        <Card title={t('timetable.title')}>
          <Table columns={timetableColumns} dataSource={timetableData} pagination={false} />
        </Card>
      </Col>
    </Row>
  );
};

export default LineDetail;