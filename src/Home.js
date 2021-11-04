
import React from "react";
import { FaCss3Alt, FaHtml5, FaReact, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";
import Social from "./Social";

function Home() {
 
  
  return (
    <main>
      {/* HERO */}
      <section
        className="
          container
          mx-auto
          flex
          flex-wrap
          px-6
          lg:px-0
          py-6
          mb-4
          text-center
          items-center
          justify-around
        "
      >
        <div className="p-6">
          <h1
            className="
                                mb-8
              text-4xl
              lg:text-7xl
              font-bold
              text-left text-teal-600
            font-serif
            "
          >
            I am a
            <span
              className="
                text-transparent
                bg-clip-text bg-gradient-to-r
                from-orange-400
                to-orange-300
              "
            >
              {" "}
              frontend
            </span>
            <br />
            developer<span className="text-orange-400">.</span>
          </h1>
          <p className="mb-8 text-lg lg:text-xl text-teal-800">
            Hello, I'm Debbie. I design and code beautifully simple things.
          </p>
          <Link
            to="/Contact"
            className="
             
              py-3
              px-12
              rounded
              shadow-lg
              hover:shadow-2xl
              bg-gradient-to-br
               from-teal-600
              to-teal-800
              hover:from-teal-800 hover:to-teal-600
              text-teal-50
              font-bold
              text-lg
              tracking-wide
              transition
              duration-500
            "
          >
            Get in touch
          </Link>
        </div>
        <div className="p-6">
          <img
            src="/media/debbie.jpg"
            alt="debbie"
            className="rounded-full h-56 w-56 lg:h-80 lg:w-80 shadow-2xl border-4 border-orange-400"
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container mx-auto mb-16 px-6 lg:px-0 lg:w-9/12">
        <div className="text-center">
          <h2 className="font-serif font-extrabold text-3xl lg:text-5xl mb-3 text-teal-600">
            Portfolio
          </h2>
          <p className="text-xl mb-8 text-teal-800">
            Take a look at some of my projects
          </p>
        </div>

        <ProjectList maxItems="3" />

        <div className="flex justify-center">
          <Link
            to="/Projects"
            className="
              px-12
              py-3
              rounded
              shadow-lg
              hover:shadow-2xl
              bg-gradient-to-br
              from-teal-600
              to-teal-800
              hover:from-teal-800 hover:to-teal-600
              text-teal-50
              font-bold
              text-lg
              tracking-wide
              transition
              duration-500
            "
          >
            View more projects
          </Link>
        </div>
      </section>

      {/* ABOUT ME */}
      <section
        className="container mx-auto px-6 py-6
          mb-16
          lg:px-0
          text-center
          lg:grid
          grid-cols-2
          justify-evenly"
      >
        <div className="py-12 bg-teal-800 ">
          <div className=" container mx-auto grid justify-center justify-items-center">
            <h2 className=" font-serif font-extrabold text-3xl lg:text-5xl mb-4 text-orange-50">
              Skills
            </h2>
            <div className="grid grid-cols-3 gap-4 gap-y-6 justify-center justify-items-center md:p-0  text-orange-50">
              <div>
                <FaHtml5 className="p-2 text-6xl block m-auto" />
                <p>HTML5</p>
              </div>
              <div>
                <FaCss3Alt className="p-2 text-6xl block m-auto" />
                <p>CCS3</p>
              </div>
              <div>
                <SiJavascript className="p-2 text-6xl block m-auto" />
                <p>JavaScript</p>
              </div>
              <div>
                <FaReact className="p-2 text-6xl block m-auto" />
                <p>React</p>
              </div>
              <div>
                <SiTailwindcss className="p-2 text-6xl block m-auto" />
                <p>Tailwind CSS</p>
              </div>
              <div>
                <FaFigma className="p-2 text-6xl block m-auto" />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-6 lg:px-16 bg-orange-50 lg:flex flex-col justify-center">
          <h2 className="font-serif font-extrabold text-3xl lg:text-5xl mb-6 text-teal-600">
            Who am I?
          </h2>
          <p className="text-xl mb-6 text-teal-800 text-left">
            I am a self-taught frontend developer. I'm also a yoga teacher and
            bake pretty tasty cakes (or at least that’s what people tell me). My
            background is in digital marketing and social media. I love creating
            beautiful websites with HTML, CSS, Javascript and React.
          </p>
        </div>
      </section>
      {/* CONNECT WITH ME */}
      <section className="container mx-auto mb-16 px-6 lg:px-0 text-center lg:w-1/2">
        <h2 className="font-serif font-extrabold text-3xl lg:text-5xl mb-4 text-teal-600">
          Connect with me
        </h2>
        <p className="text-xl mb-6 text-teal-800">
          You can find me on Twitter for a chat or LinkedIn for something a bit
          more professional. Come say hello.
        </p>
        <Social />
      </section>
    </main>
  );
}

export default Home;
