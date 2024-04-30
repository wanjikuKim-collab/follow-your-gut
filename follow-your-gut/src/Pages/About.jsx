import React from "react";
import mealplan from '../Assets/meal_plan.png'
function About() {
  return (
    <div className="flex md:flex-row flex-col h-full align-center p-6 items-center justify-center bg-green-light">
      <div className="md:w-1/2 flex flex-col text-left justify-between items-left px-6">
        <h2 className="md:text-5xl text-3xl font-bold text-green-dark font-montserrat mb-4 text-left pb-4">The FYG Approach to Wellness</h2>
        <h3 className="md:text-3xl text-xl font-montserrat font-bold text-green-dark mb-4">Powered by AI for a Personalized Journey</h3>
        <p className="text-green-dark font-light text-xl leading-normal text-left px-2">
          Imagine a wellness companion that understands your individual needs and
          preferences. With FYG, that companion becomes a reality. Our AI
          technology and certified nutritionists are our secret sauce.<br/>
          
          <br/>FYG was built on the core principle of
          empowering users to discover their own wellness journey. AI plays a
          central role in achieving this by tailoring guidance and
          recommendations to your specific needs and preferences.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
      <img
        className="m-2 object-cover rounded-2xl flex justify-center"
        src={mealplan}
        alt="A meal plan"
      />
      </div>
    </div>
  );
}

export default About;
