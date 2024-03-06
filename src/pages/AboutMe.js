import React from 'react';
import self from '../photos/IMG_8543.jpg'
import './styles.css'

function AboutMe() {
  return (
    <div className='page'>
      <h1>About Me</h1>
      <div className='bio-container'>
        <div className='bio-text'>
          <p>
            Hello, I'm Ryan Huntington, a passionate software engineer and developer with a love for creativity and problem-solving.
            With a background in computer science, I've always been fascinated by the intersection of technology and design.
          </p>
          <p>
            My journey began in high school when I discovered my passion for computer science. I continued my education at Baylor University,
            where I'm currently pursuing a degree in computer science, expected to graduate in May 2024. Throughout my academic journey,
            I've gained expertise in various web technologies, including React, Java, C++, Python, PHP, and MySQL. Additionally, I've developed
            a robust skill set in deep learning, specializing in neural networks, natural language processing, and computer vision. I have also
            developed a strong analytical mindset and proven leadership skills, demonstrating meticulous attention to detail in solving complex
            problems and consistently meeting project deadlines.
          </p>
          <p>
            I believe in the power of collaboration and thrive in dynamic environments where I can exchange ideas and learn from others. Whether
            it's developing intuitive user interfaces, crafting compelling visuals, or tackling complex technical issues, I'm driven by a desire
            to create meaningful solutions that make a difference.
          </p>
          <p>
            When I'm not immersed in projects, you can usually find me with my friends, taking care of my many plants, or pursuing my latest hobby.
            I'm always eager to explore new interests and find inspiration in unexpected places.
          </p>
          <p>Feel free to reach out—I'd love to connect and discuss how we can collaborate together.</p>
        </div>
        <div className='portrait'>
          <img src={self} alt="Self portrait of Ryan Huntington" />
        </div>
      </div>
      <div className='work-experience'>
        <h2>Work Experience</h2>
        <div className='experience-item'>
          <h3>Software Development Intern</h3>
          <p className='company'>Paycom</p>
          <p className='duration'>May 2023 - August 2023</p>
          <ul className='responsibilities'>
            <li>Created graph-generating app using custom SQL queries on 10M-entry database</li>
            <li>Optimized algorithms for efficient data retrieval and processing, enhancing query performance</li>
            <li>Collaborated cross-functionally to integrate UI/UX, ensuring seamless user experience</li>
          </ul>
        </div>
        <p>also include a link to my resume here (will also put in navbar)</p>
      </div>
      <div>
        <p>this section will be about contacting me, email and phone</p>
      </div>
    </div>
  );
}

export default AboutMe;
