import React from "react";

function About() {
  return (
    <div className="flex flex-row h-full align-center p-14 items-center justify-center">
      <div className="w-1/2 flex flex-col text-left justify-between items-left px-6">
        <h2 className="text-5xl font-bold text-green-dark font-montserrat mb-4 text-left pb-4">The FYG Approach to Wellness</h2>
        <h3 className="text-3xl font-montserrat font-bold text-green-dark mb-4">Powered by AI for a Personalized Journey</h3>
        <p className="text-green-dark font-light text-2xl leading-normal text-left px-2">
          Imagine a wellness companion that understands your individual needs and
          preferences. With FYG, that companion becomes a reality. Our AI
          technology and certified nutritionists are our secret sauce.<br/>
          
          FYG was built on the core principle of
          empowering users to discover their own wellness journey. AI plays a
          central role in achieving this by tailoring guidance and
          recommendations to your specific needs and preferences.
        </p>
      </div>
      <div className="w-1/2">
        <img
            className="border rounded-full"
            src={}
            alt="A meal plan"
          />
      </div>
    </div>
  );
}

export default About;
