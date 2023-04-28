
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsPersonVcardFill } from "react-icons/bs";
import './Contact.scss'
import { useEffect, useState } from "react";

const iconStyles = {color: "palevioletred", fontSize: "2.5rem"}

function Contact () {
    const [show, setShow] = useState(false)


    useEffect(() => {
        setShow(true)
    }, []);
return (
    <>
    <div className="contact">
        <div className="contact__content">
        <h1 className={`contact__title ${show ? "show" : ""}`}>Do you want to work with me?</h1>
    <div className={`contact__text ${show ? "show" : ""}`}>I am now looking for an internship where I will have the chance to develop my technical skills and gain practical experience with support and tutoring. Do you think we could be a good match? Email me at fannie.wallner@medieinstitutet.se or connect with me on LinkedIn</div>
        </div>
        <div className="socials">
        <a target="_blank" href="https://github.com/fanniewallner">{<FaGithub style={iconStyles}/>}</a>
        <a target="_blank" href="https://www.linkedin.com/in/fannie-wallner-87635b239/">{<FaLinkedin style={iconStyles}/>}</a>
        <a target="_blank" href="https://www.dropbox.com/s/ptstl2tu2o5g134/Fannie%20Wallner.pdf?dl=0">{<BsPersonVcardFill style={iconStyles}/>}</a>
        </div>
    </div>
    </>
)
}

export default Contact;