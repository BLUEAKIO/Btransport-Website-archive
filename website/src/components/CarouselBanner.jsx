import React from 'react';
import { Carousel } from 'antd';

const CarouselBanner = () => {
  return (
    <div style={{ 
      width: '100%', 
      overflow: 'hidden', 
      margin: 0, 
      padding: 0,
      position: 'relative',
      marginTop: '-64px'
    }}>
      <Carousel autoplay autoplaySpeed={10000}>
        <div>
          <img 
            src="/assets/banner/banner1.png" 
            alt="KR 南岸中心站 10站台 夜景仰视" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img 
            src="/assets/banner/banner2.png" 
            alt="Blank Banner" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
