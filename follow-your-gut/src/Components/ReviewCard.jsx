import React from "react";
import { MdStarRate } from "react-icons/md";

function ReviewCard({ testimonial, author, png }) {
  return (
    <div className="testimonial_card relative w-96 rounded-xl px-8 pt-2 pb-20 bg-green-light mix-blend-luminosity group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500">
      <i className="testimonail_card_icon flex text-green-dark text-3xl p-1">
        <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
      </i>
      <p className="testimonial_card_content font-montserrat text-green-dark my-3 text-left text-lg">
        {testimonial}
      </p>
      <div className="avatar absolute bottom-1 text-left mx-auto flex items-center">
        <img
          class="w-20 h-20 rounded-full"
          src={png}
          alt="user avatar"
          height="220"
          width="220"
          loading="lazy"
        />
        <span className="text-xl text-green-dark px-2 font-montserrat font-bold">
          {author}
        </span>
      </div>
    </div>
  );
}

export default ReviewCard;
