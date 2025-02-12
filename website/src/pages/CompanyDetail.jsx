import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, Card, Table, Tag } from 'antd';
import { companies } from '../data/lines';
import { statusList } from '../utils/statusConfig';
import './CompanyDetail.css';

const { Title, Paragraph } = Typography;

const CompanyDetail = () => {
  const { companyId } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const company = React.useMemo(() => 
    companies.find((c) => c.id === companyId),
    [companyId]
  );

  if (!company) {
    return <div>{t('notFound.company')}</div>;
  }

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    if (typeof textObj === 'string') return textObj;
    if (typeof textObj !== 'object') return String(textObj);
    return textObj[i18n.language] || textObj.en || '';
  };

  const resources = [
    {
      title: t('company.website'),
      description: 'Official website',
      link: company.website
    },
    {
      title: t('company.forum'),
      description: 'Community discussions',
      link: company.forum
    },
    {
      title: t('company.socialMedia'),
      description: 'Social media links',
      link: company.socialMedia
    }
  ];

  const getStatusColor = (status) => {
    const statusConfig = statusList.find((s) => s.key === status);
    return statusConfig ? statusConfig.color : 'gray';
  };

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
            <Card key={index} className="resource-card">
              <h3>{resource.title}</h3>
              <p className="resource-meta">{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noreferrer">
                {t('company.visit')}
              </a>
            </Card>
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
          <Table
            columns={[
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
              },
              {
                title: t('company.lastUpdate'),
                dataIndex: 'lastUpdate',
                key: 'lastUpdate',
              }
            ]}
            dataSource={company.lines?.map((line) => {
              const statusColor = getStatusColor(line.operationalStatus);
              return {
                key: line.id,
                line: getLocalizedText(line.name),
                status: (
                  <Tag color={statusColor}>
                    {t(`status.${line.operationalStatus}`)}
                  </Tag>
                ),
                operationalInfo: getLocalizedText(line.operationalInfo),
                lastUpdate: new Date().toLocaleString()
              };
            })}
            pagination={false}
            bordered
            size="middle"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
