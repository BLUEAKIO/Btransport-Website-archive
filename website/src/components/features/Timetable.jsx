import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Table } from 'antd';

const Timetable = () => {
  const { t } = useTranslation();

  const columns = [
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

  const data = [
    {
      key: '1',
      line: t('timetable.line1'), // 国际化线路名称
      departure: '08:00',
      arrival: '08:30',
    },
    {
      key: '2',
      line: t('timetable.line2'), // 国际化线路名称
      departure: '08:15',
      arrival: '08:45',
    },
  ];

  return (
    <Card title={t('timetable.title')} style={{ margin: '20px' }}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};

export default Timetable;