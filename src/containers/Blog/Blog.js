import React, {Component} from 'react'
import Entries from './BlogPost/BlogPost'
import classes from './Blog.module.scss'

class Blog extends Component {
    state = {
        entries: []
    }

    componentDidMount = () => {
        const blogUrl = "https://www.googleapis.com/blogger/v3/blogs/7546275920667074885/posts?key=AIzaSyCwJawtzwswVksicD4fFs2RQYWxkDQLzn8"
        fetch(blogUrl, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                this.setState({entries: response.items})
            })
    }
    


    render() {
        const posts = this.state.entries.map(entry => {
            return <Entries key={entry.id} title={entry.title} date={entry.published}>{entry.content}</Entries>
        })

        let attachedClasses = ["main-container"]
        if (this.props.active) { 
            attachedClasses.push("active-card")
        } else {
            attachedClasses.push("hidden-card")
        }

        return (
            <div className={attachedClasses.join(' ')}>
                <a name="blog" />
                <div className={classes.blogContainer}>
                    <div className={classes.element1}>
                        <div className="circle"></div>
                        <h1>Latest Posts</h1>
                        
                    </div>
    
                    <div className={classes.element2}>
                        {posts}
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog