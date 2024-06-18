"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Button from "../Button";
import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className=" fill-primary2">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

function ModalVideo({ onClose }: { onClose: () => void }) {
  const [videoLoading, setVideoLoading] = useState(true);

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div className="App">
      <section className="modal__bg">
        <div className="modal__align  ">
          <div className="modal__content relative ">
            <Icon
              icon="vaadin:close-big"
              className="modal_close absolute -right-20 -top-10 h-12 w-12 cursor-pointer rounded-full bg-white p-2 text-primary"
              // color="#2A3E95"
              onClick={onClose}
            />
            <div className="modal__video-align">
              {videoLoading ? (
                <div className="modal__spinner">
                  <Icon
                    icon="eos-icons:bubble-loading"
                    className="modal_close h-12 w-12 cursor-pointer rounded-full bg-white p-2 text-primary"
                  />
                </div>
              ) : null}

              <video
                className=" modal__video-style bg-mainBlack py-10"
                onLoadedData={spinner} // Use onLoadedData to hide the spinner when the video is ready to play
                width="800"
                height="500"
                controls
                controlsList="nodownload"
                autoPlay
              >
                <source src="/videos/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const List = ({ text }: { text: string }) => (
  <li className=" flex items-center gap-2 ">
    <span>{checkIcon} </span> {text}
  </li>
);

const About2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <section id="about" className="about-area ptb-80 bg-f6f6f6">
      <div className="container">
        <div className="section-title">
          <h2>
            The
            <span className="mx-2">Best Digicruiter</span>
            Experience
          </h2>
          <p>
            Revolutionizing hiring process by adding Human touch and considering
            Real World Interview challenges including challenges of candidates
            with Visual disability, Ear disability and Voice disability at some
            extent.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="col-lg-6 col-md-12">
            <div className="about-addax">
              <div className="section-title">
                <h2>
                  Save Time & Cost While
                  <span className="mx-2">Hiring Right</span>
                  Candidate
                </h2>
                <p>
                  LegoSapien intent to reduce human interviewer time that to
                  take initial interview rounds, where most of the candidates
                  rejected, so that they can focus on their actual work and
                  LegoSapien make sure to get the right candidate to be hired.
                </p>
              </div>

              <div className="flex">
                <ul className="pull-left">
                  <List text={"No Static/Traditional Question Bank Sets"} />
                  <List text={"Consistency in Interviewing"} />
                  <List
                    text={
                      "Save actual Human Interviewer Time and cost related to them"
                    }
                  />
                </ul>

                <ul>
                  <List text={"Unique 360° Candidate Interview Score"} />
                  <List text={"Humanoid candidate Interview anytime"} />
                  <List text={"Multiple Domain Interview"} />
                </ul>
              </div>

              {/* <Link to="#" className="btn btn-primary">Read More</Link> */}
              <Button
                styleWrapper=" w-32 rounded-[30px] !py-2 !px-4 hover:text-primary2 bg-primary2 hover:bg-white"
                label="Read More"
              />
            </div>
          </div>

          {/* remove max-w-lg if style affect */}
          <div className="col-lg-6 col-md-12 max-w-lg">
            <div className="about-video">
              <Image
                src="/images/intro_logo-2.jpeg"
                width={380}
                height={230}
                className="w-full"
                alt="about"
              />
              <div className="video-btn">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                  // to="#"
                  className="popup-youtube"
                >
                  <Icon
                    icon="solar:play-bold"
                    className="absolute top-5 right-5  h-8 w-8 "
                  />
                </Link>

                {isOpen && <ModalVideo onClose={() => setIsOpen(false)} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
