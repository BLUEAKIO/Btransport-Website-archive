import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Typography, Card, Table, Tag, Spin, Button } from 'antd'
import ResourceCard from '../components/ResourceCard'
import { useGetCompanyByIdQuery } from '../store/features/apiSlice'
import { STATUS_LIST } from '../constants/statusConfig'
import useLocalizedText from '../hooks/useLocalizedText'
import './CompanyDetail.css'

const { Title, Paragraph } = Typography

/**
 * 公司详情页面组件
 * @description 显示公司详细信息，包括运营状态、时刻表等
 * @returns {JSX.Element} 公司详情页面
 */
const CompanyDetail = React.memo(() => {
  const { companyId } = useParams() // 从路由参数获取公司ID
  const { t } = useTranslation() // 国际化翻译hook
  const navigate = useNavigate() // 路由导航hook
  const [loading, setLoading] = React.useState(false) // 加载状态
  const { getLocalizedText } = useLocalizedText() // 本地化文本hook

  // 获取公司数据
  const { data: company, isLoading, isError } = useGetCompanyByIdQuery(companyId)
  
  // 错误处理
  React.useEffect(() => {
    if (isError) {
      setLoading(false)
      console.error('获取公司数据失败')
    }
  }, [isError])

  // 公司资源列表
  const resources = React.useMemo(() => {
    if (!company) return []
    return [
      {
        title: t('company.website'),
        description: 'Official website',
        link: company.website || '#',
        type: 'website'
      },
    ]
  }, [t, company])

  /**
   * 获取状态对应的颜色
   * @param {string} status - 状态key
   * @returns {string} 状态对应的颜色
   */
  const getStatusColor = (status) => {
    const statusConfig = STATUS_LIST.find((s) => s.key === status)
    return statusConfig ? statusConfig.color : 'gray'
  }

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
      dataIndex: 'operationalInfo',
      key: 'operationalInfo',
    }
  ], [t])

  if (isError || (!isLoading && !company)) {
    return (
      <div className="error-container">
        <h2>{t('notFound.company')}</h2>
        <Button type="primary" onClick={() => navigate(-1)}>
          {t('common.back')}
        </Button>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
        <p>{t('common.loading')}</p>
      </div>
    )
  }

  return (
    <div className="company-container">
      <div className="company-sidebar">
        <img
          src={`/assets/companies/${company.id}.png`}
          alt={getLocalizedText(company.name)}
          className="company-logo"
        />
        
        <div className="resource-section">
          <Title level={4} className="section-title">
            {t('company.resources')}
          </Title>
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              link={resource.link}
              t={t}
            />
          ))}
        </div>
      </div>

      <div className="company-main">
        <div className="company-header">
          <Title level={2} className="company-title">
            {getLocalizedText(company.name)}
          </Title>
          <Paragraph className="company-description">
            {getLocalizedText(company.description)}
          </Paragraph>
        </div>

        <div className="operation-status">
          <Title level={4} className="section-title">
            {t('company.operationStatus')}
          </Title>
          <Card>
            <Table
              columns={columns}
              dataSource={company.lines?.map((line) => ({
                key: line.id,
                line: getLocalizedText(line.name),
                status: (
                  <Tag color={getStatusColor(line.operationalStatus)}>
                    {t(`status.${line.operationalStatus}`)}
                  </Tag>
                ),
                operationalInfo: getLocalizedText(line.operationalInfo)
              }))}
              pagination={{ pageSize: 10 }}
              bordered
              scroll={{ x: 'max-content' }}
              loading={loading}
            />
          </Card>
        </div>
      </div>
    </div>
  )
})

CompanyDetail.propTypes = {
  companyId: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    language: PropTypes.string.isRequired
  }).isRequired
}

export default CompanyDetail
