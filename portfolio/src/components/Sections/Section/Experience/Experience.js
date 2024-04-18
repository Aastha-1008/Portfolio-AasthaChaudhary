import './Experience.scss' ;

const Experience = () => {
    return(
        <div className='WorkExperience'>
            <h1> Work Experience</h1>
            <div className='work'>
                <div className='experience'>
                    <h2>Web Developer</h2>
                    <div className='position'>
                        <h4>Verve Management</h4>
                        <h4><span>Feb'23 - Current</span></h4>
                    </div>
                    <div className='task'>
                    <h5>Task - </h5>
                        <ul>
                            <li>Manage website for events host by organization.</li>
                            <li> <span>Tech Stack : </span> Wordpress , ReactJs</li>
                        </ul>
                    </div>
                </div>

                <div className='experience'>
                    <h2>Software Developer (SDE - 1 ) </h2>
                    <div className='position'>
                        <h4>Healthkart</h4>
                        <h4><span>Jan'23 - Jan'24</span></h4>
                    </div>
                    <div className='task'>
                    <h5>Task - </h5>
                        <ul>
                            <li>Transformed project sections from a Spring and JSP tech stack to a React and Spring Boot tech stack. </li>
                            <li>Proficient in performing CRUD operations </li>
                            <li>KEYCLOAK – Integrate keycloak login and google sign-in with one of the existing project. </li>
                            <li>AWS Textract – Use textract to extract data from uploaded file on S3 Bucket and use to show data pre-filled. </li>
                            <li>Use CDN to fetch data instead of directly fetching it from S3 bucket. </li>
                            <li>Proficiency in Hibernate </li>
                            <li> <span>Tech Stack : </span> ReactJs , Java , SpringBoot , MySQL , AWS , Keycloak</li>
                        </ul>
                    </div>
                </div>

                <div className='experience'>
                    <h2>Ninja Entrepreneur</h2>
                    <div className='position'>
                        <h4>Coding Ninja</h4>
                        <h4><span>Sept'21 - Jan'22</span></h4>
                    </div>
                    <div className='task'>
                    <h5>Task - </h5>
                        <ul>
                            <li>Organized tech competition related events.</li>
                            <li>Organized workshop for college student.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;