import Project from "./components/Project";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import profilePic from "./assets/pexels-laura-tancredi-7083927.jpg"

export default function App() {
  return (
    <>
    <header className="z-20 mb-2 border-b-4 p-3 sticky top-0 bg-gray-700">
      <nav className="max-w-5xl mx-auto">
        <h1 className="text-2xl">Sam Mumford's Portfolio</h1>
      </nav>
    </header>
    <main className="max-w-5xl mx-auto flex flex-col gap-6">
      <header className="w-5/6 mx-auto pr-32
          flex gap-8 items-center">
        <img src={profilePic} alt="Stock image of some guy"
        className="w-40 h-60"/> 
        <div className="">
          <h2 className="text-5xl">About me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod quae qui adipisci provident?
            Odit sunt maxime dolores temporibus officiis quis eveniet iste. Ex numquam quibusdam est sequi eveniet minus!</p>

          <div className="flex">
            <BsGithub className="text-4xl"/>
            <BsLinkedin className="text-4xl"/>
            <BsTwitter className="text-4xl"/>
          </div>
        </div>
      </header>
      <section className="flex flex-col items-center bg-gray-600">
        <h2 className="text-5xl my-8">Projects</h2>
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <Project
            projectName={"Rookie Drive"}
            projectDescription={"A relica of Google Drive, including user storage."}
            technologies={["react", "firebase", "webpack"]}
            githubLink={"#"}
            siteLink={"#"}
          />
          <Project
            projectName={"Where's Waldo App"}
            projectDescription={'A "Find the Character" game'}
            technologies={["react", "firebase", "webpack"]}
            githubLink={"#"}
            siteLink={"#"}
          />
          <Project
            projectName={"Battleship"}
            projectDescription={"The game Battleship, redone from plain Javascript to React."}
            technologies={["react", "tailwind", "react-router", "vite"]}
            githubLink={"#"}
            siteLink={"#"}
          />
          <Project
            projectName={"Fake RMT Site"}
            projectDescription={"A fake store for 'real money trading' of video game items."}
            technologies={["react", "react-router", "vite"]}
            githubLink={"#"}
            siteLink={"#"}
          />
        </div>
        <h4 className="font-bold mb-2">Check my Github for more!</h4>
      </section>
      <footer>
        <h2>Contact Me</h2>
        <p>Please get in touch!</p>
        <p>Address
          Riverside, CA
        </p>
        <p>email</p>
        <div className="flex">
          <BsGithub className="text-4xl"/>
          <BsLinkedin className="text-4xl"/>
          <BsTwitter className="text-4xl"/>
        </div>
      </footer>
    </main>
    </>
  )
}