import React from 'react'
import WorkPiece from './Work/WorkPiece'
import profile from '../../assets/profile/profile.jpg'
import dev_website from '../../assets/images/dev_website.jpg'
import code1 from '../../assets/images/code1.jpg'
import code2 from '../../assets/images/code2.jpg'
import code3 from '../../assets/images/code3.jpg'
import code4 from '../../assets/images/code4.jpg'


const works = () => (
    <div className='main-container'>
        <div className="gridContainer">
            <div className="element1">
                <div className="circle" />
                <h1>Works</h1>
            </div>
            <div className="element2">
                <WorkPiece title="Engineering Project Manager" subtitle="Ruby, React, HTML, CSS" imageUrl={code1}  />
                <WorkPiece title="Historical Marker" subtitle="Java, Android, Ruby" imageUrl={code2} />
            </div>
            <div className="element3">
                <WorkPiece title="MichaelNewman.dev" subtitle="React, HTML, SCSS" imageUrl={dev_website} />
                <WorkPiece title="Let's Ride" subtitle="Ruby, JavaScript, HTML, CSS" imageUrl={code3} />
                <WorkPiece title="Route Finder" subtitle="Ruby JavaScript, HTML, CSS" imageUrl={code4} />
            </div>
        </div>
    </div>
)

export default works