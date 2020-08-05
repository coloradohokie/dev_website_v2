import React from 'react'
import SocialMedia from './SocialMedia/SocialMedia'
import profile from '../../assets/profile/profile.jpg'

const about = () => (
    <div className="main-container">
        <div id="background">
            <img id="profile-photo" src={profile} alt="profile" />
            <div className="bottom-edge">
                <div id="triangle-bottomleft"></div>
                <div id="triangle-bottomright"></div>
            </div>
        </div>
        <p id="name">Michael Newman</p>
        <p id="title">Full Stack Web Developer</p>
        <ul className="social-media">
            <li><SocialMedia name="GitHub" icon="fab fa-github" url="https://www.github.com" /></li>
            <li><SocialMedia name="Linked In" icon="fab fa-linkedin" url="https://www.linkedin.com" /></li>
            <li><SocialMedia name="Blog" icon="fas fa-blog" url="https://www.linkedin.com" /></li>
        </ul>
        <div className="buttons">
            <button>Resume <i className="fas fa-download"></i></button>
            <button>Contact <i className="fas fa-at"></i></button>
        </div>
    </div>
)

export default about