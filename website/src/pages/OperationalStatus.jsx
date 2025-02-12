import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card, Table, Tag } from 'antd';
import { companies } from '../data/lines';
import { statusList } from '../utils/statusConfig';

const OperationalStatus = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setCurrentLanguage(lng);
    };

    // 设置初始语言
    if (i18n.language !== currentLanguage) {
      setCurrentLanguage(i18n.language);
    }

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n, currentLanguage]);


  const data = useMemo(() => companies.flatMap((company) =>
    company.lines.map((line) => {
      const status = statusList.find(s => s.key === line.operationalStatus) || statusList[0];
      const companyName = company.name[currentLanguage] || company.name['en'];
      const lineName = line.name[currentLanguage] || line.name['en'];
      const operationalInfo = line.operationalInfo[currentLanguage] || line.operationalInfo['en'];
      return {
        key: `${company.id}-${line.id}`,
        line: `${companyName} ${lineName}`,
        status: (
          <Tag color={status.color}>
            {t(`status.${status.key}`)}
          </Tag>
        ),
        operationalStatus: operationalInfo,
      };
    })
  ), [companies, currentLanguage, statusList, t]);

  const columns = useMemo(() => [
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
  ], [t]);

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <h1>{t('company.operationalStatus')}</h1>
        <Card>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            bordered
            scroll={{ x: 'max-content' }}
            style={{ width: '100%' }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default OperationalStatus;
