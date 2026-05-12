import React from "react";
import "./styles.css";
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
          <img
            src="assets/images/IMG_8543.jpg"
            alt="Self portrait of Ryan Huntington"
          />
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
          <p className="duration">May 2023 - May 2026</p>
          <ul className="responsibilities">
            <section>
              <h4>Engineering Impact</h4>
              <ul>
                <li>
                  <b>Sole owner </b> and <b>technical lead</b> for a
                  next-generation SPA, driving architecture, development, and
                  deployment in a lean, post-restructuring environment
                </li>
                <li>
                  Delivered <b>full-stack solutions</b> supporting{" "}
                  <b>ACA compliance</b>, improving reporting accuracy for{" "}
                  <b>37,500+ clients</b> and reducing audit risk
                </li>
                <li>
                  Designed and implemented a scalable <b>React</b> application
                  using strict, reliability-focused patterns to eliminate
                  recurring issues from legacy systems
                </li>
                <li>
                  Built and maintained <b>CI/CD pipelines</b> using GitHub
                  Actions, reducing development cycle time by <b>25%</b> and
                  increasing release reliability
                </li>
                <li>
                  <b>Automated</b> complex internal workflows, between client
                  and internal systems, reducing manual processing and improving
                  operational efficiency
                </li>
                <li>
                  Developed an internal{" "}
                  <b>graph-generation and reporting tool</b> powered by custom{" "}
                  <b>SQL queries</b> across a{" "}
                  <b>10M+ row production database</b>, enabling faster insights
                  and data-driven decision-making.
                </li>
              </ul>
            </section>

            <section>
              <h4>System Modernization</h4>
              <ul>
                <li>
                  Led modernization of legacy payroll systems by migrating core
                  modules to <b>React</b>, improving long-term maintainability
                  and establishing coding best practices.
                </li>
                <li>
                  Refactored high-impact legacy modules to mitigate{" "}
                  <b>technical debt</b>, strengthen system resilience, and
                  enhance long-term scalability.
                </li>
                <li>
                  Championed the transition from a <b>monolithic repository</b>{" "}
                  to modular services, adopting new <b>API languages</b> and
                  guiding teammates through modern workflows.
                </li>
                <li>
                  Define engineering standards, including{" "}
                  <b>comprehensive test coverage</b> and more reliable system
                  design patterns
                </li>
              </ul>
            </section>

            <section>
              <h4>Leadership & Mentorship</h4>
              <ul>
                <li>
                  Acted as <b>primary technical resource</b> and{" "}
                  <b>subject-matter expert</b> for internal systems and
                  frameworks
                </li>
                <li>
                  Took on <b>product</b> and <b>QA responsibilities</b>,
                  defining requirements and ensuring <b>production quality</b>{" "}
                  after team restructuring
                </li>
                <li>
                  <b>Mentored and onboarded</b> new developers, serving as a key
                  point of contact for technical guidance
                </li>
                <li>
                  <b>Drove technical decision-making</b> independently,
                  balancing immediate business needs with long-term scalability
                </li>
              </ul>
            </section>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Associate Software Engineer</h3>
          <p className="company">The CBORD Group</p>
          <p className="duration">April 2022 - May 2023</p>
          <ul className="responsibilities">
            <section>
              <ul>
                <li>
                  Resolved an average of <b>10 known issues per week</b> within
                  the main software, demonstrating strong{" "}
                  <b>troubleshooting skills</b> and contributing to{" "}
                  <b>enhanced software reliability</b>.
                </li>
                <li>
                  Collaborated with <b>senior employees</b> to design, develop,
                  and implement both <b>frontend and backend features</b>,
                  ensuring the delivery of{" "}
                  <b>functional and user-friendly software</b> tailored to the
                  needs of over <b>500 institutions</b>.
                </li>
                <li>
                  Contributed to the adoption of <b>agile methodologies</b>{" "}
                  within internal teams, fostering a more{" "}
                  <b>scalable approach</b> to software development and improving{" "}
                  <b>efficiency in project delivery</b>.
                </li>
              </ul>
            </section>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Instructor</h3>
          <p className="company">Mathnasium</p>
          <p className="duration">May 2021 - December 2021</p>
          <ul className="responsibilities">
            <section>
              <ul>
                <li>
                  Developed and honed strong <b>communication skills</b> while
                  instructing and mentoring over <b>50 students</b> aged
                  kindergarten to 8th grade in foundational{" "}
                  <b>mathematical concepts</b>.
                </li>
                <li>
                  Mentored students in <b>basic coding concepts</b> using
                  various programming languages, including{" "}
                  <b>Minecraft, Roblox, and Python</b>, to foster{" "}
                  <b>computational thinking</b>
                  and <b>problem-solving abilities</b>.
                </li>
                <li>
                  Facilitated interactive learning experiences in{" "}
                  <b>robotics</b> using <b>Lego Mindstorms</b>, guiding students
                  in hands-on projects to apply{" "}
                  <b>mathematical and engineering principles</b>.
                </li>
                <li>
                  Led a camp focusing on{" "}
                  <b>mathematics, coding, and robotics</b>, providing a dynamic
                  and
                  <b>engaging learning environment</b> for students.
                </li>
              </ul>
            </section>
          </ul>
        </div>

        <a
          href="/assets/documents/Resume_HuntingtonApril2026.pdf"
          target="_blank"
          rel="noreferrer"
          className="view-resume-link"
        >
          View Full Resume{" "}
          <span className="arrow">{<FaArrowUp className="arrow" />}</span>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
