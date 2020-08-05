import React from 'react';
import classes from './MenuItem.module.scss'

const menuItem = (props) => (
    <div className={classes.menuItem}>
        <div className={classes.menuIcon} >
            <i className={props.icon}></i>
        </div>
        <p>{props.name}</p>
    </div>
)

export default menuItem