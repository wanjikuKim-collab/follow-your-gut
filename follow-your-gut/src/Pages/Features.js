import React from "react";
import FeatureCard from "../Components/FeatureCard";
import { FaCheck } from "react-icons/fa";

function Features() {
  return (
    <div className="features h-full align-center p-6 items-center justify-center">
      <h1 className="features_heading text-3xl md:text-5xl font-bold text-green-dark font-montserrat mb-4 text-center pb-4">What We Provide</h1>
      <p className="features_description text-slate-600 mb-6 tracking-wide text-xl md:text-2xl">Eat well, feel great. FYG uses AI to create personalized wellness plans just for you based on your assessment. </p>
      <div className="feature_cards_container md:grid grid-cols-3 wrap gap-4 justify-between">
        <FeatureCard
          icon={<FaCheck />}
          heading="Assessment and Consultation"
          bg_color='gray-light'
          paragraph="Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page."
        />
        <FeatureCard
          icon={<FaCheck />}
          heading="Diet and Meal Planning"
          bg_color='gray-dark'
          paragraph="Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page."
        />
        <FeatureCard
          icon={<FaCheck />}
          heading="Dietary Supplements"
          bg_color='gray-light'
          paragraph="Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page."
        />
      </div>
    </div>
  );
}

export default Features;
