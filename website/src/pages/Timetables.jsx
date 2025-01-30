import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card, Table } from 'antd';

const columns = [
  {
    title: 'Line',
    dataIndex: 'line',
    key: 'line',
  },
  {
    title: 'Departure Time',
    dataIndex: 'departure',
    key: 'departure',
  },
  {
    title: 'Arrival Time',
    dataIndex: 'arrival',
    key: 'arrival',
  },
];

const data = [
  {
    key: '1',
    line: 'Line 1',
    departure: '08:00',
    arrival: '08:30',
  },
  {
    key: '2',
    line: 'Line 2',
    departure: '08:15',
    arrival: '08:45',
  },
];

const Timetables = () => {
  const { t } = useTranslation();

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <h1>{t('timetables.title')}</h1>
        <Card title={t('timetables.schedule')} style={{ margin: '20px' }}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
      </Col>
    </Row>
  );
};

export default Timetables;