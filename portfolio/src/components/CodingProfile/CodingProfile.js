import './CodingProfile.scss';
import leetcode from '../../Images/leetcode.png';
import gfg from '../../Images/gfg.png';
import codingNinja from '../../Images/coding ninja.png';
import hackerrank from '../../Images/hackerrank.png';
import codechef from '../../Images/codechef.png';
import CodeForces from '../../Images/codeforces.png';

const CodingProfile = () => {
    return (
        <div className="codingProfile">
            <h1>Coding Profile</h1>
            <div className='divider'>
                <hr/>
            </div>
            <div className="profile">
                <div className="profileContainer">
                    <div></div>
                    <div className="image">
                        <img src={leetcode} alt="profile icon" className="ProfileImg"/>
                    </div>
                    <div className="ProfileName">
                        <a href="https://leetcode.com/AasthaChaudhary/">LeetCode</a>
                    </div>
                </div>
                <div className="profileContainer">
                    <div className="image">
                        <img src={codingNinja} alt="profile icon" className="ProfileImg"/>
                    </div>
                    <div className="ProfileName">
                        <a href="https://www.naukri.com/code360/profile/4af5c365-f12e-4bdc-b5a1-8853d92b3880">Coding Ninja</a>
                    </div>
                </div>
                <div className="profileContainer">
                    <div className="image">
                        <img src={gfg} alt="profile icon" className="ProfileImg"/>
                    </div>
                    <div className="ProfileName">
                        <a href="https://auth.geeksforgeeks.org/user/aasthachaudhary237/practice">GeeksForGeeks</a>
                    </div>
                </div>
                <div className="profileContainer">
                    <div className="image">
                        <img src={hackerrank} alt="profile icon" className="ProfileImg"/>
                    </div>
                    <div className="ProfileName">
                        <a href="https://www.hackerrank.com/profile/Aastha_chaudhary">Hacker Rank</a>
                    </div>
                </div>
                <div className="profileContainer">
                    <div className="image">
                        <img src={codechef} alt="profile icon" className="ProfileImg"/>
                    </div>
                    <div className="ProfileName">
                        <a href="https://www.codechef.com/users/aastha9634">Code Chef</a>
                    </div>
                </div>
                <div className="profileContainer">
                    <div className="image">
                        <img src={CodeForces} alt="profile icon" className="ProfileImg"/>
                    </div>
                    <div className="ProfileName">
                        <a href="https://codeforces.com/profile/chaudhary_Aastha">Code Forces</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodingProfile;