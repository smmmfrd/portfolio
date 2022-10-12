import { BsArrowRightShort } from "react-icons/bs";

export default function Project({projectName, projectDescription, technologies, githubLink, siteLink}) {
    return(
        <article className="bg-slate-700 rounded-xl h-96 py-4 px-6 md:mx-3 my-4
            flex flex-col ">
            <div className="flex-none w-full max-w-xs h-40 bg-white"/>
            <h3 className="flex-none text-2xl">{projectName}</h3>
            <div className="flex-auto
                flex flex-col justify-between">
                <p>{projectDescription}</p>
                <div className="flex justify-evenly">
                    <button className="pl-3 pr-1 py-1 font-semibold bg-black rounded
                        flex">
                        To Github <BsArrowRightShort className="text-2xl"/>
                    </button>
                    <button className="pl-3 pr-1 py-1 font-semibold bg-black rounded
                        flex">
                        To Site <BsArrowRightShort className="text-2xl"/>
                    </button>
                </div>
            </div>
        </article>
    );
}