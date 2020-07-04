import React from 'react';
import MenuItem from './MenuItem/MenuItem'
import classes from './Menu.module.scss'

const menu = () => (
    <nav className={classes.menu}>
        <ul>
            <li>
                <MenuItem name="About" icon="fas fa-user" />
            </li>
            <li>
                <MenuItem name="Resume" icon="fas fa-file-alt" />
            </li>
            <li>
                <MenuItem name="Works" icon="fas fa-code" />
            </li>
            <li>
                <MenuItem name="Blog" icon="fas fa-blog" />
            </li>
            <li>
                <MenuItem name="Contact" icon="fas fa-at" />
            </li>
        </ul>
    </nav>
)

export default menu
