import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card, Typography, Table, Tag, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { companies } from '../data/lines';

const { Title, Paragraph } = Typography;

const CompanyDetail = () => {
  const { companyId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const company = companies.find((c) => c.id === companyId);

  if (!company) {
    return <div>{t('notFound.company')}</div>;
  }

  const columns = [
    {
      title: t('company.lineName'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('company.status'),
      dataIndex: 'operationalStatus',
      key: 'status',
      render: (status) => {
        let color = 'green';
        let text = t('status.normal');
        if (status === 'partialSuspension') {
          color = 'orange';
          text = t('status.partialSuspension');
        } else if (status === 'fullSuspension') {
          color = 'red';
          text = t('status.fullSuspension');
        }
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: t('company.details'),
      dataIndex: 'operationalInfo',
      key: 'details',
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* 公司头部 */}
      <Row justify="center" style={{ marginBottom: '24px' }}>
        <Col>
          <img
            src={`/companies/company_${company.id}.png`}
            alt={company.name.en}
            style={{ height: '80px', marginBottom: '16px' }}
          />
          <Title level={2} style={{ textAlign: 'center' }}>
            {company.name[t('i18n.language')]}
          </Title>
        </Col>
      </Row>

      {/* 主体内容 */}
      <Row gutter={[24, 24]}>
        {/* 公司简介 */}
        <Col xs={24} md={12}>
          <Card title={t('company.introduction')}>
            <Paragraph>
              {company.description[t('i18n.language')]}
            </Paragraph>
          </Card>
        </Col>

        {/* 运营线路 */}
        <Col xs={24} md={12}>
          <Card title={t('company.operationalStatus')}>
            <Table
              dataSource={company.lines}
              columns={columns}
              pagination={false}
              rowKey="id"
            />
          </Card>
        </Col>
      </Row>

      {/* 返回按钮 */}
      <Row justify="center" style={{ marginTop: '24px' }}>
        <Button
          type="primary"
          icon={<HomeOutlined />}
          onClick={() => navigate('/')}
        >
          {t('backToHome')}
        </Button>
      </Row>
    </div>
  );
};

export default CompanyDetail;
