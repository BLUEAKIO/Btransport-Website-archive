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
      marginTop: '-64px' /* antd Header height */
    }}>
      <Carousel autoplay autoplaySpeed={10000}>
        <div>
          <img 
            src="/assetc/banner/Blank.png" 
            alt="Banner 1" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img 
            src="/assetc/banner/Blank.png" 
            alt="Banner 2" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
