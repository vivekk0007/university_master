
import React from 'react';
import courses from './data';

const EngineeringCourses = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#333',fontStyle:"revert" }}>Engineering Streams</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {courses.map((course) => (
          <li key={course.id} style={{ marginBottom: '20px', backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '4px' }}>
            <h3 style={{ color: '#007bff' }}>{course.name}</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong><p>{course.title}</p></strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={course.image} alt={course.name} style={{ width: '100px', marginRight: '10px' }} />
              <p>{course.description}</p>
            </div>
            <div>
            <p>Duration: {course.duration}</p></div>
            <div>
              <p>eligibility:{course.eligibility}</p>
            </div>
            <div>
              <p>curriculum:{course.curriculum}</p>
            </div>
            <div>
              <p>careerOptions:{course.careerOptions}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EngineeringCourses;