export default function Project({projectName, projectDescription, technologies, githubLink, siteLink}) {
    return(
        <article>
            <h3>{projectName}</h3>
            <p>{projectDescription}</p>
        </article>
    );
}