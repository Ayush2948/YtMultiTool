import React from "react";
import frameImage from "../assets/frame-about.png";
import image from "../assets/Pic-about.png";
import OurVision from "../assets/OurVision.png";
import OurMission from "../assets/OurMission.png";
import { Link } from "react-router-dom";

const About = ({ isLoggedIn }) => {
  return (
    <div className="flex-col mx-12 my-6">
      <div className="flex mt-10 mb-20 mx-6">
        <div className="w-11/12 h-full my-auto">
          <div className="text-3xl font-bold">How ClearPath Works?</div>
          <div className="text-xl font-medium mr-10 mt-6">
            ClearPath is a technology that aims to revolutionize emergency
            response systems and optimize urban traffic management.Our Dynamic
            Traffic Signaling system intelligently reallocates signal times
            based on traffic density, redistributing time to lanes where
            congestion is highest. Meanwhile, our Emergency Vehicle Detection
            technology accurately detects and prioritizes the passage of
            emergency vehicles by reallocating time to lanes wherever an
            emergency vehicle is detected. By seamlessly integrating these
            solutions, ClearPath ensures efficient and uninterrupted emergency
            response.
          </div>
        </div>
        <div className="relative w-11/12 max-w-[450px] ">
          <img src={frameImage} alt="Pattern" loading="lazy" />

          <img
            src={image}
            alt="template hero image"
            loading="lazy"
            className="absolute -top-4 right-4"
          />
        </div>
      </div>
      <div className="flex mt-12">
        <div className="flex-col m-6">
          <div className="flex">
            <div className="my-2 justify-center">
              <img
                src={OurMission}
                alt="template hero image"
                width={50}
                height={50}
                loading="lazy"
                className="mr-2"
              />
            </div>
            <div className="text-3xl font-bold my-2">Our Mission</div>
          </div>
          <div className="text-lg font-medium">
            Be one of the top analytics consultancy organizations which operates
            in an ethically upright manner to create fair economic value for all
            its stakeholders.
          </div>
        </div>
        <div className="flex-col m-6 justify-center">
          <div className="flex">
            <div>
              <img
                src={OurVision}
                alt="template hero image"
                width={50}
                height={50}
                loading="lazy"
                className="mr-2"
              />
            </div>
            <div className="text-3xl font-bold my-2">Our Vision</div>
          </div>
          <div className="text-lg font-medium">
            To serve our clients by effectively delivering superior value-adding
            solutions for analytical problems using our expertise in data
            science and machine learning.
          </div>
        </div>
      </div>
      <div className="flex-col w-full my-6">
        <div className="text-3xl text-center my-10 font-bold">
          Meet the minds behind ClearPath
        </div>
        <div className="text-2xl text-center my-4 font-bold">Team Lead</div>
        <div>
          <div className="flex flex-wrap justify-center m-4">
            <div className="flex-col m-10 max-w-lg border-4 rounded-3xl">
              <img
                src="https://avatars.githubusercontent.com/u/72240452?v=4"
                alt="profile image"
                width={100}
                height={100}
                loading="lazy"
                className="rounded-full my-2 mx-auto"
              />
              <div className="text-4xl my-2 text-center font-semibold">
                Samarth Asthana
              </div>
              <div className="text-2xl my-2 text-center font-medium">AI/ML</div>
              <div className="text-lg m-4 text-center w-72 font-medium ">
                PhD University of Colorado, USA. Expert in mathematical modeling
                with more than 20 years of research and development experience
                in worldclass research organizations both in India and the USA.
              </div>
              <div>
                <Link to="https://www.linkedin.com/in/samarth-asthana/">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                    alt="LinkedIn Icon"
                    width={50}
                    height={50}
                    loading="lazy"
                    className="my-2 mx-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-2xl text-center my-4 font-bold">Team Members</div>
        <div className="flex flex-wrap justify-center m-4">
          <div className="flex-col m-10 max-w-xl border-4 rounded-3xl">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQFkKdHGv2S2VQ/profile-displayphoto-shrink_400_400/0/1701117745768?e=1715817600&v=beta&t=U71hS-LqMvZPPceUK5L-GpOAtIxkcPmGLftfHw3kwgs"
              alt="profile image"
              width={100}
              height={100}
              loading="lazy"
              className="rounded-full my-2 mx-auto"
            />
            <div className="text-4xl my-2 text-center font-semibold">
              Arihant Bharadwaj
            </div>
            <div className="text-2xl my-2 text-center font-medium">AI/ML</div>
            <div className="text-lg m-4 text-center w-72 font-medium ">
              PhD University of Colorado, USA. Expert in mathematical modeling
              with more than 20 years of research and development experience in
              worldclass research organizations both in India and the USA.
            </div>
            <div>
              <Link to="https://www.linkedin.com/in/arihant-bharadwaj-434b22226/">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  alt="LinkedIn Icon"
                  width={50}
                  height={50}
                  loading="lazy"
                  className="my-2 mx-auto"
                />
              </Link>
            </div>
          </div>
          <div className="flex-col m-10 max-w-xl border-4 rounded-3xl">
            <img
              src="https://media.licdn.com/dms/image/D5603AQEhNMVMyXjmqw/profile-displayphoto-shrink_400_400/0/1679211683920?e=1715817600&v=beta&t=54342nMjQPA_Mo6XECvsGvGHsEpTetRKPmPbDklmWkQ"
              alt="profile image"
              width={100}
              height={100}
              loading="lazy"
              className="rounded-full my-2 mx-auto"
            />
            <div className="text-4xl my-2 text-center font-semibold">
              Kartik Agarwal
            </div>
            <div className="text-2xl my-2 text-center font-medium">AI/ML</div>
            <div className="text-lg m-4 text-center w-72 font-medium ">
              PhD University of Colorado, USA. Expert in mathematical modeling
              with more than 20 years of research and development experience in
              worldclass research organizations both in India and the USA.
            </div>
            <div>
              <Link to="https://www.linkedin.com/in/kartikhustles/">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  alt="LinkedIn Icon"
                  width={50}
                  height={50}
                  loading="lazy"
                  className="my-2 mx-auto"
                />
              </Link>
            </div>
          </div>
          <div className="flex-col m-10 max-w-xl border-4 rounded-3xl">
            <img
              src="https://media.licdn.com/dms/image/D5603AQHpwmMKKaS2KA/profile-displayphoto-shrink_400_400/0/1666546297158?e=1715817600&v=beta&t=rQILomXLfjrHOydfrRl5fC3gA5KYWFreOxzgoQWKS-M"
              alt="profile image"
              width={100}
              height={100}
              loading="lazy"
              className="rounded-full my-2 mx-auto"
            />
            <div className="text-4xl my-2 text-center font-semibold">
              Ayush Patil
            </div>
            <div className="text-2xl my-2 text-center font-medium">AI/ML</div>
            <div className="text-lg m-4 text-center w-72 font-medium ">
              PhD University of Colorado, USA. Expert in mathematical modeling
              with more than 20 years of research and development experience in
              worldclass research organizations both in India and the USA.
            </div>
            <div>
              <Link to="https://www.linkedin.com/in/ayushp2948/">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  alt="LinkedIn Icon"
                  width={50}
                  height={50}
                  loading="lazy"
                  className="my-2 mx-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-3xl font-bold mt-6 ">Key Features</div>
      <div>
        <div className="text-2xl font-semibold mt-2">
          Dynamic Traffic Signaling
        </div>
        <div className="text-lg font-medium">
          Adaptive signal adjustments optimize traffic flow. Emergency Vehicle
        </div>
        <div className="text-2xl font-semibold mt-4">Detection</div>
        <div className="text-lg font-medium">
          Cutting-edge AI identifies and prioritizes emergency vehicles.
        </div>
        <div className="text-2xl font-semibold mt-4">
          User-Friendly Interface
        </div>
        <div className="text-lg font-medium">
          Intuitive design for seamless interaction.
        </div>
      </div> */}
    </div>
  );
};

export default About;
