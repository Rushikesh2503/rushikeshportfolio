import React from 'react';
import Navbar from '../HomePage/Navbar/Navbar';
import Achievemnts from './Achievements';
import styles from './Skills.module.css';
import TimeLine from './TimeLine';

const Skills = () => {
    return (
        <>
        <Navbar/>
		<div className={styles.Maincontainer}>
			<h1 className={styles.heading}>About Me</h1>
			<div className={styles.container1}>
					<div>
						<h3>"Life always begins with one step outside of your comfort zone."</h3>
					</div>
					<div>
						<p>Energetic, highly motivated and passionate Developer.Hardworking Individual with a great learning curve.Loves to solve real life problems .Looking for an opportunity to enhance knowledge and skills.</p>
					</div>
			</div>
			<h1 className={styles.heading}>
				Skills & Interests
			</h1>
			<div className={styles.container}>
				<div className={styles.logoWrapper}>
					<i className='devicon-html5-plain colored' />
					<span>HTML</span>
				</div>
				<div className={styles.logoWrapper}>
					<i className='devicon-css3-plain colored' />
					<span>CSS</span>
				</div>
				<div className={styles.logoWrapper}>
					<i className='devicon-javascript-plain colored'></i>
					<span>Javascript</span>
                </div>
                <div className={styles.logoWrapper}>
					<i class="devicon-bootstrap-plain colored"></i>
					<span>Bootstrap</span>
				</div>
				<div className={styles.logoWrapper}>
					<i className='devicon-react-original colored' />
					<span>React</span>
				</div>
				<div className={styles.logoWrapper}>
					<i class="devicon-materialui-plain colored"></i>
					<span>Material UI</span>
				</div>
				<div className={styles.logoWrapper}>
					<i class="devicon-git-plain colored"></i>
					<span>Git</span>
				</div>
				<div className={styles.logoWrapper}>
					<i class="devicon-codepen-plain"></i>
					<span>CodePen</span>
				</div>
				<div className={styles.logoWrapper}>
					<i
						style={{ color: '#7248B6' }}
						className='devicon-redux-original'
					/>
					<span>Redux</span>
				</div>
				<div className={styles.logoWrapper}>
					<i
						style={{ color: '#509941' }}
						className='devicon-nodejs-plain'
					/>
					<span>Node</span>
				</div>
				<div className={styles.logoWrapper}>
					<i className='devicon-express-original' />
					<span>Express</span>
				</div>
				<div className={styles.logoWrapper}>
					<i className='devicon-mongodb-plain colored' />
					<span>MongoDB</span>
				</div>
				</div>
				<h1 className={styles.heading}>Education</h1>
				<div className={styles.container1}>
					<TimeLine />
				</div>
				<h1 className={styles.heading}>Achievements & Volunteer</h1>
				<div className={styles.container1}>
					<Achievemnts />
				</div>
				<h1 className={styles.heading}>Interest</h1>
				<div className={styles.container1}>
					<div className={styles.inter}>
						<h2>
						<i class="fas fa-microphone-alt"></i>	Hosting an Events
						</h2>
						<h2>
						<i class="fas fa-film"></i>	Acting
						</h2>
					</div>
				</div>

            </div>
            </>
	);
};

export default Skills;