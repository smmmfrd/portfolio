import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Project from "./components/Project";

function App() {
  return (
    <>
    <section>
      <h2 className="text-3xl">About me</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod quae qui adipisci provident? Odit sunt maxime dolores temporibus officiis quis eveniet iste. Ex numquam quibusdam est sequi eveniet minus!</p>
    </section>
    <section className="flex flex-col items-center gap-12">
      <h2 className="text-3xl">My work</h2>
      <div className="grid md:grid-cols-3 gap-2 sm:grid-cols-1">
        <Project 
          projectName={"Battleship"}
          projectDescription={"The game Battleship."}
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
    <section>
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
    </section>
    </>
  )
}

export default App
