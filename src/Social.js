import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Social() {
    return (
      <div className="flex justify-evenly">
        <a
          href="https://twitter.com/debbie_digital"
          target="_blank"
          rel="noopener noreferrer"
          className="text-6xl font-bold text-orange-400"
          aria-label="Twitter"
        >
          <FaTwitter
            className="transform
                transition
                duration-500
                hover:scale-110"
          />
        </a>
        <a
          href="https://github.com/hellodeborahuk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-6xl font-bold text-orange-400"
          aria-label="GitHub"
        >
          <FaGithub
            className="transform
                transition
                duration-500
                hover:scale-110"
          />
                  </a>
        <a
          href="https://www.linkedin.com/in/debbiedann/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-6xl font-bold text-orange-400"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn
            className="transform
                transition
                duration-500
                hover:scale-110"
          />
         
        </a>
      </div>
    );
}

export default Social;