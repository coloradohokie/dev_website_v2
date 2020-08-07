import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import TitlePage from '../TitlePage/TitlePage'
import About from '../About/About'
import Resume from '../Resume/Resume'
import Blog from '../Blog/Blog'
import Works from '../Works/Works'
import Contact from '../Contact/Contact'
import classes from './Layout.module.scss'

class Layout extends Component {
    state = {
        menuItems: [
            {name: "About", icon: "fas fa-user"},
            {name: "Resume", icon: "fas fa-file-alt"},
            {name: "Works", icon: "fas fa-code"},
            {name: "Blog", icon: "fas fa-blog"},
            {name: "Contact", icon: "fas fa-at"}
        ],
        activeIcon: "About"
    }

    iconClickedHandler = (name) => {
        this.setState({activeIcon: name})
    }


    render() {
        return(
            <div className={classes.MainContainer}>
                <div className={classes.MenuContainer}>
                    <Menu menu={this.state.menuItems} activeIcon={this.state.activeIcon} clicked={this.iconClickedHandler} />
                </div>
                <div className={classes.TitlePageContainer}>
                    <TitlePage />
                </div>
                <div className={classes.ContentContainer}>
                    {this.state.activeIcon === "About" ? <About active /> : <About />}
                    {this.state.activeIcon === "Resume" ? <Resume active /> : <Resume />}
                    {this.state.activeIcon === "Works" ? <Works active /> : <Works />}
                    {this.state.activeIcon === "Blog" ? <Blog active /> : <Blog />}
                    {this.state.activeIcon === "Contact" ? <Contact active /> : <Contact />}
                </div>
            </div>
        )
    }
}

export default Layout