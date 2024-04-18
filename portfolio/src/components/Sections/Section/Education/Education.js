import './Education.scss';

const Education = () => {
    return (
        <div className="EducationSection">
            <h1>Education</h1>
            <div className='divider'>
                <hr/>
            </div>
            <div className='EducationalData'>
                <div className='class'>
                    <h2> B.Tech in Computer Science</h2>
                    <h4>KIET Group of Institutions</h4>
                    <div className='yearScore'>
                        <p>2019 - 2023</p>
                        <p>Percentage :- 88%</p>
                    </div>
                </div>
                <div className='class'>
                    <h2> Intermediate </h2>
                    <h4>CBSE Board , Ghaziabad</h4>
                    <div className='yearScore'>
                        <p>2018 - 2019</p>
                        <p>Percentage :- 87%</p>
                    </div>
                </div>
                <div className='class'>
                    <h2>High School</h2>
                    <h4>CBSE Board , Ghaziabad</h4>
                    <div className='yearScore'>
                        <p>2016 - 2017</p>
                        <p>CGPA - 10</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;