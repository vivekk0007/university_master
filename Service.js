import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Sdata from './Sdata';

const EngineeringCoursesSlideshow = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#333', fontStyle: 'revert' }}>Engineering courses</h2>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={500}
        stopOnHover={false}
        showStatus={false}
        showIndicators={false}
        showArrows
      >
        {Sdata.map((course) => (
          <div key={course.title}>
            <img src={course.imgsrc} alt={course.title} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
            <p className="legend">{course.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default EngineeringCoursesSlideshow;

