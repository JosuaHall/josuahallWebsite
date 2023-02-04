import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Background from "./components/Background";
import Impressum from "./components/Impressum";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialMedia from "./components/SocialMedia";
import Education from "./components/Education";

function App() {
  return (
    <div className="outer-container">
      <div className="full-width-background-black">
        <div className="content-container">
          {/* Navbar */}
          <section id="header">
            <Navigation />
            {/* Header section */}

            <Header />
          </section>
        </div>
      </div>

      <div className="full-width-background-white">
        <div className="content-container">
          {/* About me section */}
          <section id="about">
            <About />
          </section>
        </div>
      </div>

      {/* Background section */}

      <div className="full-width-background-black">
        <div className="content-container">
          <section id="background">
            <Background />
          </section>
          <section id="education">
            <Education />
          </section>
        </div>
      </div>

      <div className="full-width-background-white">
        <div className="content-container">
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </div>
      </div>

      <div className="full-width-background-black">
        <div className="content-container">
          <section id="socialmedia">
            <SocialMedia />
          </section>
          <section id="impressum">
            <Impressum />
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer>{/* Footer content */}</footer>
    </div>
  );
}

export default App;
