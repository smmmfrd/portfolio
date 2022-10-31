import profilePic from "../assets/pexels-laura-tancredi-7083927.jpg";
import SocialLinks from "./SocialLinks";

export default function Header() {
    return (
        <header className="w-11/12 mx-auto my-8 px-8 py-4 bg-blurredBg rounded-3xl
          flex gap-8 items-center">
            <img src={profilePic} alt="Stock image of some guy"
                className="w-40 h-60 shadow-2xl" />
            <div>
                <h2 className="text-5xl mb-2">About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod quae qui adipisci provident?
                    Odit sunt maxime dolores temporibus officiis quis eveniet iste. Ex numquam quibusdam est sequi eveniet minus!</p>
                <SocialLinks />
            </div>
        </header>
    );
}