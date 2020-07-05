import React from 'react'
import classes from './Resume.module.scss'

const resume = () => (
    <div className="main-container">
        <div className={classes.gridContainer}>
            <div className={classes.element1}>
                <div className="circle"></div>
                <h1>Resume</h1>
            </div>
            <div className={classes.element2}>
                <h2><i class="fas fa-tools"></i> Experience</h2>
                <div className={classes.badge}>2002 - 2004</div>
                <h3>Statline</h3>
                <h4>Business Analyst</h4>
                <p>Did Business Analyst stuff.</p>
            </div>
            <div className={classes.element3}>
                <h2> <i class="fas fa-graduation-cap"></i> Education</h2>
            </div>
        </div>

        <div className={classes.gridContainer}>
            <div className={classes.element1}>
                <div className="circle"></div>
                <h1>My Skills</h1>
            </div>
            <div className={classes.element2}>
                <h2><i class="fas fa-drafting-compass"></i> Design</h2>
            </div>
            <div className={classes.element3}>
                <h2><i class="fas fa-language"></i> Languages</h2>
            </div>
            <div className={classes.element2}>
                <h2><i class="fas fa-laptop-code"></i> Coding</h2>
            </div>
            <div className={classes.element3}>
                <h2><i class="far fa-lightbulb"></i> Knowledge</h2>
            </div>
        </div>
    </div>
)

export default resume