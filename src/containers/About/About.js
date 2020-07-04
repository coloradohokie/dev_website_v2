import React from 'react'
import classes from './About.module.scss'

const about = () => (
    <div className="main-container">
        <div className={classes.aboutContainer}>
            <div className={classes.element1}>
                <p>About Me</p>
            </div>
            <div className={classes.element2}>
                <p>I am Michael Newman, a full stack web developer from Denver, Colorado.</p>
            </div>
            <div className={classes.element3}>
                <ul>
                    <li>Age: 43</li>
                    <li>Residence: USA</li>
                    <li>Freelance: Available</li>
                    <li>Address: Denver, CO</li>
                </ul>
            </div>
        </div>

    </div>
)

export default about