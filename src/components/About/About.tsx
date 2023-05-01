import { useEffect, useState } from "react"
import './About.scss'
import TechStack from "../TechStack/TechStack"
import Navigation from "../Navigation/Navigation";

function About () {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, []);
return (
    <>
    <div className={`aboutWrapper ${show ? "show" : ""}`}>
    <div className="about">
        <h1>About me</h1>
        <div className="profileWrapper">
        <img className="profile" src="/assets/2.jpg"/>
        </div>
        <span>I have had an interest in web development for a couple of years and I have previously worked in health care and the event business amongst other occupations but I have now choosen to take the next leap in my career dreams to become a front end developer.  </span>
    </div>
    <div className="about">
        <h1>Tech stack</h1>
        <div>
            <TechStack></TechStack>
        </div>
    </div>
    </div>
    <Navigation></Navigation>
    </>
)
}

export default About