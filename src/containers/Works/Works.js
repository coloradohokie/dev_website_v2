import React from 'react'
import WorkPiece from './Work/WorkPiece'
import dev_website from '../../assets/images/dev_website.jpg'
import projectmanager from '../../assets/images/projectmanager.jpg'
import historicalmarker from '../../assets/images/historicalmarker.jpg'
import letsride from '../../assets/images/letsride.jpg'



const works = (props) => {
    let attachedClasses = ["main-container"]
    if (props.active) { 
        attachedClasses.push("active-card")
    } else {
        attachedClasses.push("hidden-card")
    }
    return (
        <div className={attachedClasses.join(' ')}>
            <a name="works" />
            <div className="gridContainer">
                <div className="element1">
                    <div className="circle" />
                    <h1>Works</h1>
                </div>
                <div className="element2">
                    <WorkPiece 
                        title="Engineering Project Manager" 
                        subtitle="Ruby, React, HTML, CSS" 
                        imageUrl={projectmanager} 
                        imageDescription="screenshot from web app"
                        url="https://blog.michaelnewman.dev/2020/08/engineering-project-manager.html"  
                    />
                    <WorkPiece 
                        title="Historical Marker" 
                        subtitle="Java, Android, Ruby" 
                        imageUrl={historicalmarker} 
                        imageDescription="screenshot from android app" 
                        url="https://blog.michaelnewman.dev/2020/10/historical-marker.html"
                    />
                </div>
                <div className="element3">
                    <WorkPiece 
                        title="MichaelNewman.dev" 
                        subtitle="React, HTML, SCSS" 
                        imageUrl={dev_website} 
                        imageDescription="screenshot of this site"
                        url="https://blog.michaelnewman.dev/2020/10/personal-website.html" 
                    />
                    <WorkPiece 
                        title="Let's Ride" 
                        subtitle="Ruby, JavaScript, HTML, CSS" 
                        imageUrl={letsride} 
                        imageDescription="screenshot from web app"
                        url="https://blog.michaelnewman.dev/2020/10/lets-ride.html" 
                    />
                    {/* <WorkPiece title="Route Finder" subtitle="Ruby, JavaScript, HTML, CSS" imageUrl={code4} imageDescription="stock image" /> */}
                </div>
            </div>
        </div>
    )
}
export default works