import './HeroBanner.scss';
import profileImage from '../../Images/profile.png';
import linkedInIcon from '../../Images/linkedInIcon.png';
import email from '../../Images/email2.png';
import resume from '../../Images/resume.png';
import Typical from 'react-typical';
import border from '../../Images/border.png';
import design1 from '../../Images/design1.png';
import design2 from '../../Images/design2.svg';

const HeroBanner = () => {

    return (
        <div className='heroBanner'>
            <div className="Intro">
                <h1>Portfolio</h1>
                <div className='profile'>
                    <div className="about">
                        <h2>Hello , I am <span>Aastha Chaudhary </span></h2>
                        <p>Crafting Digital Narratives through Design and Development</p>
                        <div className="profile-details-role" >
                            <div className="primary-text">
                                <h1>
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Ethusiastic Dev 🟠 ",
                                            3000,
                                            "Full Stack Developer 💻",
                                            3000,
                                            "React Dev 📱",
                                            3000,
                                        ]}
                                        className="steps"
                                    />
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='profileDesign' style={{ backgroundImage: `url(${design1})` }}>
                        <img src={design2} alt="profile"/>
                    </div>
                </div>
                <div className='borderImg'>
                    <img src={border} alt="border" />
                </div>
            </div>

            <div className='Image'>
                <div className='profilePhoto'>
                    <img src={profileImage} alt="profile" />
                </div>
            </div>

            <div className='profile-summary'>
                <p>As a dynamic and motivated recent graduate, I bring a passion for both backend and frontend development, with a solid foundation in
                    programming languages and a commitment to delivering innovative and user-centric solutions in the realm of web development. Eager
                    to contribute my skills and learn from experienced teams to drive success in collaborative projects.
                </p>
            </div>

            <div className="connectProfile">

                <div className="cProfile">
                    <div className="ProfileIcon">
                        <div className="profileImg" style={{ width: '10%' }}><img src={linkedInIcon} alt="linkedIn" style={{ width: '90%' }} /></div>
                        <div><h3><a href="https://www.linkedin.com/in/aastha-chaudhary-4b21271a0/">Connect With linkedIn</a></h3></div>
                    </div>
                </div>

                <div className="cProfile">
                    <div className="ProfileIcon">
                        <div className="profileImg" style={{ width: '10%' }}><img src={email} alt="Email" style={{ width: '90%' }} /></div>
                        <div><h3><a href="mailto:aastha.chaudhary237@gmail.com">Connect With E-Mail</a></h3></div>
                    </div>
                </div>

                <div className="cProfile">
                    <div className="ProfileIcon">
                        <div className="profileImg" style={{ width: '10%' }}><img src={resume} alt="Email" style={{ width: '100%' }} /></div>
                        <div><h3 ><a href="https://drive.google.com/file/d/1LrE5ucjTl3iReen_rO4SKcnuTkmvRHuz/view?usp=sharing" download="Aastha's Resume.pdf">Download Resume</a></h3></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HeroBanner;