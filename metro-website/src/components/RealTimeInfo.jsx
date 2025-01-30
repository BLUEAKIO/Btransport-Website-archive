import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Alert } from 'antd';

const RealTimeInfo = () => {
  const { t } = useTranslation();

  return (
    <Card title={t('realTimeInfo.title')} style={{ margin: '20px' }}>
      <Alert message={t('realTimeInfo.noDelays')} type="success" showIcon />
    </Card>
  );
};

export default RealTimeInfo;