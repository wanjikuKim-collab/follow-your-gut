import React from "react";
import nutritionist from "../Assets/nutritionist.png";
import CallToAction from "./CallToAction"

function GetStarted() {
  return (
    <div
      className={`flex flex-row h-full bg-green-light align-center p-14 items-center justify-center`}
    >
      <div className="w-1/2 text-left justify-between items-left px-6">
        <h2 className="text-5xl font-bold text-green-dark font-montserrat mb-4 text-left pb-4">
          Get started with one of our licensed nutritionists
        </h2>
        <img
          className="border rounded-full"
          src={nutritionist}
          alt="There is a nutritiomnist in a white lab coat displaying charts and graphs on a tablet"
        />
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <p className="text-green-dark font-light text-2xl leading-normal text-left px-2">
          FYG empowers Kenyans with personalized meal plans using local
          ingredients. We believe gut health starts with a diverse diet, and aim
          to unlock its potential for a healthier young local ingredients. We
          believe gut health starts with a diverse diet, and aim to unlock its
          potential for a healthier you!
        </p>
        <CallToAction text_color= "text-green-dark" bg_color= "bg-white" width= "w-1/2" link='/nutritionist' text= 'Consult a nutritionist'/>
      </div>
    </div>
  );
}

export default GetStarted;
