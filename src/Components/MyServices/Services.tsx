import React from "react";
import SectionTitle from "../Common/Title/SectionTitle";
import { ServiceData } from "./serviceData";


const Services: React.FC = () => {
  return (
    <section
      className="services section section--light bg-[#f8f9fa] dark:bg-[#1D1D1D] pt-[100px] px-[30px] pb-[76px]"
      id="services"
    >
      <div className="container w-full px-3 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <SectionTitle
          title="My Services"
          subtitle="I Have Worked With A Number Of Clients."
        />
        <div className="row flex flex-wrap -mx-3">
          {ServiceData.map((service) => (
            <div
              key={service.id}
              className="shrink-0 w-full max-w-full px-3 xl:w-4/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto]"
            >
              <div className="service card card--white text-center transition-all duration-700 ease-out bg-[#fff] dark:bg-[#232323] mb-6 p-[30px] rounded-[20px] border-0">
                <img
                  alt={service.title}
                  loading="lazy"
                  width="250"
                  height="250"
                  decoding="async"
                  className="service__img p-[20px] m-auto object-cover border-none max-w-full h-auto align-middle"
                  src={service.imgSrc}
                />
                <div className="service__content">
                  <h5 className="service__content__title mb-[15px] text-[20px] dark:text-[#eeeded]">
                    {service.title}
                  </h5>
                  <p className="service__content__desc dark:text-[#eeebeb]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
