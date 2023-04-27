import './ProjectCard.scss'
import { useEffect, useState } from 'react';

interface ProjectCardProps {
    title: string,
    img: string,
    description: string
    tryLink: string,
    gitLink: string
}

function ProjectCard ({title, img, description, tryLink, gitLink}: ProjectCardProps) {
    const [show, setShow] = useState(false)
    return (
        <>
        <div className="card" onMouseEnter={() => setShow(true)} onMouseLeave={()=> setShow(false)}>
            <div className='card__image'><img className='card__image--styling' src={img}/>  {show && (
                    <div className={`card__desc ${show ? 'card__desc--slide' : ''}`}>
                    <div className='card__btnContainer'>
                    <a href={tryLink} target="_blank">
                    <button className='card__btnContainer--btn'>Try it</button>
                    </a>
                    <a href={gitLink} target="_blank">
                    <button className='card__btnContainer--btn'>GitHub</button>    
                    </a>
                    </div>
                    </div>
                )}</div>
            <span>
                <p className={`card__title`}>{title}</p>
                <p className={`${show ? 'card__title--slide' : 'card__desc'}`}>{description}</p>
            </span>
        </div>
        </>
    )

}

export default ProjectCard;