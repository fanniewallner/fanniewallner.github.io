import './TechStack.scss'

function TechStack(){
    const stack:string[] = ["HTML5", "Javascript", "Typescript", "Vue", "React", "GraphQL", "REST API"]
    let lang = stack.map((l,i)=><li key={i}>{l}</li>)
    return(
        <ul>
            {lang}
        </ul>
    )
}

export default TechStack