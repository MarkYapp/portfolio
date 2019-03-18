import React from 'react';

import './main.css';

export default function Main() {
  return (
    <div>
      <main id="main" className="main">
        <section id="profile" className="profile-section">
          <div className="profile-photo-box">
            <img className="profile-photo" src="../images/profile-photo.png" alt="Mark Yapp" />
          </div>
          <div className="bio-box">
            <h4 id="bio">
              Hi, my name is Mark Yapp. I’m a full stack web developer with a passion for clean code
              and engaging UI’s.
            </h4>
            <p>
              I recently completed the Thinkful Full Stack web development program. I’ve built
              several full stack projects implementing continuous integration and version control. I
              consider myself a lifelong learner, and one of the things that drew me to development
              was the opportunity to engage in continuous learning within an ever-growing field. My
              technical background gives me the ability to learn technologies very quickly as well
              as an acute attention to detail. I’m a natural problem solver, and I love discovering
              and learning new tools that promote simpler, more efficient, and elegant code
              solutions.
              <br />
              When I’m not writing code you can find me fixing, riding, or racing one of my
              bicycles, doing yoga, or camping. Or all of the above in one weekend. I enjoy
              organizing and craft beer, and I love being outdoors, cooking, and reading.
            </p>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="projects-header">
            <h2>Projects</h2>
          </div>
          <div className="project-wrapper">
            <div className="project-info">
              <h3>Deltio</h3>
              <p>Create, collect, and share beautiful digital postcards.</p>
              <p>
                Tech: React, Redux, Node.js, MongoDB, Mongoose, Passport, JWT, Travis CI, Heroku,
                Enzyme, JavaScript, HTML, and CSS
              </p>
              <a
                href="https://powerful-brook-49143.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live app
              </a>
              <br />
              <a
                href="https://github.com/MarkYapp/deltio-client"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub Repo
              </a>
            </div>
            <div className="project-screenshot">
              <a
                href="https://powerful-brook-49143.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="../images/deltio.png" alt="deltio" />
              </a>
            </div>
          </div>
          <div className="project-wrapper">
            <div className="project-info">
              <h3>Yappr</h3>
              <p>A simple, easy to use blogging app with user authentication.</p>
              <p>
                Tech: Node.js, MongoDB, Mongoose, Passport, JWT, Travis CI, Heroku, Mocha,
                JavaScript, jQuery, HTML, and CSS
              </p>
              <a
                href="https://aqueous-basin-44559.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live app
              </a>
              <br />
              <a href="https://github.com/MarkYapp/yappr" target="_blank" rel="noreferrer noopener">
                GitHub Repo
              </a>
            </div>
            <div className="project-screenshot">
              <a
                href="https://aqueous-basin-44559.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="../images/yappr.png" alt="yappr" />
              </a>
            </div>
          </div>
          <div className="project-wrapper">
            <div className="project-info">
              <h3>International Space Station Locator</h3>
              <p>Observe the ISS move in real time across an interactive world map.</p>
              <p>Tech: JavaScript, jQuery, HTML, and CSS</p>
              <a
                href="https://markyapp.github.io/ISS-Locator/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live app
              </a>
              <br />
              <a
                href="https://github.com/MarkYapp/ISS-Locator"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub Repo
              </a>
            </div>
            <div className="project-screenshot">
              <a
                href="https://markyapp.github.io/ISS-Locator/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="../images/iss-locator.png" alt="ISS Locator" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <h2>Mark Yapp</h2>
        <div className="footer-links">
          <a href="mailto:markwyapp@gmail.com">
            <i className="fas fa-2x fa-envelope" />
          </a>
          <a
            href="https://www.linkedin.com/in/mark-yapp/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-2x fa-linkedin" />
          </a>
          <a href="https://github.com/MarkYapp" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-2x fa-github" />
          </a>
        </div>
      </footer>
    </div>
  );
}
