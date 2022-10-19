import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function SocialLinks() {
    return (
        <div className="flex gap-6 m-auto p-2">
            <BsGithub className="text-4xl" />
            <BsLinkedin className="text-4xl" />
            <BsTwitter className="text-4xl" />
        </div>
    )
}