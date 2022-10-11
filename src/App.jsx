import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"

function App() {
  return (
    <>
    <section>
      <h2 className="text-3xl">About me</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod quae qui adipisci provident? Odit sunt maxime dolores temporibus officiis quis eveniet iste. Ex numquam quibusdam est sequi eveniet minus!</p>
    </section>
    <section>
      <h2>My work</h2>
      <article>
        <h3>Project Name</h3>
        <p>Short description of the project.</p>
      </article>
      <article>
        <h3>Project Name</h3>
        <p>Short description of the project.</p>
      </article>
      <article>
        <h3>Project Name</h3>
        <p>Short description of the project.</p>
      </article>
      <article>
        <h3>Project Name</h3>
        <p>Short description of the project.</p>
      </article>
      <article>
        <h3>Project Name</h3>
        <p>Short description of the project.</p>
      </article>
      <article>
        <h3>Project Name</h3>
        <p>Short description of the project.</p>
      </article>
    </section>
    <section>
      <h2>Contact Me</h2>
      <p>Please get in touch!</p>
      <p>Address
        Riverside, CA
      </p>
      <p>email</p>
      <div>
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
