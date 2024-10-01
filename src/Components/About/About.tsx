import React from "react";
import SectionTitle from "../Common/Title/SectionTitle";
import { DownloadSvg } from "../Common/Icon/svg";
import Features from "./Features";
import { addressData, educationData, experienceData } from "./Data";

import TimelineItem from "./TimelineItem";
import DetailsListItem from "./DetailsListItem";


export default function About() {
  return (
    <section
      className="about section bg-white pt-[100px] pb-[76px] lg:px-[30px] dark:bg-[#232323]"
      id="about"
    >
      <div className="container sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] px-3 mx-auto  w-full xl:max-w-[1170px]">
        <SectionTitle
          title="About Me"
          subtitle="Essential Information About Me and My Passions."
        />
        <div
          className="row transform-none opacity-100 flex flex-wrap -mx-3 translateZ(0)translate-y-[80px] translate-z-0"
          //   style="opacity:0;transform:translateY(80px) translateZ(0)"
        >
          <div className=" mb-6 flex-none shrink-0 w-full max-w-full px-3 xl:flex-[0_0_auto] xl:w-[41.66666667%]">
            <div className="profile card card--img relative h-[400px] w-[400px] p-0 mb-6 aspect-[9/9]">
              <img
                alt=""
                loading="lazy"
                width={800}
                height={800}
                decoding="async"
                data-nimg="1"
                className="profile__img rounded-[20px] object-cover border-none max-w-full align-middle"
                src="/images/alibg.JPG"
              />
            </div>
          </div>
          <div className="col-xl-7 flex-none w-full max-w-full px-3 xl:flex-[0_0_auto] xl:w-[58.3333%]">
            <div className="bg-[#f8f9fa] dark:bg-[#1D1D1D] mb-6 p-[30px] rounded-[20px] transition-all border-0">
              <h3 className="text-[28px] text-[#152035] dark:text-[#eeeded] font-black mb-[8px]">
                Hello, I &#x27;m Ali Nazery
              </h3>
              <p className="mb-[25px] dark:text-[#eeebeb]">
                As a Front-end Developer, I excel in creating responsive,
                user-focused web experiences using modern technologies like
                React.js, Next.js, and TailwindCSS. I&#x27;m passionate about
                building designs that are both visually appealing and highly
                functional. My goal is to deliver innovative solutions that meet
                your business needs and bring your digital vision to life.
              </p>
              <ul className="inline-block w-full mb-[20px] pl-0">
                {addressData.map((item, index) => (
                  <DetailsListItem
                    key={index}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </ul>
              <div className="details__btn">
                <a
                  href="/assets/images/cv.pdf"
                  className="btn-default hover:bg-[#343a40] outline-none inline-flex items-center justify-center cursor-pointer text-center whitespace-nowrap align-middle relative bg-[#764b9b] dark:bg-[#44a56b] leading-[24px] border-0 text-white text-[16px] font-bold p-[10px] px-[24px] capitalize rounded-[20px] z-[1] gap-[4px] transition-all duration-300 ease-in-out
"
                  download=""
                >
                  <DownloadSvg />
                  <span>Download My CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Features />
        <div
          className="row opacity-100 transform-none flex flex-wrap -mx-3 translateZ(0)translate-y-[80px] translate-z-0"
          //   style="opacity:0;transform:translateY(80px) translateZ(0)translate-y-[80px] translate-z-0"
        >
          <div className="col-lg-6 shrink-0 w-full max-w-full px-3 lg:w-1/2 lg:flex-[0_0_auto]">
            <div className="timeline card card--light flex flex-row bg-[#f8f9fa] dark:bg-[#1D1D1D] gap-[24px] bg-[f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-500 ease-out">
              <div className="timeline__single flex-[1_1]">
                <h4 className="timeline__single__title mb-0 text-[24px] leading-[1.4] font-black text-[#152035] dark:text-[#eeeded]">
                  My Experience
                </h4>
                {experienceData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.title}
                    place={item.place}
                    year={item.year}
                    description={item.description}
                    imgSrc={item.imgSrc}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 shrink-0 w-full max-w-full px-3 lg:w-1/2 lg:flex-[0_0_auto]">
            <div className="timeline card card--light flex flex-row bg-[#f8f9fa] dark:bg-[#1D1D1D] gap-[24px] bg-[f8f9fa] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-500 ease-out">
              <div className="timeline__single flex-[1_1]">
                <h4 className="timeline__single__title mb-0 text-[24px] leading-[1.4] font-black text-[#152035] dark:text-[#eeeded]">
                  My Education
                </h4>
                {educationData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.title}
                    place={item.place}
                    year={item.year}
                    description={item.description}
                    imgSrc={item.imgSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
