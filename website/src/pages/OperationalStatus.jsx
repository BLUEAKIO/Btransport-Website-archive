import React, { useEffect, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Card, Table, Tag } from 'antd'
import { useGetCompaniesQuery } from '../store/features/apiSlice'
import { STATUS_LIST } from '../constants/statusConfig'
import useLocalizedText from '../hooks/useLocalizedText'

/**
 * 运营状态页面组件
 * @description 显示所有线路的实时运营状态
 * @returns {JSX.Element} 运营状态页面
 */
const OperationalStatus = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [error, setError] = useState(null);

  // 监听语言变化
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


  // 获取公司数据
  const { data: companies, isLoading, isError } = useGetCompaniesQuery();

  // 错误处理
  useEffect(() => {
    if (isError) {
      setError('获取运营状态数据失败');
      console.error('获取运营状态数据失败');
    }
  }, [isError]);
  
  const { getLocalizedText } = useLocalizedText()
  
  // 生成表格数据
  const data = useMemo(() => {
    if (!companies) return []
    try {
      return companies.flatMap((company) =>
        company.lines.map((line) => {
          const status = STATUS_LIST.find(s => s.key === line.operationalStatus) || STATUS_LIST[0]
          const companyName = getLocalizedText(company.name)
          const lineName = getLocalizedText(line.name)
          const operationalInfo = getLocalizedText(line.operationalInfo)
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
      );
    } catch (err) {
      setError('生成运营状态数据失败');
      console.error('生成运营状态数据失败:', err);
      return [];
    }
  }, [companies, currentLanguage, STATUS_LIST, t, getLocalizedText]);

  // 表格列配置
  const columns = useMemo(() => [
    {
      title: t('timetable.line'), // 线路名称
      dataIndex: 'line',
      key: 'line',
    },
    {
      title: t('company.operationalStatus'), // 运营状态
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: t('company.operationalInformation'), // 运营信息
      dataIndex: 'operationalStatus',
      key: 'operationalStatus',
    },
  ], [t]);

  // 错误显示
  if (error) {
    return (
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h1>{t('company.operationalStatus')}</h1>
          <Card>
            <div style={{ color: 'red', textAlign: 'center' }}>
              {error}
            </div>
          </Card>
        </Col>
      </Row>
    );
  }

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
            loading={isLoading}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default OperationalStatus;
