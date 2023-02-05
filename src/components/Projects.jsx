import React from "react";
import athletia from "../images/athletia.PNG";
import markushall from "../images/markushall.PNG";
import inventorySite from "../images/InventoryManagementSystem.PNG";

const Projects = () => (
  <div className="section black-font">
    <h2 className="heading">Projects</h2>
    <div className="projects-container">
      <p>
        ​Welcome to my portfolio section where I showcase my web development
        projects. I am thrilled to present a selection of my work that
        demonstrates my skills and passion for building innovative and
        interactive web applications. Each project highlights my technical
        expertise and attention to detail, showcasing my ability to turn complex
        problems into simple, user-friendly solutions. I hope you enjoy
        exploring my portfolio and learning more about my approach to web
        development.
      </p>
      <div className="projects-card-area white-font">
        <div className="project-card">
          <div className="project-card-content">
            <div>
              <img src={inventorySite} alt="" />
            </div>
            <div>
              <h4 className="text-center underline-project-card">
                Inventory System
              </h4>
            </div>
            <div>
              <p>
                I created a custom Inventory Management System for C&O Windows,
                a local windows and doors manufacturer based in Colorado, using
                Python Flask, Jinja2, and MySQL. The system streamlines
                inventory management and tracks product movement, providing
                real-time data on stock levels, orders, and reporting. The
                interface is intuitive and integrates seamlessly with existing
                systems. With robust reporting and analysis tools, the system
                helps increase efficiency and accuracy in inventory management.
                I am proud to have made a positive impact for this
                Colorado-based company.
              </p>
            </div>
          </div>
          <div>
            <span>
              <button
                style={{
                  backgroundColor: "#bd2c00",
                  border: "solid #bd2c00 1px",
                }}
                className="btn btn-primary mx-2"
                onClick={() =>
                  window.open("https://github.com/JosuaHall/inventorySystem")
                }
              >
                Github
              </button>
            </span>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <div>
              <img src={athletia} alt="" />
            </div>
            <div>
              <h4 className="text-center underline-project-card">
                Social Media App: Athletia
              </h4>
            </div>
            <div>
              <p>
                ​Athletia is a full-stack web application that utilizes the MERN
                stack (MongoDB, Express.js, React, Node.js) and Redux store
                management to provide an interactive platform for athletic event
                attendees. It offers a social media-style interface and allows
                users to create their own organizations and manage their teams
                and events. Attendees can see who else is attending an event,
                and the app provides a search function for teams and their
                schedules, as well as livestream links. Team administrators can
                invite and manage other administrators, and the app implements
                secure authentication and authorization using JSON web-token and
                password encryption with a hash algorithm.
              </p>
              <h3 className="p-0 m-0">Test Account</h3>
              <h4>
                email: test@email.com
                <br />
                password: 1234
              </h4>
            </div>
          </div>
          <div>
            <span>
              <button
                style={{
                  backgroundColor: "rgb(67 81 115)",
                  border: "solid rgb(67 81 115) 1px",
                }}
                className="btn btn-primary mx-2"
                onClick={() => window.open("https://athletia.netlify.app")}
              >
                View App
              </button>
              <button
                style={{
                  backgroundColor: "#bd2c00",
                  border: "solid #bd2c00 1px",
                }}
                className="btn btn-primary mx-2"
                onClick={() =>
                  window.open("https://github.com/JosuaHall/athletia-client")
                }
              >
                Github
              </button>
            </span>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <div>
              <img src={markushall} alt="" />
            </div>
            <div>
              <h4 className="text-center underline-project-card">
                Website for my dad
              </h4>
            </div>
            <div>
              <p>
                This is a personal website project built using React.js,
                providing an online presence for my dad to showcase his past
                experiences with musical and band projects and announce any
                upcoming events. The interface is designed to be clean and
                user-friendly, making it easy for visitors to navigate and
                access information.
              </p>
            </div>
          </div>
          <div>
            <span>
              <button
                style={{
                  backgroundColor: "rgb(67 81 115)",
                  border: "solid rgb(67 81 115) 1px",
                }}
                className="btn btn-primary mx-2"
                onClick={() => window.open("https://markushall.de")}
              >
                View App
              </button>
              <button
                style={{
                  backgroundColor: "#bd2c00",
                  border: "solid #bd2c00 1px",
                }}
                className="btn btn-primary mx-2"
                onClick={() =>
                  window.open("https://github.com/JosuaHall/markushall")
                }
              >
                Github
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
