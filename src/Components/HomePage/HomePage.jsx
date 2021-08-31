import React from 'react'
import { Link } from "react-router-dom";
import AnimatedText from './AnimatedText';
import AnimationHead from './AnimationHead';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div>
        <section className={styles.banner}>
        <div className={styles.banner_title}>
            <h3><AnimatedText /></h3>
            <div>
            <AnimationHead />
            </div>
            <Link to="/about">
              <button class={styles.home_know_more_button}><span>Know More</span><span> </span><span><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
              </button>
            </Link>
        </div>
        <img
          src="https://i.ibb.co/48J9PBn/DSC-3263-2-removebg-preview-removebg-preview.png"
          alt="rushiImg"
          className={styles.banner_img}
        />
      </section>
        </div>
    )
}

export default HomePage
