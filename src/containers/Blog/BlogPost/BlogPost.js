import React from 'react'
import Moment from 'react-moment'
import classes from './BlogPost.module.scss'

const blogPost = (props) => {

    const text = props.children.replace(/<[^>]*>?/gm, '')
    let shortText = text
    if (shortText.length > 200) {
        let lastCharNumber = 150
        while ((shortText.charAt(lastCharNumber) !== ' ') && (lastCharNumber < text.length)) {
            lastCharNumber++
        }
        shortText=shortText.substring(0, lastCharNumber) + "..."
    }
    
    
    return(
        <article className={classes.BlogPost}>
            <h3>{props.title}</h3>
            <p><Moment format="MMMM DD, YYYY">{props.date}</Moment></p>
            <p>{shortText}</p>
        </article>
    )
}

export default blogPost