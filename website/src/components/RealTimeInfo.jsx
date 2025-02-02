import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Card, List, Tag } from 'antd';
import { companies } from '../data/lines';

const statusColors = {
  normal: 'green',
  delay: 'yellow',
  partialSuspension: 'orange',
  termination: 'gray',
  suspended: 'red',
};

const RealTimeInfo = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  const data = companies.flatMap((company) =>
    company.lines
      .filter((line) => line.operationalStatus !== 'normal')
      .map((line) => {
        const companyName = company.name[currentLanguage] || company.name['en'];
        const lineName = line.name[currentLanguage] || line.name['en'];
        const operationalInfo = line.operationalInfo[currentLanguage] || line.operationalInfo['en'];
        return {
          key: `${company.id}-${line.id}`,
          name: `${companyName} ${lineName}`,
          status: line.operationalStatus,
          info: operationalInfo,
        };
      })
  );

  if (data.length === 0) {
    return (
      <Card title={t('realTimeInfo.title')} style={{ margin: '20px' }}>
        <p>{t('realTimeInfo.allNormal')}</p>
      </Card>
    );
  }

  return (
    <Card title={t('realTimeInfo.title')} style={{ margin: '20px' }}>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item 
            key={item.key}
            onClick={() => navigate('/train_info')}
            style={{ cursor: 'pointer' }}
          >
            <List.Item.Meta
              title={item.name}
              description={
                <div>
                  <Tag color={statusColors[item.status]}>
                    {t(`status.${item.status}`)}
                  </Tag>
                  <span style={{ marginLeft: 8 }}>{item.info}</span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default RealTimeInfo;
