import { BsArrowRightShort } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

export default function Project({ projectName, projectDescription, technologies, githubLink, siteLink }) {
    function findElement(techName) {
        switch (techName){
            case "react":
                return <FaReact />;
        }
    }

    const techElements = technologies.map(tech => {
        return <div className="px-1 bg-black flex items-center gap-1">
            {findElement(tech)} {tech}</div>
    });
    
    return (
        <article className="bg-slate-700 rounded-xl py-4 px-6 md:mx-3 my-4
            flex flex-col">
            {/* TODO - Image Carousel */}
            <div className="flex-none w-full max-w-xs h-40 bg-white" />
            <h3 className="flex-none text-3xl">{projectName}</h3>
            <div className="flex-auto p-4
                flex flex-col justify-between gap-4">
                <p>{projectDescription}</p>
                <div>
                    <h4 className="text-xl">Technologies</h4>
                    <div className="grid grid-cols-2">
                        <div className="flex items-start">
                            {techElements}
                        </div>
                        <div className="flex justify-between flex-col items-end">
                            <a className="pl-3 pr-1 py-1 font-semibold bg-black rounded
                                flex cursor-pointer" href={githubLink}>
                                To Github <BsArrowRightShort className="text-2xl" />
                            </a>
                            <a className="pl-3 pr-1 py-1 font-semibold bg-black rounded
                                flex cursor-pointer" href={siteLink}>
                                To Site <BsArrowRightShort className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}