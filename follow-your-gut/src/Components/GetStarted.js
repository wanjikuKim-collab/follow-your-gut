import React from "react";
import nutritionist from "../Assets/nutritionist.png";
import CallToAction from "./CallToAction"

function GetStarted() {
  return (
    <div
      className={`flex flex-col md:flex-row h-full bg-green-light align-center md:p-14 items-center justify-center md:text-left`}
    >
      <div className="md:w-1/2 justify-between">
        <h2 className=" text-3xl md:text-5xl font-bold text-green-dark font-montserrat mb-4 pb-4">
          Get started with one of our licensed nutritionists
        </h2>
        <img
          className=" pb-2 rounded-full"
          src={nutritionist}
          alt="There is a nutritiomnist in a white lab coat displaying charts and graphs on a tablet"
        />
      </div>
      <div className="md:w-1/2 flex flex-col items-center">
        <p className="text-green-dark font-light text-xl md:text-2xl md:pl-14 leading-normal px-2">
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
