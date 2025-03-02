import React, { lazy, Suspense, useState, useEffect } from 'react'
import type { Company } from '../../types/index.d'
import { Row, Col, Card, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useGetCompaniesQuery } from '../../store/features/apiSlice'
import SkeletonLoader from './SkeletonLoader'
import useLocalizedText from '../../hooks/useLocalizedText.js'

const LazyImage = lazy(() => import('./LazyImage'))

const { Title } = Typography

/**
 * 公司Logo展示组件
 * @description 显示所有公司的Logo，点击可跳转到公司详情页
 * @returns {JSX.Element} 公司Logo展示组件
 */
interface CompanyLogosProps {
  // 可以添加需要的props类型
}

const CompanyLogos: React.FC<CompanyLogosProps> = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const { getLocalizedText } = useLocalizedText<Record<string, string>>()

  // 获取公司数据
  const { data: companiesResponse = { data: [] }, isLoading, isError } = useGetCompaniesQuery({ page: 1, limit: 10 });
  const companies = companiesResponse.data;

  // 错误处理
  useEffect(() => {
    if (isError) {
      setError(t('error.loadCompaniesFailed'))
      console.error('获取公司数据失败')
    }
  }, [isError, t])

  // 错误显示
  if (error) {
    return (
      <Col span={24}>
        <Row justify="center">
          <div style={{ color: 'red' }}>{error}</div>
        </Row>
      </Col>
    )
  }

  return (
    <Col span={24}>
      <Row justify="center" style={{ marginBottom: 24 }}>
        <Title level={2}>{t('home.company')}</Title>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Col key={index}>
              <Card bodyStyle={{ padding: 16, textAlign: 'center' }}>
                <SkeletonLoader height={60} width={120} />
              </Card>
            </Col>
          ))
        ) : (
          companies?.map((company: Company) => (
            <Col key={company.id}>
              <Card
                hoverable
                onClick={() => navigate(`/company/${company.id}`)}
                bodyStyle={{ padding: 16, textAlign: 'center' }}
              >
                <Space align="center" direction="vertical">
                  <Suspense fallback={<SkeletonLoader height={60} width={120} />}>
                    <LazyImage
                      src={`/assets/companies/${company.id}.png`}
                      alt={getLocalizedText(company.name)}
                      style={{ 
                        height: 60,
                        width: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </Suspense>
                </Space>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Col>
  )
}

export default CompanyLogos
