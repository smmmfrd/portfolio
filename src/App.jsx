import Project from "./components/Project";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import profilePic from "./assets/pexels-laura-tancredi-7083927.jpg"

function App() {
  return (
    <>
    <header className="mb-2 border-b-4 p-3 sticky top-0">
      <nav className="max-w-5xl mx-auto">
        <h1 className="text-2xl">Sam Mumford's Portfolio</h1>
      </nav>
    </header>
    <main className="max-w-5xl mx-auto">
      <header className="w-5/6 mx-auto pr-32
          flex gap-8 items-center">
        <img src={profilePic} alt="Stock image of some guy"
        className="w-40 h-60 shadow-l33t"/> 
        <div className="">
          <h2 className="text-5xl">About me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod quae qui adipisci provident?
            Odit sunt maxime dolores temporibus officiis quis eveniet iste. Ex numquam quibusdam est sequi eveniet minus!</p>
        </div>
      </header>
      <section className="flex flex-col items-center gap-12">
        <h2 className="text-3xl">My work</h2>
        <div className="grid md:grid-cols-3 gap-2 sm:grid-cols-1">
          <Project
            projectName={"Battleship"}
            projectDescription={"The game Battleship, redone from plain Javascript to React."}
          />
          <Project
            projectName={"Rookie Drive"}
            projectDescription={"Google drive but only can create documents from basic web dev lessons, users must sign in to create their own."}
          />
          <Project
            projectName={"Fake RMT Site"}
            projectDescription={"A fake store for 'real money trading' of video game items."}
          />
        </div>
        <h4 className="font-bold">Check my Github for more!</h4>
      </section>
      <footer>
        <h2>Contact Me</h2>
        <p>Please get in touch!</p>
        <p>Address
          Riverside, CA
        </p>
        <p>email</p>
        <div className="flex">
          {/* Increase size just by using font-size lmao */}
          <BsGithub className="text-4xl"/>
          <BsLinkedin className="text-4xl"/>
          <BsTwitter className="text-4xl"/>
        </div>
      </footer>
    </main>
    </>
  )
}

export default App
