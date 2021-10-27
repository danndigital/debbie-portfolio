import React from "react";
import Social from "./Social";
import emailjs from "emailjs-com";


function Contact() {

   const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f7i9j58",
        "template_4zyvvh9",
        e.target,
        "user_o7ejxkwa6kM6tuzAACWA2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
    }

return (
  <div className="container mx-auto">
    <div className="container mx-auto mb-16 px-6 lg:px-0  lg:w-9/12">
      <h2 className="font-serif font-extrabold text-3xl lg:text-5xl my-3 lg:my-8  text-center text-teal-600">
        Contact me
      </h2>
      <p className="text-xl mb-6 text-teal-800">I’d love to hear from you. </p>
      <p className="text-xl mb-6 text-teal-800">
        If you have a role you would like to discuss, a general enquiry or would
        just like to have a chat please complete the form below.
      </p>
      <div className="w-full max-w-md m-auto">
        <form
          onSubmit={sendEmail}
          className="bg-orange-50
                rounded-lg
                shadow-lg  px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label className="text-teal-800 font-bold" for="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="text-teal-800 font-bold" for="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="text-teal-800 font-bold" for="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Send"
              className="px-12
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
              duration-500"
            />
          </div>
        </form>
      </div>
      <br/>
      <p className="text-xl mb-6 text-teal-800">
        You can also find me on Twitter for a chat, check out my GitHub, or
        connect on LinkedIn for something a bit more professional. Come say
        hello.
      </p>
      <br />
      <Social />
    </div>
  </div>
);

}

export default Contact;