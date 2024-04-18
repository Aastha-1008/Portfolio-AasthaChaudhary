import './Certificate.scss';
import UseAnimations from 'react-useanimations';
import arrowUp from 'react-useanimations';

const Certificate = () => {
    return (
        <div className='certificateSection'>
            <h1>Certificate</h1>
            <div className='divider'>
                <hr />
            </div>
            <div className='certificateName'>
                <div>
                    <div>Course Name </div>
                    <div>Platform </div>
                    <div>Certification Link</div>
                </div>
                <div className='even'>
                    <div className='courseName'>The Complete JavaScript Course</div>
                    <div>Udemy</div>
                    <div>☑</div>
                </div>
                <div className='odd'>
                    <div className='courseName'>HTML, CSS, and JavaScript for Web Developer</div>
                    <div>Coursera</div>
                    <div>☑</div>
                </div>
                <div className='even'>
                    <div className='courseName'>Spring Boot 3, Spring & Hibernate for Beginners</div>
                    <div>Udemy</div>
                    <div>☑</div>
                </div>
                <div className='odd'>
                    <div className='courseName'>Technical Support Fundamental</div>
                    <div>Coursera</div>
                    <div>☑</div>
                </div>
                <div className='even'>
                    <div className='courseName'>Effectively speaking</div>
                    <div>NPTEL</div>
                    <div>☑</div>
                </div>

            </div>
        </div>
    );
}

export default Certificate;