import React from 'react'
import Experience from './Experience/Experience'
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
                <Experience company="Statline" title="Business Analyst" dates="2016 - 2019">
                    Did Business Analyst stuff.
                </Experience>
                <Experience company="Charles Schwab" title="Business Analyst" dates="2014 - 2015">
                    Did business analyst stuff
                </Experience>
                <Experience company="McKesson" title="Senior Business Analyst" dates="2008 - 2014">
                    Did business analyst stuff
                </Experience>
                <Experience company="Optiframe, LLC" title="Product Manager" dates="2003 - 2008">
                    Did business analyst stuff
                </Experience>
            </div>
            <div className={classes.element3}>
                <h2> <i class="fas fa-graduation-cap"></i> Education</h2>
                <div>
                    <Experience title="Virginia Tech">
                        BS Civil Engineering
                    </Experience>
                    <Experience title="Flatiron School">
                        Software Development Bootcamp. Completed April, 2020
                    </Experience>
                    <Experience title="Self Study">
                        Online Courses on React, Javascript, CSS/SCSS, Android Development, and Git.
                    </Experience>
                    <Experience title="PMP Certification">
                        August, 2019
                    </Experience>
                </div>
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