import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, Card, Table, Tag, Spin, Button } from 'antd';
import ResourceCard from '../components/ResourceCard';
import { companies } from '../data/lines';
import { statusList } from '../utils/statusConfig';
import './CompanyDetail.css';

const { Title, Paragraph } = Typography;


const CompanyDetail = React.memo(() => {
  const { companyId } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const company = React.useMemo(() => {
    const foundCompany = companies.find((c) => c.id === companyId);
    setLoading(!foundCompany);
    return foundCompany;
  }, [companyId]);

  const getLocalizedText = React.useCallback((textObj) => {
    if (!textObj) return '';
    if (typeof textObj === 'string') return textObj;
    if (typeof textObj !== 'object') return String(textObj);
    return textObj[i18n.language] || textObj.en || textObj.zh || '';
  }, [i18n.language]);

  const resources = React.useMemo(() => {
    if (!company) return [];
    return [
      {
        title: t('company.website'),
        description: 'Official website',
        link: company.website || '#',
        type: 'website'
      },
    ];
  }, [t, company]);

  const getStatusColor = (status) => {
    const statusConfig = statusList.find((s) => s.key === status);
    return statusConfig ? statusConfig.color : 'gray';
  };

  // Table Columns Configuration
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
      dataIndex: 'operationalInfo',
      key: 'operationalInfo',
    }
  ], [t]);

  if (!company) {
    return (
      <div className="error-container">
        <h2>{t('notFound.company')}</h2>
        <Button type="primary" onClick={() => navigate(-1)}>
          {t('common.back')}
        </Button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
        <p>{t('common.loading')}</p>
      </div>
    );
  }

  return (
    <div className="company-container">
      {/* Sidebar */}
      <div className="company-sidebar">
        <img
          src={`/assets/companies/${company.id}.png`}
          alt={getLocalizedText(company.name)}
          className="company-logo"
        />
        
        {/* Resources Section */}
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

      {/* Main Content */}
      <div className="company-main">
        <div className="company-header">
          <Title level={2} className="company-title">
            {getLocalizedText(company.name)}
          </Title>
          <Paragraph className="company-description">
            {getLocalizedText(company.description)}
          </Paragraph>
        </div>

        {/* Operation Status Section */}
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
  );
});

CompanyDetail.propTypes = {
  companyId: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    language: PropTypes.string.isRequired
  }).isRequired
};

export default CompanyDetail;
