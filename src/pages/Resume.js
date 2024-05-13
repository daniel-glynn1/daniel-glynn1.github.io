import React from 'react';

import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className='resumeOuter'>
      <div className='resumeHeader'>
        <h2 className='resumeTitle'>RESUME</h2>
      </div>
      <div className='resumeBody'>
        <div>

          <h3> Education </h3>
          <p> Colorado School of Mines, Golden, CO</p>
          <p>B.S. Computer Science - August 2019 - May 2022</p>
          <p>M.S. Computer Science - August 2022 - May 2023</p>
          <p>Focus Area in Data Science</p>
          <p>GPA: 3.94/4.0</p>

        </div>

        <div>
          <h3> Experience </h3>
          <p> Computer Science Teaching Assisstant — Colorado School of Mines</p>
          <p>Intro to Data Science, Spring 2022 - Spring 2023</p>
          <p>Helped students one-on-one with coursework and assignments to aid in understanding of the material.</p>
          <p>Communicated with the professor and other TA's to improve projects and ensure student success.</p>
          <p>Graded projects and activities.</p>
        </div>

        <div>
          <h3> Skills </h3>
          <p>Proficient languages: Python, C++, JavaScript </p>
          <p>Familiar languages: Swift, Java, Kotlin, C, SQL, R, Git, HTML, CSS</p>
          <p>Soft skills: Problem solving, Critical thinking, Teamwork, Fast learning</p>
        </div>
      </div>
     
    </div>


  );
};

export default Resume;