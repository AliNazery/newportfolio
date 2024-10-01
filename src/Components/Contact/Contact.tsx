import React from "react";
import SectionTitle from "../Common/Title/SectionTitle";
import Textarea from "../Contact/Textarea"
import { EmailSvg, LocationSvg, PhoneSvg, SendSvg, ShareSvg } from "../Common/Icon/svg";
import SocialMediaList from "./SocialMediaList";

export default function Contact() {
  return (
    <section
      className="contact section section--white bg-[#fff] dark:bg-[#232323] pt-[100px] px-[30px] pb-[76px]"
      id="contact"
    >
      <div className="container w-full mx-auto px-12 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <SectionTitle
          title="Contact Me"
          subtitle="Feel Free To Contact Me Any Time"
        />
        <div
          className="row opacity-100 transform-none flex flex-wrap -mx-3"
          //   style="opacity:0;transform:translateY(80px) translateZ(0)"
        >
          <div className="xl:w-7/12 flex-[0_0_auto] max-w-full px-3">
            <form
              className="contact-form needs-validation card card--light bg-[#f8f9fa] dark:bg-[#1D1D1D] p-[30px] rounded-[20px] mb-6 border-0 transition-all duration-500 ease-in"
              action="javascript:throw new Error(&#x27;A React form was unexpectedly submitted.&#x27;)"
            >
              <div className="row flex flex-wrap -mx-3 ">
                <div className="md:w-6/12 md:flex-[0_0_auto] mb-6 shrink-0 w-full max-w-full px-3">
                  <input
                    type="text"
                    className="dark:placeholder:text-[#eeebeb] rounded-[20px] py-3 px-[20px] border-1 border-solid border-[#f8f9fa] block w-full text-[1rem] font-normal leading-6 text-[#212529] dark:text-[#eeeded] appearance-none bg-[#fff] dark:bg-[#232323] bg-clip-border transition-[border-color,_box-shadow] duration-150 ease-in-out"
                    id="name"
                    placeholder="Enter Your Name"
                    // required=""
                    // maxLength="500"
                    name="senderName"
                  />
                </div>
                <div className="md:w-6/12 md:flex-[0_0_auto] mb-6 shrink-0 w-full max-w-full px-3">
                  <input
                    type="email"
                    className="dark:placeholder:text-[#eeebeb] rounded-[20px] py-3 px-[20px] border-1 border-solid border-[#f8f9fa] block w-full text-[1rem] font-normal leading-6 text-[#212529] dark:text-[#eeeded] appearance-none bg-[#fff] dark:bg-[#232323] bg-clip-border transition-[border-color,_box-shadow] duration-150 ease-in-out"
                    id="email"
                    placeholder="Enter Your Email"
                    // required=""
                    // maxLength="500"
                    name="senderEmail"
                  />
                </div>
                {/* <div className="col-md-6 mb-24">
                  <input
                    type="email"
                    className="form-control contact-form__input"
                    id="email"
                    placeholder="Enter Your Email"
                    // required=""
                    // maxLength="500"
                    name="senderEmail"
                  />
                </div> */}
              </div>
              <div className="row flex flex-wrap -mx-3">
                <div className="shrink-0 w-full max-w-full px-3 lg:w-full lg:flex-[0_0_auto] mb-6 ">
                  <input
                    type="text"
                    className="dark:placeholder:text-[#eeebeb] py-3 px-[20px] rounded-[20px] border-[1px] border-solid border-[#f8f9fa] block w-full text-[1rem] font-normal leading-6 text-[#212529] dark:text-[#eeeded] appearance-none bg-[#fff] dark:bg-[#232323] bg-clip-border transition-[border-color,_box-shadow] duration-150 ease-in-out"
                    id="subject"
                    placeholder="Enter Your Subject"
                    // required=""
                    // maxLength="500"
                    name="subject"
                  />
                </div>
                <div className="shrink-0 w-full max-w-full px-3 lg:w-full lg:flex-[0_0_auto] mb-6">
                  <Textarea
                    className="dark:placeholder:text-[#eeebeb] rounded-[20px] py-3 px-[20px] bordre-[1px] border-solid border-[#f8f9fa] outline-none block w-full text-[1rem] font-normal leading-6 text-[#212529] dark:text-[#eeebeb] appearance-none bg-[#fff] dark:bg-[#232323] bg-clip-padding overflow-auto transition-[border-color,_box-shadow] duration-150 ease-in-out"
                    id="message"
                    name="message"
                    placeholder="Enter your message here"
                    rows={5}
                    maxLength={1000}
                    required
                  />
                </div>
                <div className="shrink-0 max-w-full px-3 w-full flex-[0_0_auto]">
                  <button
                    type="submit"
                    className="btn-default btn__submit cursor-pointer appearance-button overflow-visible inline-flex items-center justify-center whitespace-nowrap align-middle relative dark:bg-[#44a56b] bg-[#764b9b] leading-[24px] border-0 text-white font-bold text-[16px] px-6 py-[10px] capitalize rounded-[20px] z-10 gap-[4px] transition-all duration-300 ease hover:bg-[#212529]"
                  >
                    <SendSvg />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="xl:w-5/12 xl:flex-[0_0_auto] shrink-0 w-full max-w-full px-3">
            <div className="contact__info card card--light bg-[#f8f9fa] dark:bg-[#1D1D1D] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-500 ease-in">
              <h4 className="contact__info-title text-[24px] dark:text-[#eeeded]">
                Let &#x27;s talk about everything!
              </h4>
              <p className="contact__info-desc mt-0 mb-4 dark:text-[#eeebeb]">
                Have a project or question? Contact me via email or use the form
                below. I look forward to connecting!
              </p>
              <div className="contact__info-items">
                <div className="contact__info-item mb-4 flex items-center gap-[10px]">
                  <span className="contact__info-item-icon text-[#fff]  text-[16px] w-[40px] h-[40px] flex items-center justify-center bg-[#764b9b] dark:bg-[#44a56b] rounded-[50%]">
                    <PhoneSvg />
                  </span>
                  <span className="contact__info-item-value font-bold text-[16px] dark:text-[#eeeded]">
                    +(93) 7837-40098
                  </span>
                </div>
                <div className="contact__info-item mb-[16px] flex items-center gap-[10px]">
                  <span className="contact__info-item-icon text-[#fff] text-[16px] w-[40px] h-[40px] flex items-center justify-center bg-[#764b9b] dark:bg-[#44a56b] rounded-[50%]">
                    <EmailSvg />
                  </span>
                  <span className="contact__info-item-value font-bold text-[16px] dark:text-[#eeeded]">
                    alinazery.dev@gmail.com
                  </span>
                </div>
                <div className="contact__info-item mb-4 flex items-center gap-[10px]">
                  <span className="contact__info-item-icon text-[#fff] text-[16px] w-[40px] h-[40px] flex items-center justify-center bg-[#764b9b] dark:bg-[#44a56b] rounded-[50%]">
                    <LocationSvg />
                  </span>
                  <span className="contact__info-item-value font-bold text-[16px] dark:text-[#eeeded]">
                    Herat, Herat Afghanistan
                  </span>
                </div>
                <div className="contact__info-item mb-0 flex items-center gap-[10px]">
                  <span className="contact__info-item-icon text-[#fff] text-[16px] w-[40px] h-[40px] flex items-center justify-center bg-[#764b9b] dark:bg-[#44a56b] rounded-[50%]">
                    <ShareSvg />
                  </span>
                  <SocialMediaList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
