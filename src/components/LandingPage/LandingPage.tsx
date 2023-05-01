import { useEffect, useState } from "react"
import "./LandingPage.scss"
import Navigation from "../Navigation/Navigation";

function LandingPage () {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, []);

    // const toggleShow = () => {
    //     setShow(!show)
    // }
return (
    <>
    <div className={`landingPage`}>
        <h1 className={`landingPage__title ${show ? "show" : ""}`}>Hello there, my name is Fannie.</h1>
        <p className={`landingPage__text ${show ? "show" : ""}`}>I am a front end developer student at Medieinstitutet in Stockholm.</p>
    </div>
    <Navigation></Navigation>
    </>
)
}

export default LandingPage