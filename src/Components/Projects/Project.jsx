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
                Skyscanner allows you to find Hotels to stay directly from
                individuals in number of cities.
              </p>
              <h5 className={styled.color}>
                {" "}
                React || Redux || JavaScript || Material UI
              </h5>
              <div className={styled.downDiv}>
                <a
                  className={styled.size}
                  href="https://github.com/Rushikesh2503/skyscanner"
                >
                  {" "}
                  <i class="fab fa-github"></i>
                </a>
                {/* <a
                  className={styled.size}
                  href="https:/"
                >
                 <i class="fas fa-external-link-alt"></i>
                </a> */}
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
                Start Engine is a website owned and operated by StartEngine Crowdfunding.It allows you to Invest.
              </p>
              <h5 className={styled.color}>
                React || JavaScript || CSS
              </h5>
              <div className={styled.downDiv}>
                <a
                  className={styled.size}
                  href="https://github.com/Rushikesh2503/StartEngine"
                >
                  <i class="fab fa-github"></i>
                </a>
                {/* <a
                  className={styled.size}
                  href="https://"
                >
                 <i class="fas fa-external-link-alt"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styled.gridss}>
          <div className={styled.leftDiv}>
            <img
              className={styled.img}
              src="https://user-images.githubusercontent.com/82999542/122533925-ac781500-d03f-11eb-94a6-db56adf13d0a.png"
              alt="logo"
            />
          </div>
          <div className={styled.rightDiv}>
            <div className={styled.rightDivSub}>
              <h2 className={styled.color}>Zoomcar Website</h2>
              <p>
                Self drive cars from Zoomcar have given customers more control, privacy, and freedom. Zoomcar allows you to book a car.
              </p>
              <h5 className={styled.color}>
                CSS || HTML || JavaScript 
              </h5>
              <div className={styled.downDiv}>
                <a
                  className={styled.size}
                  href="https://github.com/Rushikesh2503/zoomCarProj"
                >
                  <i class="fab fa-github"></i>
                </a>
                {/* <a
                  className={styled.size}
                  href="https:/"
                >
                 <i class="fas fa-external-link-alt"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styled.gridss}>
          <div className={styled.leftDiv}>
            <img
              className={styled.img}
              src="https://user-images.githubusercontent.com/82999542/131899360-4bf82f1c-74a3-48c5-bd0a-0ce19a4325cc.png"
              alt="logo"
            />
          </div>
          <div className={styled.rightDiv}>
            <div className={styled.rightDivSub}>
              <h2 className={styled.color}>Motivational Quotes</h2>
              <p>
                This page generates random quotes everytime on visit with different background Images.
              </p>
              <h5 className={styled.color}>
                {" "}
                HTML || JavaScript || CSS
              </h5>
              <div className={styled.downDiv}>
                <a
                  className={styled.size}
                  href="https://github.com/Rushikesh2503/random-quotes"
                >
                  {" "}
                  <i class="fab fa-github"></i>
                </a>
                {/* <a
                  className={styled.size}
                  href="https://"
                >
                 <i class="fas fa-external-link-alt"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
