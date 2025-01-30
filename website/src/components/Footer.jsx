import React from 'react';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

const { Footer } = Layout;

const AppFooter = () => {
  const { t } = useTranslation();

  return (
    <Footer style={{ textAlign: 'center', padding: '20px' }}>
      {t('footer.copyright')}
    </Footer>
  );
};

export default AppFooter;