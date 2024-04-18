import './Section.scss';
// import { useEffect, useState } from 'react';
import background1 from '../../Images/background1.png';
import SideNavbar from './Section/Sidenavbar/Sidenavbar';
import Education from './Section/Education/Education';
import Experience from './Section/Experience/Experience';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certificate from './Section/Certificate/Certificate';

const Section = () => {
    
    return(
        <div className="sections" style={{backgroundImage : `url(${background1})`,backgroundRepeat:'no-repeat', backgroundSize: 'cover'}} >
            <Router>
               <SideNavbar />
               <Routes>
                <Route  exact path = "/Education" element= {<Education/>} />
                <Route exact path = "/Experience" element = {<Experience/>}/>
                <Route exact path = "/Certificate" element = {<Certificate/>}/>
               </Routes> 
            </Router>
        </div>
    );
}

export default Section;