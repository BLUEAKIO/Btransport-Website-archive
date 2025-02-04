import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Result
      status="404"
      title="404"
      subTitle={t('404.message')}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          {t('404.backHome')}
        </Button>
      }
    />
  );
};

export default NotFound;