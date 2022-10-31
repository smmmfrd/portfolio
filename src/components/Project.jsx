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
            flex items-center gap-1 rounded-sm" key={tech}>
            {findElement(tech)} {tech}</div>
    });
    
    return (
        <article className="bg-blurredBg drop-shadow-xl rounded-lg
            py-4 px-6 lg:mx-3 my-4 flex flex-col gap-4">
            {/* TODO - Image Carousel */}
            <div className="flex-none w-full lg:h-40 h-52 bg-white m-auto" />
            <h3 className="flex-none text-3xl">{projectName}</h3>
            <div className="flex-auto p-4
                flex flex-col justify-between gap-4">
                <p>{projectDescription}</p>
                <div className="bg-blurredBg p-2 rounded-lg">
                    <h4 className="text-xl">Technologies</h4>
                    <div className="flex">
                        <div className="w-full
                            flex flex-wrap content-start items-start gap-0.5">
                            {techElements}
                        </div>
                        <div className="w-max flex-none
                            flex flex-col justify-start items-end gap-2">
                            <a className="p-1 font-semibold bg-black rounded
                                flex cursor-pointer" href={githubLink}>
                                To Github Repo <BsArrowRightShort className="text-2xl" />
                            </a>
                            <a className="p-1 font-semibold bg-black rounded
                                flex cursor-pointer" href={siteLink}>
                                To Live Site <BsArrowRightShort className="inline-block align-middle text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}