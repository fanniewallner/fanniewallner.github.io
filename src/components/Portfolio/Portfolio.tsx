import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import './Portfolio.scss'

function Portfolio () {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, []);

    return (
        <>
        <h1 className={`portfolio__title ${show ? "show" : ""}`}>Portfolio</h1>
        <div className={`portfolioWrapper ${show ? "show" : ""}`} >
        <ProjectCard title="Tic-tac-toe" img="/src/assets/tic-tac-toe-small.png" description="A simple Tic-Tac-Toe game built in Vue" tryLink={""} gitLink={""}></ProjectCard>
        <ProjectCard title="To-do App" img="/src/assets/vue-small-todo.png" description="To-do app built in Vue" tryLink={""} gitLink={"https://github.com/fanniewallner/Todo.vue"}></ProjectCard>
        <ProjectCard title="Geezer" img="/src/assets/geezer-small.png" description="A webshop group project at Medieinstitutet. Built in JS" tryLink={"https://geezershop.netlify.app/"} gitLink={"https://github.com/fanniewallner/geezer"}></ProjectCard>
        </div>
        </>
    )

}

export default Portfolio;