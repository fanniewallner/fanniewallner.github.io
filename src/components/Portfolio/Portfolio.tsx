import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import './Portfolio.scss'
import Navigation from "../Navigation/Navigation";

function Portfolio () {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, []);

    return (
        <>
        <h1 className={`portfolio__title ${show ? "show" : ""}`}>Portfolio</h1>
        <div className={`portfolioWrapper ${show ? "show" : ""}`} >
        <ProjectCard title="Tic-tac-toe" img="/assets/tic-tac-toe-small.png" description="A simple Tic-Tac-Toe game built in Vue. Demo and code coming soon" tryLink={""} gitLink={""}></ProjectCard>
        <ProjectCard title="To-do App" img="/assets/todo-vue.png" description="To-do app built in Vue" tryLink={"https://todo-vueapplication.netlify.app/"} gitLink={"https://github.com/fanniewallner/Todo.vue"}></ProjectCard>
        <ProjectCard title="Geezer" img="/assets/geezer-small.png" description="A webshop group project at Medieinstitutet. Built in JS" tryLink={"https://geezershop.netlify.app/"} gitLink={"https://github.com/fanniewallner/geezer"}></ProjectCard>
        </div>
        <Navigation></Navigation>
        </>
    )

}

export default Portfolio;