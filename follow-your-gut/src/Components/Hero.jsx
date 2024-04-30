import React from "react";
import hero_image from "../Assets/hero.png";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <section>
      <div className="hero flex flex-col items-center h-full md:flex-row flex-wrap">
        <div className=" hero_content flex flex-col justify-between md:text-left px-6 md:w-1/2">
          <h3 className="text-green-dark text-base font-semibold py-2">
            FYG
            <br />
            Gut health, food and nutrition
          </h3>

          <div className=" flex flex-col justify-center items-left  pt-8 ">
            <h1 className="hero_title text-5xl font-bold text-green-dark font-montserrat mb-4 md:text-7xl">
              {" "}
              <span>Follow</span>
              <br /> Your Gut
            </h1>
            <p className="hero_subtitle text-xl text-slate-600 mb-6 md:tracking-wide md:text-2xl">
              The gut is responsible for 70-80% of our immunity. Healing it is
              healing <span>YOU</span>.
            </p>
            <CallToAction
              text_color="text-green-dark"
              bg_color="bg-green-light"
              width= "w-1/2"
              link="#assessment"
              text="Get My Meal Plans"
            />
          </div>
        </div>
        <div className="hero_image_container md:w-1/2 flex flex-col items-center justify-center">
          <CallToAction
            text_color="text-green-dark"
            bg_color="bg-green-light"
            width="w-1/2"
            visibility = "hidden"
            link="#assessment"
            text="Get My Meal Plans"
          />
          <div className="md:w-[600px] md:h-[500px] w-full">
            <img
              className="hero-image md:px-2 object-cover flex justify-center size-full"
              src={hero_image}
              alt="This shows a wooden cutting board filled with a variety of colorful foods such as cured meats,cheeses, fruits, nuts and breads, typically served as an appetizer or snack"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
