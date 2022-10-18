import { BsArrowRightShort } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFirebase } from "react-icons/tb";
import { SiReactrouter, SiWebpack, SiTailwindcss, SiVite } from "react-icons/si"

export default function Project({ projectName, projectDescription, technologies, githubLink, siteLink }) {
    function findElement(techName) {
        switch (techName){
            case "react":
                return <RiReactjsLine />;
            case "firebase":
                return <TbBrandFirebase />;
            case "react-router":
                return <SiReactrouter />;
            case "webpack":
                return <SiWebpack />;
            case "tailwind":
                return <SiTailwindcss />;
            case "vite":
                return <SiVite />;
            default:
                return;
        }
    }

    const techElements = technologies.map(tech => {
        return <div className="px-1 bg-black flex-none text-lg
            flex items-center gap-1 rounded-sm">
            {findElement(tech)} {tech}</div>
    });
    
    return (
        <article className="bg-gray-500 drop-shadow-xl rounded-sm
            py-4 px-6 md:mx-3 my-4 flex flex-col gap-4">
            {/* TODO - Image Carousel */}
            <div className="flex-none w-full max-w-xs h-40 bg-white m-auto" />
            <h3 className="flex-none text-3xl">{projectName}</h3>
            <div className="flex-auto p-4
                flex flex-col justify-between gap-4">
                <p>{projectDescription}</p>
                <div>
                    <h4 className="text-xl">Technologies</h4>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-wrap content-start items-start gap-0.5">
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