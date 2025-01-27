import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Typography } from 'antd';
import { companies } from '../data/lines'; // 导入公司数据

const { Title, Paragraph } = Typography;

const LineDetail = () => {
  const { companyId, lineId } = useParams(); // 获取路由参数

  // 查找对应的公司和线路
  const company = companies.find((c) => c.id === companyId);
  const line = company?.lines.find((l) => l.id === lineId);

  if (!company || !line) {
    return <div>Line not found</div>;
  }

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <Title level={2}>
          {company.name} - {line.name}
        </Title>
        <Card title="Line Map" style={{ marginBottom: '20px' }}>
          <Paragraph>Interactive line map will be displayed here.</Paragraph>
          {/* 这里可以嵌入线路运行图 */}
        </Card>
        <Card title="Operational Status">
          <Paragraph>No delays reported.</Paragraph>
          {/* 这里可以显示线路运营状态 */}
        </Card>
      </Col>
    </Row>
  );
};

export default LineDetail;