import React from 'react'
import SocialMedia from './SocialMedia/SocialMedia'
import profile from '../../assets/profile/profile.jpg'
import classes from './TitlePage.module.scss'

const titlePage = () => (
    <div className="main-container">
        <div id={classes.background}>
            <img id={classes.profilePhoto} src={profile} alt="profile" />
            <div className={classes.bottomEdge}>
                <div id={classes.triangleBottomleft}></div>
                <div id={classes.triangleBottomright}></div>
            </div>
        </div>
        <p id={classes.name}>Michael Newman</p>
        <p id={classes.title}>Full Stack Web Developer</p>
        <ul className={classes.socialMedia}>
            <li><SocialMedia name="GitHub" icon="fab fa-github" url="https://www.github.com" /></li>
            <li><SocialMedia name="Linked In" icon="fab fa-linkedin" url="https://www.linkedin.com" /></li>
            <li><SocialMedia name="Blog" icon="fas fa-blog" url="https://www.linkedin.com" /></li>
        </ul>
        <div className={classes.buttons}>
            <button>Resume <i className="fas fa-download"></i></button>
            <button>Contact <i className="fas fa-at"></i></button>
        </div>
    </div>
)

export default titlePage