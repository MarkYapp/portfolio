import React from 'react';

import './main.css';

export default function Main() {
  return (
    <main className="main">
      <section className="sidebar">
        <img className="profile-photo" src="../images/profile-photo.png" alt="Mark Yapp" />

        <h4>
          Hi, my name is Mark Yapp. I’m a full stack web developer with a passion for clean code and
          engaging UI’s.
        </h4>
        <p>
          I recently completed the Thinkful Full Stack web development program. I’ve built several
          full stack projects implementing continuous integration and version control. I consider
          myself a lifelong learner, and one of the things that drew me to development was the
          opportunity to engage in continuous learning within an ever-growing field. My technical
          background gives me the ability to learn technologies very quickly as well as an acute
          attention to detail. I’m a natural problem solver, and I love discovering and learning new
          tools that promote simpler, more efficient, and elegant code solutions.
          <br />
          When I’m not writing code you can find me fixing, riding, or racing one of my bicycles,
          doing yoga, or camping. Or all of the above in one weekend. I enjoy organizing and craft
          beer, and I love being outdoors, cooking, and reading.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <h3>Deltio</h3>
        <div className="project-screenshot">
          <img src="../images/deltio.png" alt="deltio" />
        </div>
        <h3>Yappr</h3>
        <div className="project-screenshot">
          <img src="../images/yappr.png" alt="yappr" />
        </div>
        <h3>International Space Station Locator</h3>
        <div className="project-screenshot">
          <img src="../images/iss-locator.png" alt="ISS Locator" />
        </div>
      </section>
    </main>
  );
}
