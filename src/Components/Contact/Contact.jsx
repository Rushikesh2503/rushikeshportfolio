import React from 'react';
import styles from "./Contact.module.css";
import Navbar from '../HomePage/Navbar/Navbar';

const Contact = () => {
    return (
        <section className={styles.bodyContMain}>
            <Navbar />
            <div className={styles.bodyCont}>
            <ul>
                <li className={styles.bodyli1}>
                    <a href="https://github.com/Rushikesh2503"  target="_blank" >
                        <span> <i class="fab fa-github fa" aria-hidden="true"></i> Github</span>
                    </a>
                </li>
                <li className={styles.bodyli2}>
                    <a href="mailto:rushikeshbambadkar7@gmail.com" target="_blank">
                        <span>
                        <i class="fas fa-envelope fa" aria-hidden="true"></i> Gmail</span>
                    </a>
                </li>
                <li className={styles.bodyli3}>
                    <a href="https://www.linkedin.com/in/rushikesh-bambadkar-1a74031a3" target="_blank">
                        
                        <span><i class="fab fa-linkedin fa" aria-hidden="true"></i> LinkedIn</span>
                    </a>
                </li>
                <li className={styles.bodyli4}>
                    <a href="tel:+918623008001">
                        
                        <span><i class="fas fa-mobile fa" aria-hidden="true"></i> Call</span>
                    </a>
                </li>
            </ul>
            </div>
            </section>
    )
}

export default Contact
