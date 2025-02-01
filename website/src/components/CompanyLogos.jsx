import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { companies } from '../data/lines';

const CompanyLogos = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Col span={24} style={{ padding: '20px' }}>
      <Row gutter={[16, 16]} justify="center">
        {companies.map((company) => (
          <Col key={company.id}>
            <div
              style={{
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: '#f0f0f0',
                textAlign: 'center',
              }}
              onClick={() => navigate(`/companies/${company.id}`)}
            >
              <img
                src={`/companies/company_${company.id}.png`}
                alt={company.name.en}
                style={{ height: '60px', marginBottom: '8px' }}
              />
              <div style={{ fontSize: '14px', color: '#333' }}>
                {company.name[t('i18n.language')]}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default CompanyLogos;
