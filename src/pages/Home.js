import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>My name is Ryan Huntington. I'm a software engineer with skills in building applications
        and deep learning. Currently, I'm working on completing my Bachelors of Science at Baylor University.
      </p>
      <div className='projects-button'>
        <Link to="/projects">Explore my Projects!</Link>
      </div>
    </div>
  );
}

export default Home;
