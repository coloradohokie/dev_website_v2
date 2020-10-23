import React from 'react'
import classes from './About.module.scss'
import AboutText from './AboutMeText.js'
import StatLabels from '../UI/StatLabels/StatLabels'

const about = (props) => {
    let attachedClasses = ["main-container"]
    if (props.active) { 
        attachedClasses.push("active-card")
    } else {
        attachedClasses.push("hidden-card")
    }

    const stats = [
        ["Location", "Denver, CO"],
        ["IT Experience", "18 Years"],
        ["Released Projects", "4"]
    ]

    return (
        <div className={attachedClasses.join(' ')}>
            <a name="about"></a>
            <div className={classes.aboutContainer}>
                <div className={classes.element1}>
                    <div className="circle"></div>
                    <h1>About Me</h1>
                </div>
                <div className={classes.element2}>
                    {AboutText.map(paragraph => (<p>{paragraph}</p>))}
                </div>
                <div className={classes.element3}>
                    <StatLabels stats={stats} />
                </div>
            </div>
        </div>
    )
}

export default about