import React from 'react';
import { Card, Table } from 'antd';

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

const Timetable = () => {
  return (
    <Card title="Timetable" style={{ margin: '20px' }}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};

export default Timetable;