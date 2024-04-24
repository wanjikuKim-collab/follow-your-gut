import React from "react";

function Socials({account, link, path}) {
  return (
    <li>
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition hover:opacity-75"
      >
        <span className="sr-only">{account}</span>

        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d={path}
            clipRule="evenodd"
          />
        </svg>
      </a>
    </li>
  );
}

export default Socials;
