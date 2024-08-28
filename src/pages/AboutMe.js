import React from "react";
import self from "../assets/images/IMG_8543.jpg";
import "./styles.css";
import ResumePDF from "../assets/documents/Resume_Huntington2024.pdf";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <div className="bio-container">
        <div className="bio-text">
          <p>
            Hello, I'm Ryan Huntington, a passionate software engineer and
            developer with a love for creativity and problem-solving. With a
            background in computer science, I've always been fascinated by the
            intersection of technology and design.
          </p>
          <p>
            My journey began in high school when I discovered my passion for
            computer science. I continued my education at Baylor University,
            where I pursued a degree in computer science, and graduated in May
            2024. Throughout my academic journey, I've gained expertise in
            various web technologies, including React, Java, C++, Python, PHP,
            and MySQL. Additionally, I've developed a robust skill set in deep
            learning, specializing in neural networks, natural language
            processing, and computer vision. I have also developed a strong
            analytical mindset and proven leadership skills, demonstrating
            meticulous attention to detail in solving complex problems and
            consistently meeting project deadlines.
          </p>
          <p>
            I believe in the power of collaboration and thrive in dynamic
            environments where I can exchange ideas and learn from others.
            Whether it's developing intuitive user interfaces, crafting
            compelling visuals, or tackling complex technical issues, I'm driven
            by a desire to create meaningful solutions that make a difference.
          </p>
          <p>
            When I'm not immersed in projects, you can usually find me with my
            friends, taking care of my many plants, or pursuing my latest
            hyperfixation. I'm always eager to explore new interests and find
            inspiration in unexpected places.
          </p>
          <p>
            Feel free to reach out—I'd love to connect and discuss how we can
            collaborate together.
          </p>
        </div>
        <div className="portrait">
          <img src={self} alt="Self portrait of Ryan Huntington" />
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-icon">
            <IoIosMail />
          </span>
          <a href="mailto:ryanhuntington12@gmail.com" className="info-text">
            ryanhuntington12@gmail.com
          </a>
        </div>
        <div className="contact-info">
          <span className="contact-icon">
            <IoIosCall />
          </span>
          <a href="tel:+17605329830" className="info-text">
            +1 (760) 532-9830
          </a>
        </div>
      </div>

      <div className="work-experience">
        <h2>Work Experience</h2>
        <div className="experience-item">
          <h3>Software Developer</h3>
          <p className="company">Paycom</p>
          <p className="duration">July 2024 - Present</p>
          <ul className="responsibilities">
            <li>
              Engaged in full-stack development on a team focused on optimizing
              payroll software for compliance with the Affordable Care Act (ACA)
            </li>
            <li>
              Developed solutions for complex business challenges, such as
              ensuring compliance with changing tax regulations and streamlining
              data workflows
            </li>
            <li>
              Contributed to system performance improvements, reducing
              processing times and enhancing the reliability of tax-related
              reporting tools
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Software Development Intern</h3>
          <p className="company">Paycom</p>
          <p className="duration">May 2023 - August 2023</p>
          <ul className="responsibilities">
            <li>
              Contributed as a full-stack engineer, playing a pivotal role in
              both front-end and back-end development projects
            </li>
            <li>
              Led the development of a graph-generating application, focusing on
              backend functionality and database management to support data
              visualization needs
            </li>
            <li>
              Optimized SQL queries across multiple tables with 10 million
              entries, reducing query execution time from over a minute to under
              a second
            </li>
            <li>
              Collaborated cross-functionally with UI/UX teams to integrate
              front-end design elements seamlessly with backend functionality,
              ensuring a cohesive and intuitive user experience
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Software Development Intern</h3>
          <p className="company">The CBORD Group</p>
          <p className="duration">April 2022 - May 2023</p>
          <ul className="responsibilities">
            <li>
              Resolved an average of 10 known issues per week within the main
              software, demonstrating strong troubleshooting skills and
              contributing to enhanced software reliability
            </li>
            <li>
              Collaborated with senior employees to design, develop, and
              implement both frontend and backend features, ensuring the
              delivery of functional and user-friendly software tailored to the
              needs of over 500 institutions
            </li>
            <li>
              Contributed to the adoption of agile methodologies within internal
              teams, fostering a more scalable approach to software development
              and improving efficiency in project delivery
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Instructor</h3>
          <p className="company">Mathnasium</p>
          <p className="duration">May 2021 - December 2021</p>
          <ul className="responsibilities">
            <li>
              Developed and honed strong communication skills while instructing
              and mentoring over 50 students aged kindergarten to 8th grade in
              foundational mathematical concepts
            </li>
            <li>
              Mentored students in basic coding concepts using various
              programming languages, including Minecraft, Roblox, and Python, to
              foster computational thinking and problem-solving abilities
            </li>
            <li>
              Facilitated interactive learning experiences in robotics using
              Lego Mindstorms, guiding students in hands-on projects to apply
              mathematical and engineering principles
            </li>
            <li>
              Led a camp focusing on mathematics, coding, and robotics,
              providing a dynamic and engaging learning environment for students
            </li>
          </ul>
        </div>

        <a
          href={ResumePDF}
          target="_blank"
          rel="noreferrer"
          className="view-resume-link"
        >
          View Full Resume{" "}
          <span className="arrow">{<FaArrowUp className="arrow" />}</span>
        </a>
      </div>
      {/* <div className='work-experience'>
        <h2>Education</h2>
        <div className='experience-item'>
          <h3>Baylor University</h3>
          <p className='company'>Bachelors of Science in Computer Science</p>
          <p className='duration'>August 2020 - May 2024</p>

        </div>
      </div> */}
    </div>
  );
}

export default AboutMe;
