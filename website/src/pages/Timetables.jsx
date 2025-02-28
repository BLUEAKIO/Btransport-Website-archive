import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Card, Table } from 'antd'
import { useGetCompaniesQuery } from '../store/features/apiSlice'
import useLocalizedText from '../hooks/useLocalizedText'

/**
 * 时刻表页面组件
 * @description 显示所有线路的时刻表信息
 * @returns {JSX.Element} 时刻表页面
 */
const Timetables = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(null);

  // 获取公司数据
  const { data: companies, isLoading, isError } = useGetCompaniesQuery()
  const { getLocalizedText } = useLocalizedText()

  // 错误处理
  useEffect(() => {
    if (isError) {
      setError('获取时刻表数据失败');
      console.error('获取时刻表数据失败');
    }
  }, [isError]);

  /**
   * 生成时刻表数据
   * @param {Array} companies - 公司数据
   * @param {Function} getLocalizedText - 本地化文本函数
   * @returns {Array} 时刻表数据
   */
  const getTimetableData = (companies, getLocalizedText) => {
    if (!companies) return []
    
    try {
      return companies.flatMap(company => 
        company.lines.map(line => ({
          key: `${company.id}-${line.id}`,
          line: getLocalizedText(line.name),
          departure: line.timetable?.departure || 'N/A',
          arrival: line.timetable?.arrival || 'N/A'
        }))
      )
    } catch (err) {
      setError('生成时刻表数据失败');
      console.error('生成时刻表数据失败:', err);
      return [];
    }
  }

  // 表格列配置
  const columns = [
    {
      title: t('timetable.line'), // 线路名称
      dataIndex: 'line',
      key: 'line',
    },
    {
      title: t('timetable.departure'), // 出发时间
      dataIndex: 'departure',
      key: 'departure',
    },
    {
      title: t('timetable.arrival'), // 到达时间
      dataIndex: 'arrival',
      key: 'arrival',
    },
  ];

  // 错误显示
  if (error) {
    return (
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <h1>{t('timetables.title')}</h1>
          <Card>
            <div style={{ color: 'red', textAlign: 'center' }}>
              {error}
            </div>
          </Card>
        </Col>
      </Row>
    );
  }

  const data = getTimetableData(companies, getLocalizedText)

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <h1>{t('timetables.title')}</h1>
        <Card title={t('timetables.schedule')} style={{ margin: '20px' }}>
          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={false}
            loading={isLoading}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Timetables;
