import Project from "./components/Project";
import profilePic from "./assets/pexels-laura-tancredi-7083927.jpg"
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <>
    {/* OLD BG: bg-gray-700 */}
    <header className="z-20 mb-2 border-b-4 p-3 sticky top-0 bg-cyan-500">
      <nav className="max-w-5xl mx-auto">
        <h1 className="text-2xl">Sam Mumford's Portfolio</h1>
      </nav>
    </header>
    <main className="md:max-w-5xl max-w-full mx-auto flex flex-col">
      <header className="w-5/6 mx-auto pr-32
          flex gap-8 items-center">
        <img src={profilePic} alt="Stock image of some guy"
        className="w-40 h-60"/> 
        <div className="">
          <h2 className="text-5xl">About me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod quae qui adipisci provident?
            Odit sunt maxime dolores temporibus officiis quis eveniet iste. Ex numquam quibusdam est sequi eveniet minus!</p>

          <SocialLinks />
        </div>
      </header>
      <section className="flex flex-col items-center bg-blurredBg mt-6">
        <h2 className="text-5xl my-8">Projects</h2>
        <div className="grid md:grid-cols-2 grid-cols-1">
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
            projectName={"This Portfolio"}
            projectDescription={"This portfolio itself!"}
            technologies={["react", "tailwind", "react-router", "vite"]}
            githubLink={"#"}
            siteLink={"#"}
          />
        </div>
        <h4 className="font-bold mb-2">Check my Github for more!</h4>
      </section>
      <footer className="mb-4 flex justify-center">
        <SocialLinks />
      </footer>
    </main>
    </>
  )
}