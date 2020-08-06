import React from 'react'
import Menu from '../Menu/Menu'
import TitlePage from '../TitlePage/TitlePage'
import About from '../About/About'
import Resume from '../Resume/Resume'
import Blog from '../Blog/Blog'
import Works from '../Works/Works'
import Contact from '../Contact/Contact'
import classes from './Layout.module.scss'

const layout = () => (
    <div className={classes.MainContainer}>
        <div className={classes.MenuContainer}>
            <Menu />
        </div>
        <div className={classes.TitlePageContainer}>
            <TitlePage />
        </div>
        <div className={classes.ContentContainer}>
            <About />
            <Resume />
            <Works />
            <Blog />
            <Contact />
        </div>
    </div>
)

export default layout