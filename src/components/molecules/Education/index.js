import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Diploma in IT
              </h3>
              <p className="text-sm text-neutral font-semibold">2022 - 2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have completed ICS and a one-year diploma in Information
              Technology in Pakistan.
            </p>
          </div>

          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Mern Stack Developer
              </h3>
              <p className="text-sm text-neutral font-semibold">2024</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have successfully completed the{" "}
              <b>Mern Stack Web Developer Expert</b> Course from Udemy.
            </p>
          </div>

          {/* SSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Digital Marketing & Seo
              </h3>
              <p className="text-sm text-neutral font-semibold">2023 - 2024 </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have completed <b>Digital Marketing</b> from DigiSkill, where I
              gained comprehensive training, and <b>SEO</b> from Udemy, earning
              advanced certification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
