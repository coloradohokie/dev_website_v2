import React from 'react'
import classes from './Blog.module.scss'

const blog = () => (
    <div className="main-container">
        <div className={classes.blogContainer}>
            <div className={classes.element1}>
                <div className="circle"></div>
                <h1>Latest Posts</h1>
            </div>

            <div className={classes.element2}>
                <h2>Blog Post</h2>
            </div>
        </div>
    </div>
)

export default blog