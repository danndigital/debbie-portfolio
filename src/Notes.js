import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

function Notes() {
  return (
    <article className="container mx-auto">
      <div className="bg-orange-50 p-6">
        <h2 className="font-serif font-extrabold text-3xl lg:text-5xl mb-3 text-teal-600">
          Notes App
        </h2>
        <p className="text-xl mb-6 text-teal-800">
          A CRUD application to store and edit notes.
        </p>
      </div>
      <div className="lg:flex p-6 space-x-8">
        <section>
          <div className="mb-6">
            <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
              Technologies
            </h3>
            <ul className="text-lg mb-6 text-teal-800 list-disc list-inside">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>HTML5</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
              Links
            </h3>
            <div className="flex justify-evenly">
              <p className="text-3xl font-bold text-orange-400">
                <a
                  href="https://awesome-lamport-4fcaff.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink
                    className="transform
                transition
                duration-500
                hover:scale-110"
                  />
                </a>
              </p>
              <p className="text-3xl font-bold text-orange-400">
                <a
                  href="https://github.com/hellodeborahuk/coding-notebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="transform
                transition
                duration-500
                hover:scale-110"
                  />
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="lg:w-8/12 m-0 pt-6 lg:pt-0 space-y-4 text-teal-800">
          <p>
            I wanted to create an CRUD project that would allow me to track my
            notes from #100DaysOfCode challenge on Twitter. I followed a{" "}
            <a
              href="https://www.youtube.com/watch?v=8KB3DHI-QbM"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              tutorial on YouTube
            </a>{" "}
            where I encountered issues as I wanted inputs from two fields. This
            was also a challenge when it came to searching within the two
            fields.
          </p>
          <img
            src="./media/notes.png"
            alt="notes app"
            className="m-auto lg:w-9/12"
          />
          <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
            Stumbling blocks
          </h3>
          <p className="text-teal-800">
            I decided to use Tailwind CSS as it's something I've recently been
            learning and I really liked how simple it was to create the look of
            the note component, similar to a window. After the initial setup of
            the notes and saving them to local storage, I added tagging
            functionality. I could now add and remove multiple tags from each
            note.
          </p>
          <p>
            With the ability to add tags, I thought it would be useful to filter
            notes by tag so I added a filter button next to the search.
          </p>
          <p>
            To create the edit functionality I had to refactor my components so
            that the form stood alone but also was included in the Note. The
            Note component contains two further components: the form and the
            note view. This meant went the edit button was clicked it would show
            the form and when saved it would show the note view.
          </p>
          <img
            src="./media/add-new-note.gif"
            alt="add new note and search functionality gif"
            className="m-auto lg:w-9/12"
          />

          <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
            Future improvements
          </h3>
          <ul className="list-disc list-inside pl-6 ">
            <li>Save information to a database.</li>
            <li>Ability to login.</li>
            <li>Pin notes to the top or mark as favourite.</li>
          </ul>

          <p className=" text-teal-800">
            View the{" "}
            <a
              href="https://awesome-lamport-4fcaff.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Notes app
            </a>{" "}
            or visit the{" "}
            <a
              href="https://github.com/hellodeborahuk/coding-notebook"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Github repository
            </a>{" "}
            for this project.
          </p>
          <div className="py-6 text-center">
            <Link
              to="/Projects"
              className="
              px-12
              py-3
              rounded
              shadow-lg
              hover:shadow-2xl
              bg-gradient-to-br
              from-orange-300
              to-orange-400
              hover:from-orange-400 hover:to-orange-300
              text-teal-800
              font-bold
              text-2lg
              tracking-wide
              transition
              duration-500
            "
            >
              View more projects
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Notes;
