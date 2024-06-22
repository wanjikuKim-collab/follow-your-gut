import React from "react";
import { HashLink } from "react-router-hash-link";

const CallToAction = ({
  bg_color,
  text_color,
  width,
  visibility,
  link,
  text,
}) => {
  return (
    <HashLink
      to={link}
      className={`${bg_color} md:${width} ${visibility} ${text_color} font-bold
      py-2
      px-4
      md:px-8
      rounded-xl
      shadow-md
      capitalize
      text-center
      md:inline-block
      translate
      ease-in-out
      hover:scale-110
      hover:translate-x-1
      hover:bg-lime-700
      hover:text-white
      text-base
      md:text-lg
      my-2
      md:my-6
      mr-0
      md:mr-4`}
    >
      {text}
    </HashLink>
  );
};

export default CallToAction;
