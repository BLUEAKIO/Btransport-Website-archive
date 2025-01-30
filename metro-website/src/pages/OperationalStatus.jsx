import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card, Table, Tag } from 'antd';
import { companies } from '../data/lines';

const OperationalStatus = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; // 获取当前语言

  // 运营状态列表
  const statusList = [
    { key: 'normal', color: 'green' },
    { key: 'delay', color: 'yellow' },
    { key: 'partialSuspension', color: 'orange' },
    { key: 'termination', color: 'gray' },
    { key: 'suspended', color: 'red' },
  ];

  // 准备表格数据
  const data = companies.flatMap((company) =>
    company.lines.map((line) => {
      // 获取线路的运营状态
      const status = statusList.find(s => s.key === line.operationalStatus) || statusList[0]; // 默认状态为 'normal'
      return {
        key: `${company.id}-${line.id}`,
        line: `${company.name[currentLanguage]} ${line.name[currentLanguage]}`, // 公司名 + 线路名
        status: (
          <Tag color={status.color}>
            {t(`status.${status.key}`)}
          </Tag>
        ), // 运营状态
        operationalStatus: line.operationalInfo[currentLanguage], // 从 lines.js 获取运营情况
      };
    })
  );

  // 表格列配置
  const columns = [
    {
      title: t('timetable.line'), // 线路
      dataIndex: 'line',
      key: 'line',
    },
    {
      title: t('company.operationalStatus'), // 运营状态
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: t('company.operationalInformation'), // 运营情况
      dataIndex: 'operationalStatus',
      key: 'operationalStatus',
    },
  ];

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}> {/* 调整 Col 的宽度 */}
        <h1>{t('company.operationalStatus')}</h1>
        <Card>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            scroll={{ x: true }}
            style={{ width: '100%' }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default OperationalStatus;