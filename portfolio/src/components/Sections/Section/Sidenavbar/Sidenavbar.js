import './Sidenavbar.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    const [activeLink, setActiveLink] = useState(() => {
        return localStorage.getItem("activeLink") || "Education";
    });

    useEffect(() => {
        localStorage.setItem("activeLink", activeLink);
    }, [activeLink]);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    }

    return (
        <div className='sideNavbar'>
            <div className='profileSections'>
                <div  className={`section ${activeLink === "Education" ? "active" : ""}`}>
                    <Link to="/Education" className="link" onClick={() => handleLinkClick("Education")} style={{textDecoration:'none'}}>
                        <h2>Education :- </h2>
                    </Link>
                </div>
                <div className={`section ${activeLink === "Experience" ? "active" : ""}`}>
                    <Link to="/Experience" className="link" onClick={() => handleLinkClick("Experience")} style={{textDecoration:'none'}}>
                        <h2>Work Experience :- </h2>
                    </Link>
                </div>
                <div className={`section ${activeLink === "Certificate" ? "active" : ""}`}>
                    <Link to="/Certificate" className="link" onClick={() => handleLinkClick("Certificate")} style={{textDecoration:'none'}}>
                        <h2>Certificate :- </h2>
                    </Link>
                </div>
            </div>
            <div className='sectionData'>

            </div>
        </div>
    );
}

export default SideNavbar;