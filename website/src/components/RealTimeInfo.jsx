import React from 'react';
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
  const currentLanguage = ['en', 'zh-Hans', 'zh-Hant'].includes(i18n.language) ? i18n.language : 'en';

  const data = companies.flatMap((company) =>
    company.lines
      .filter((line) => line.operationalStatus !== 'normal')
      .map((line) => ({
        key: `${company.id}-${line.id}`,
        name: `${company.name[currentLanguage] || company.name['en']} ${line.name[currentLanguage] || line.name['en']}`,
        status: line.operationalStatus,
        info: line.operationalInfo[currentLanguage] || line.operationalInfo['en'],
      }))
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
