import React from 'react';
import { Card, Alert } from 'antd';

const RealTimeInfo = () => {
  return (
    <Card title="Real-Time Information" style={{ margin: '20px' }}>
      <Alert message="No delays reported." type="success" showIcon />
    </Card>
  );
};

export default RealTimeInfo;