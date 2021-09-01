import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";



const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  display:flex;
  background-color: #000000;

  
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      color:white;
      border-radius: 8px;

      transition: 0.3s ease background-color;
      &:hover {
        /* background-color: navy; */
        color:rgb(209, 181, 97);
      }
    }
    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 1.5rem;
      color: rgb(209, 181, 97);
      outline: none;
      text-decoration:none;
    
      &:hover {
        color:chartreuse;
      }
    }
    .active {
      text-decoration:underline;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 50px;
    font-size:30px;
    cursor: pointer;
    display: none;
    color:rgb(209, 181, 97);
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  .logoR{
    display:flex;
    width:150px;
    height:100%;
    margin-left:20px;
  }
  @media only screen and (max-width: 958px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .logoR{
      display:none;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: black;
      width: 100%;
      padding:30px 0;
      max-width: 100%;
      border-radius: 12px;
      position: absolute;
      background-color:black;
      top: 1rem;
      .closeNavIcon {
        display: block;
        width: 3rem;
        font-size:30px;
        color:rgb(209, 181, 97);
        padding:5px 2px;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        color:navy;
        margin-bottom: 1rem;
      }
      a {
      }
    }
  }
`;

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <img src="https://i.ibb.co/hVtPNsV/688a840532bb5d44a8c33fa381797433-removebg-preview.png" className="logoR" alt="688a840532bb5d44a8c33fa381797433-removebg-preview" border="0"/>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
      
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
        <li>
           <a href="https://drive.google.com/file/d/10NaMwDXf2K1T5wcMqr4FeDVj5mI8oHVG/view?usp=sharing" target="_blank">Resume <i class="fas fa-download"></i></a>
          
        </li>
      </ul>
      
    </NavStyles>
  );
}
