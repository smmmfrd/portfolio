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
        <article className="bg-blurredBg drop-shadow-xl rounded-sm
            py-4 px-6 md:mx-3 my-4 flex flex-col gap-4">
            {/* TODO - Image Carousel */}
            <div className="flex-none w-full max-w-xs h-40 bg-white m-auto" />
            <h3 className="flex-none text-3xl">{projectName}</h3>
            <div className="flex-auto p-4
                flex flex-col justify-between gap-4">
                <p>{projectDescription}</p>
                <div className="bg-blurredBg p-2 rounded-sm">
                    <h4 className="text-xl">Technologies</h4>
                    <div className="grid md:grid-cols-3 grid-cols-2">
                        <div className="md:col-span-2 col-span-1 flex flex-wrap content-start items-start gap-0.5">
                            {techElements}
                        </div>
                        <div className="flex md:flex-col flex-row justify-end items-end gap-2">
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