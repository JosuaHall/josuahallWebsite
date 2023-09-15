import React from "react";
import athletia from "../images/athletia.PNG";
import markushall from "../images/markushall.PNG";
import inventorySite from "../images/InventoryManagementSystem.PNG";
import vid from "../images/athletiavid.mp4";
import ss1 from "../images/Screenshot1.png";
import ss2 from "../images/Screenshot2.png";
import ss3 from "../images/Screenshot3.png";
import ss4 from "../images/Screenshot4.png";
import ss5 from "../images/Screenshot5.png";
import logo from "../images/athletia_app_logo.png";
import AliceCarousel from "react-alice-carousel";
import { Fragment } from "react";

const Projects = () => (
  <div className="section white-font">
    <section className="viewheight">
      <h2 className="heading">My Projects</h2>
      <p className="mb-5">
        ​Welcome to my portfolio section where I showcase my web development
        projects. I am thrilled to present a selection of my work that
        demonstrates my skills and passion for building innovative and
        interactive web/mobile applications. Each project highlights my
        technical expertise and attention to detail, showcasing my ability to
        turn complex problems into simple, user-friendly solutions. I hope you
        enjoy exploring my portfolio and learning more about my approach to
        web/mobile development.
      </p>
      <div className="app-header">
        <img src={logo} alt="" className="athletia-logo" />
        <h3>Social Media App - Built with ReactNative</h3>
      </div>
      <div className="app-store-cards">
        <img src={ss1} alt="" className="app-store-card" />
        <img src={ss2} alt="" className="app-store-card" />
        <img src={ss3} alt="" className="app-store-card" />
        <div className="image-container">
          <img src={ss4} alt="" className="app-store-card" />
          <img src={ss5} alt="" className="app-store-card" />
        </div>
      </div>

      <video controls className="my-5 vid">
        <source src={vid} type="video/mp4" />
      </video>
    </section>

    <h2 className="heading mt-5">Other Projects</h2>
    <div className="projects-container">
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
                Web App: Athletia
              </h4>
            </div>
            <div>
              <p>
                ​Athletia is a the full-stack web application of the ReactNative
                App that utilizes the MERN stack (MongoDB, Express.js, React,
                Node.js) and Redux store management to provide an interactive
                platform for athletic event attendees. It offers a social
                media-style interface and allows users to create their own
                organizations and manage their teams and events. Attendees can
                see who else is attending an event, and the app provides a
                search function for teams and their schedules, as well as
                livestream links. Team administrators can invite and manage
                other administrators, and the app implements secure
                authentication and authorization using JSON web-token and
                password encryption with a hash algorithm.
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
                  window.open("https://github.com/JosuaHall/athletia-client")
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
