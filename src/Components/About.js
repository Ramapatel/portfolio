import React from "react";

const About = () => {
  return (
    <section class="about" id="about">
      <h1 class="heading">
        <span>about</span> me
      </h1>

      <div class="row">
        <div class="info">
          <h3>
            <span> Name : </span> AMISHA PATEL
          </h3>
          <h3>
            <span> Age : </span> 19
          </h3>
          <h3>
            <span> Skills : </span>
            <ul>
              <li>
                <span>TECHNICAL SKILLS</span>R, Python, HTML, CSS, Mern stack,
                AI, ML, JAVA, Figma
              </li>
              <li>
                <span>PERSONAL SKILLS</span>Sketching, Photography, Active
                listener,Collaborative team player, Problem solver, Adaptive and
                flexible
              </li>
            </ul>
          </h3>
          <h3>
            <span> Language : </span>
            <ul>
              <li>HINDI: Fluent</li>
              <li>ENGLISH: Professional level proficiency</li>
              <li>JAPANESE: conversational level</li>
            </ul>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
