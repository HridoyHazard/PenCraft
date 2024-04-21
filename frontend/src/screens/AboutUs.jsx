import React from "react";
import about from "../assets/about.png";

const AboutUs = () => {
  return (
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div class="sm:flex items-center max-w-screen-xl">
      <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
          <img src={about} />
        </div>
      </div>
      <div class="sm:w-1/2 p-5">
        <div class="text">
          <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span class="text-indigo-600">Pencraft</span>
          </h2>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
