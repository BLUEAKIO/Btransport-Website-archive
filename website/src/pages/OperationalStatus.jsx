import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card, Table, Tag } from 'antd';
import { companies } from '../data/lines';

const OperationalStatus = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = ['en', 'zh-Hans', 'zh-Hant'].includes(i18n.language) ? i18n.language : 'en';

  const statusList = [
    { key: 'normal', color: 'green' },
    { key: 'delay', color: 'yellow' },
    { key: 'partialSuspension', color: 'orange' },
    { key: 'termination', color: 'gray' },
    { key: 'suspended', color: 'red' },
  ];

  const data = companies.flatMap((company) =>
    company.lines.map((line) => {
      const status = statusList.find(s => s.key === line.operationalStatus) || statusList[0];
      return {
        key: `${company.id}-${line.id}`,
        line: `${company.name[currentLanguage] || company.name['en']} ${line.name[currentLanguage] || line.name['en']}`,
        status: (
          <Tag color={status.color}>
            {t(`status.${status.key}`)}
          </Tag>
        ),
        operationalStatus: line.operationalInfo[currentLanguage] || line.operationalInfo['en'],
      };
    })
  );

  const columns = [
    {
      title: t('timetable.line'),
      dataIndex: 'line',
      key: 'line',
    },
    {
      title: t('company.operationalStatus'),
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: t('company.operationalInformation'),
      dataIndex: 'operationalStatus',
      key: 'operationalStatus',
    },
  ];

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card title={t('operationalStatus.title')}>
          <Table dataSource={data} columns={columns} />
        </Card>
      </Col>
    </Row>
  );
};

export default OperationalStatus;
