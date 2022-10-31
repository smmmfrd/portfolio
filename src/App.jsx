import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      {/* OLD BG: bg-gray-700 */}
      <header className="z-20 mb-2 border-b-4 p-3 sticky top-0 bg-cyan-500">
        <nav className="max-w-5xl mx-auto">
          <h1 className="text-2xl">Sam Mumford's Portfolio</h1>
        </nav>
      </header>
      <main className="lg:max-w-5xl w-11/12 mx-auto flex flex-col">
        <Header />
        <section className="flex flex-col items-center bg-blurredBg mt-6">
          <h2 className="text-5xl my-8">Projects</h2>
          <div className="grid lg:grid-cols-2 grid-cols-1">
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
      </main>
      <footer className="pb-4 border-t-4 bg-blurredBg flex justify-center">
        <SocialLinks />
      </footer>
    </>
  )
}