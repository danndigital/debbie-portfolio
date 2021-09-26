import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";


function WeatherApp() {
  return (
    <article className="container mx-auto ">
      <div className="bg-orange-50 p-6">
        <h2 className="font-serif font-extrabold text-3xl lg:text-5xl mb-3 text-teal-600">
          React Weather App
        </h2>
        <p className="text-xl mb-6 text-teal-800">
          A weather app built with React and API intergration for my SheCodes
          React Workshop project.
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
              <li>CSS3</li>
              <li>HTML5</li>
              <li>Bootstrap</li>
              <li>API intergration</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
              Links
            </h3>
            <div className="flex justify-evenly">
              <p className="text-3xl font-bold text-orange-400">
                <a
                  href="https://ecstatic-swartz-7b404c.netlify.app/"
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
                  href="https://github.com/hellodeborahuk/react-weather-app"
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
        <section className="space-y-4 m-0 pt-6 lg:pt-0 lg:w-8/12">
          <p className="text-teal-800">
            For the SheCodes React Workshop, we went through the process of
            creating a Weather App. It started with the design and creating a
            wireframe of how I wanted it to look. I took inspiration from a
            hiking website on Dribbble. I wanted the design to be beautiful and
            simple.
          </p>
          <img
            src="./media/weather-wireframe.png"
            alt="weather app wireframe"
            className="m-auto"
          />
          <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
            Creating the website
          </h3>
          <p className="text-teal-800">
            The workshop led you step by step how to create the app, but the
            design they focused on was very different to mine. I found I came
            across challenges where I needed to create different components for
            sections of my page and figure out for myself how they worked
            together. I found this a steep but essential learning curve. Moving
            away from their design helped me to learn more and deepen my
            understanding of React.
          </p>
          <p className="text-teal-800">
            I started with the search functionality. I learnt how to get the
            current geolocation to create a current location button. This search
            result was then used to call the API to find the current weather for
            that location.
          </p>
          <p className="text-teal-800">
            Next up I added the forecast component. This looked quite
            intimidating at first but learning how components could be reused
            and I mapped the daily forecast to give 6 days of weather.
          </p>
          <p className="text-teal-800">
            For this section I used a different API call to allow for multiple
            days to be retrieved. The API used for current forecast only pulled
            in one day of data.
          </p>
          <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
            Extra features
          </h3>
          <p className="text-teal-800">
            I wanted to add something different to my weather app. I really
            appreciate using dark mode on my mobile so I thought that would be a
            great place to start. I researched ways I could achieve this using
            React and created a component that toggled dark mode state based
            upon a checkbox that I styled to look like a toggle slider.
          </p>
          <p className="text-teal-800">
            I didn't like the look of the icons used on the course so I hunted
            for some that I could use. I found some animated weather icons that
            I liked and worked out how to include them. Although I found them on
            npmjs.com, there was no way to install them at the time, so I
            referenced all the svg files and mapped them to the code pulled from
            the API.
          </p>
          <img
            src="./media/weather-app-toggle.gif"
            alt="weather app toggle dark mode"
            className="m-auto"
          />

          <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
            Building a responsive layout
          </h3>
          <p className=" text-teal-800">
            During the workshop it wasn't essential to create a responsive
            website. However, I wanted to make it accessible on mobile so I
            added further Bootstrap classes to make it a responsive design. I
            have hidden the dark mode toggle functionality on mobile as well as
            the image. This gives the website a much cleaner look on mobile
            phones.
          </p>
          <img
            src="./media/weather-app-mobile.jpg"
            alt="weather app mobile responsive design"
            className="m-auto w-1/5"
          />
          <h3 className="font-bold text-xl lg:text-2xl mb-3 text-teal-600">
            Future improvements
          </h3>
          <p className="text-teal-800">
            I would really like to remove the dark mode toggle and have it
            automatically change when the sun sets and rises in the default or
            current location.
          </p>
          <p className=" text-teal-800">
            I would add an alert if you've made a spelling mistake, not entered
            a location or it's unknown in the search bar.
          </p>
          <p className=" text-teal-800">
            Celcius to Fahrenheit conversion. As part of the course I did learn
            to do this and it was implemented in the current weather. I removed
            the functionality as I hadn't given this ability to the forecast or
            the wind speed. In the future I would like to add this functionality
            back fully.
          </p>
          <p className=" text-teal-800">
            View the{" "}
            <a
              href="https://ecstatic-swartz-7b404c.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              React weather app
            </a>{" "}
            or visit the{" "}
            <a
              href="https://github.com/hellodeborahuk/react-weather-app"
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
               from-teal-600
              to-teal-800
              hover:from-teal-800 hover:to-teal-600
              text-teal-50
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

export default WeatherApp;
