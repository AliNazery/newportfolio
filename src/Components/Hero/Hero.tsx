"use client";
import React from "react";
import TypewriterComponent from "./Typewriter ";
import Link from "next/link";
import { MoreAboutSvg } from "../Common/Icon/svg";
import HeroSocialMedia from "./HeroSocialMedia";
import InfoSection from "./InfoSection";

export default function Hero() {
  return (
    <section className="hero vh-100 px-[30px] bg-cover bg-center relative z-10">
      <img
        alt=""
        fetchPriority="high"
        decoding="async"
        data-nimg="fill"
        className="hero__img absolute inset-0 h-full w-full text-transparent m-0 object-cover border-none max-w-full align-middle"
        sizes="100vw"
        src="/images/bg1.jpg"
      />
      <div className="container transform-none opacity-100 w-full mx-auto px-3">
        <div className="row -mx-3 mt-0 flex flex-wrap">
          <div className="col-lg-12 flex-none w-full mt-0 px-3 max-w-full">
            <div className="hero__content h-screen relative flex justify-between flex-col py-[30px] ">
              <HeroSocialMedia />
              <div className="hero__banner relative">
                <div className="banner">
                  <h6 className="banner__subtitle text-white text-h6 font-medium tracking-wide !important">
                    👋 Hi There,
                  </h6>
                  <h1 className="banner__title font-black text-white !important flex gap-[5px] text-2xl my-[0.67em] mx-0">
                    I Am a
                    <TypewriterComponent />
                  </h1>
                  <p className="banner__desc  max-w-[450px] mt-5 mb-7 text-white !important">
                    As a freelance designer and front-end developer, I transform
                    visions into captivating websites. My unique blend of
                    creativity and technical skills ensures your online presence
                    stands out.
                  </p>
                  <Link
                    href="#about"
                    className="bg-white mb-24 text-[#764b9b] btn-default outline-none hover:bg-[#343a40] "
                  >
                    <MoreAboutSvg />
                    <span className="">More About Me</span>
                    {/* hover:content-[''] hover:absolute hover:top-0 hover:left-0 hover:w-full hover:h-full hover:bg-[#343a40] -hover:z-10 hover:origin-center hover:rounded-[20px hover:transition-all hover:duration-300 hover:ease hover:scale-0] */}
                  </Link>
                </div>
              </div>
              <div className="hero__info">
                <InfoSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
