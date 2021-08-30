import React from 'react'
import { Link } from "react-router-dom";
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div>
        <section className={styles.banner}>
        <div className={styles.banner_title}>
          <h3>hello!</h3>
          <h1>I'm Rushikesh Bambadkar</h1>
          <p>Full Stack web developer</p>
          <Link to="/contact" className="btn btn-orange">
            hire me
          </Link>
          <Link to="/portfolio" className="btn btn-gray">
            Portfolio
          </Link>
        </div>
        <img
          src=""
          alt="rushiImg"
          className={styles.banner_img}
        />
      </section>
        </div>
    )
}

export default HomePage
