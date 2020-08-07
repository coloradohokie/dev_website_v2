import React from 'react';
import classes from './MenuItem.module.scss'

const menuItem = (props) => {

    let assignedClasses=[classes.menuItem]
    if (props.active) {
        assignedClasses.push(classes.activeIcon)
    } else {
        assignedClasses.push(classes.inactiveIcon)
    }

    return (
        <a style={{textDecoration: "none"}} href={"#" + props.name.toLowerCase()}>
            <div className={assignedClasses.join(' ')} onClick={props.clicked}>
                    <div className={classes.menuIcon} >
                        <i className={props.icon}></i>
                    </div>
                    <p>{props.name}</p>
            </div>
        </a>
    )
}
export default menuItem