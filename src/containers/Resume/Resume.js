import React from 'react'
import Experience from './Experience/Experience'
import classes from './Resume.module.scss'

const resume = (props) => {
    let attachedClasses = ["main-container"]
    if (props.active) { 
        attachedClasses.push("active-card")
    } else {
        attachedClasses.push("hidden-card")
    }

    return(
        <div className={attachedClasses.join(' ')}>
            <a name="resume" />
            <div className={classes.gridContainer}>
                <div className={classes.element1}>
                    <div className="circle"></div>
                    <h1>Resume</h1>
                </div>
                <div className={classes.element2}>
                    <h2><i className="fas fa-tools"></i> Experience</h2>
                    <Experience company="Skilled Inc" title="Instructional Coach" dates="2020">
                        Coached students on data structures in JavaScript.
                    </Experience>                    
                    <Experience company="Statline" title="Business Analyst" dates="2016 - 2019">
                        Authored and managed software business requirements for front end and back end; conducted usability studies; modernized the user experience
                    </Experience>
                    <Experience company="Charles Schwab" title="Business Analyst" dates="2014 - 2015">
                        Managed software compliance documentation and customer communication for a new product
                    </Experience>
                    <Experience company="McKesson" title="Senior Business Analyst" dates="2008 - 2014">
                        Authored and managed user stories for a variety of of applications in McKesson's enterprise software - Horizon Clincals.
                    </Experience>
                    <Experience company="OptiFrame, LLC" title="Product Manager" dates="2003 - 2008">
                        Oversaw human factors design and product usability in OptiFrame's residential building construction software.
                    </Experience>
                </div>
                <div className={classes.element3}>
                    <h2> <i className="fas fa-graduation-cap"></i> Education</h2>
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
                    <h2><i className="fas fa-drafting-compass"></i> Tools </h2>
                    <ul>
                        <li>GitHub</li>
                        <li>Firebase</li>
                        <li>Heroku</li>
                        <li>Adobe XD</li>
                        <li>Balsamiq</li>
                        <li>Rally</li>
                        <li>JIRA</li>
                        <li>Trello</li>
                        <li>Team Foundation Server (TFS)</li>
                        <li>VS Code</li>
                    </ul>
                </div>
                <div className={classes.element3}>
                    <h2><i className="fas fa-laptop-code"></i> Coding</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Ruby / Rails</li>
                        <li>SQL / Postgres</li>
                        <li>HTML</li>
                        <li>CSS/SASS</li>
                        <li>ActiveRecord</li>
                        <li>Node.js</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div className={classes.element4}>
                    <h2><i className="far fa-lightbulb"></i> Knowledge</h2>
                    <div className={classes.knowledgeList}>
                        <ul>
                            <li>Agile Development</li>
                            <li>Project Management</li>
                            <li>Prototyping</li>
                            <li>Presentations</li>
                        </ul>
                        <ul>
                            <li>Requirements Elicitation</li>   
                            <li>User Centered Design</li>
                            <li>User Stories</li>
                            <li>Waterfall Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default resume