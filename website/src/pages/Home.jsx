import React from 'react';
import { Row, Col } from 'antd';
import RealTimeInfo from '../components/RealTimeInfo';
import CarouselBanner from '../components/CarouselBanner';
import CompanyLogos from '../components/CompanyLogos';

const Home = () => {
  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <CarouselBanner />
      </Col>
      <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
        <RealTimeInfo />
      </Col>
      {/*<CompanyLogos />*/}
    </Row>
  );
};

export default Home;
