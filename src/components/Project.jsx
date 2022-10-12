export default function Project({projectName, projectDescription, technologies}) {
    return(
        <article>
            <h3>{projectName}</h3>
            <p>{projectDescription}</p>
        </article>
    );
}