import React from 'react'
import WorkPiece from './Work/WorkPiece'
import dev_website from '../../assets/images/dev_website.jpg'
import code1 from '../../assets/images/code1.jpg'
import code2 from '../../assets/images/code2.jpg'
import code3 from '../../assets/images/code3.jpg'
import code4 from '../../assets/images/code4.jpg'


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
                    <WorkPiece title="Engineering Project Manager" subtitle="Ruby, React, HTML, CSS" imageUrl={code1} imageDescription="stock image"  />
                    <WorkPiece title="Historical Marker" subtitle="Java, Android, Ruby" imageUrl={code2} imageDescription="stock image" />
                </div>
                <div className="element3">
                    <WorkPiece title="MichaelNewman.dev" subtitle="React, HTML, SCSS" imageUrl={dev_website} imageDescription="stock image" />
                    <WorkPiece title="Let's Ride" subtitle="Ruby, JavaScript, HTML, CSS" imageUrl={code3} imageDescription="stock image" />
                    <WorkPiece title="Route Finder" subtitle="Ruby, JavaScript, HTML, CSS" imageUrl={code4} imageDescription="stock image" />
                </div>
            </div>
        </div>
    )
}
export default works