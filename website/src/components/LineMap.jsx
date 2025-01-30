import React from 'react';
import { useTranslation } from '../../node_modules/react-i18next';
import { Card } from 'antd';

const LineMap = () => {
  const { t } = useTranslation();

  return (
    <Card title={t('lineMap.title')} style={{ margin: '20px' }}>
      <p>{t('lineMap.description')}</p>
    </Card>
  );
};

export default LineMap;