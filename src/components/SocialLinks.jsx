import {SiFreecodecamp} from "react-icons/si";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function SocialLinks() {
    function handleClick(location) {
        console.log(location);
    }

    return (
        <div className="flex gap-6 m-auto p-2 items-center">
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <BsGithub className="text-4xl cursor-pointer" />
            </a>
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="text-4xl" />
            </a>
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <BsTwitter className="text-4xl" />
            </a>
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <SiFreecodecamp className="text-5xl" />
            </a>
        </div>
    )
}