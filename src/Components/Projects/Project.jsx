import React from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import styled from "./Project.module.css";

const Project = () => {
  return (
    <div className={styled.Maincontainer}>
      <Navbar />
      <div id="project">
        <div className={styled.gridss}>
          <div className={styled.leftDiv}>
            <img
              className={styled.img}
              src="https://i.ibb.co/3fQhf7m/skyscaneer-Pic.png"
              alt="logo"
            />
          </div>
          <div className={styled.rightDiv}>
            <div className={styled.rightDivSub}>
              <h2 className={styled.color}>Skyscanner Website</h2>
              <p>
                Scyscanner allows you to find Hotels to stay directly from
                individuals in number of cities.
              </p>
              <h5 className={styled.color}>
                {" "}
                React || Redux || JavaScript || Material UI
              </h5>
              <div className={styled.downDiv}>
                <a
                  className={styled.size}
                  href="https://github.com"
                >
                  {" "}
                  <i class="fab fa-github"></i>
                </a>
                <a
                  className={styled.size}
                  href="https://clone-airbnb-green.vercel.app/"
                >
                 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styled.gridss}>
          <div className={styled.leftDiv}>
            <img
              className={styled.img}
              src="https://i.ibb.co/f0XH421/startengine-Pic.png"
              alt="logo"
            />
          </div>
          <div className={styled.rightDiv}>
            <div className={styled.rightDivSub}>
              <h2 className={styled.color}>Start Engine Website</h2>
              <p>
                Start Engine is a website owned and operated by StartEngine Crowdfunding, Inc.It allows you to Invest.
              </p>
              <h5 className={styled.color}>
                {" "}
                React || JavaScript || CSS
              </h5>
              <div className={styled.downDiv}>
                <a
                  className={styled.size}
                  href="https://github.com"
                >
                  {" "}
                  <i class="fab fa-github"></i>
                </a>
                <a
                  className={styled.size}
                  href="https://clone-airbnb-green.vercel.app/"
                >
                 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styled.gridss}>
          <div className={styled.leftDiv}>
            <img
              className={styled.img}
              src="https://www.ehospitalitytimes.com/wp-content/uploads/airbnb.jpg"
              alt="logo"
            />
          </div>
          <div className={styled.rightDiv}>
            <div className={styled.rightDivSub}>
              <h2 className={styled.color}>Skyscanner Website</h2>
              <p>
                Scyscanner allows you to find Hotels to stay directly from
                individuals in number of cities.
              </p>
              <h5 className={styled.color}>
                {" "}
                React || Redux || JavaScript || Material UI
              </h5>
              <div className={styled.downDiv}>
                <a
                  className={styled.size}
                  href="https://github.com"
                >
                  {" "}
                  <i class="fab fa-github"></i>
                </a>
                <a
                  className={styled.size}
                  href="https://clone-airbnb-green.vercel.app/"
                >
                 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styled.gridss}>
          <div className={styled.leftDiv}>
            <img
              className={styled.img}
              src="https://www.ehospitalitytimes.com/wp-content/uploads/airbnb.jpg"
              alt="logo"
            />
          </div>
          <div className={styled.rightDiv}>
            <div className={styled.rightDivSub}>
              <h2 className={styled.color}>Skyscanner Website</h2>
              <p>
                Scyscanner allows you to find Hotels to stay directly from
                individuals in number of cities.
              </p>
              <h5 className={styled.color}>
                {" "}
                React || Redux || JavaScript || Material UI
              </h5>
              <div className={styled.downDiv}>
                <a
                  className={styled.size}
                  href="https://github.com"
                >
                  {" "}
                  <i class="fab fa-github"></i>
                </a>
                <a
                  className={styled.size}
                  href="https://clone-airbnb-green.vercel.app/"
                >
                 <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
