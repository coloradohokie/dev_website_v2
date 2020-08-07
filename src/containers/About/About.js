import React from 'react'
import classes from './About.module.scss'

const about = (props) => {
    let attachedClasses = ["main-container"]
    if (props.active) { 
        attachedClasses.push("active-card")
    } else {
        attachedClasses.push("hidden-card")
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <a name="about"></a>
            <div className={classes.aboutContainer}>
                <div className={classes.element1}>
                    <div className="circle"></div>
                    <h1>About Me</h1>
                </div>
                <div className={classes.element2}>
                    <p>I am Michael Newman, a full stack web developer from Denver, Colorado.</p>
                </div>
                <div className={classes.element3}>
                    <ul>
                        <li><span className={classes.badge}>Age: . . . . . </span> 43</li>
                        <li><span className={classes.badge}>Residence: . . . . . </span> USA</li>
                        <li><span className={classes.badge}>Freelance: . . . . . </span> Available</li>
                        <li><span className={classes.badge}>Address: . . . . . </span> Denver, CO</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default about