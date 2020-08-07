import React, { Component } from 'react';
import MenuItem from './MenuItem/MenuItem'
import classes from './Menu.module.scss'

const menu = (props) => {
    function showMenuItems () {
        let menuItems = props.menu.map(el => {
                if (el.name === props.activeIcon) {
                    return (
                        <li key={el.name}>
                            <MenuItem
                                name={el.name} 
                                icon={el.icon} 
                                active
                                clicked={() => props.clicked(el.name)}
                                />
                        </li>                
                    )
                }
            
    
                return (
                    <li key={el.name}>
                        <MenuItem
                            name={el.name} 
                            icon={el.icon} 
                            clicked={() => props.clicked(el.name)}
                            />
                    </li>
                )
            })
        return menuItems
    }
    


    return(
        <nav className={classes.menu}>
            <ul>
                {showMenuItems()}
            </ul>
        </nav>
    )
}

export default menu
