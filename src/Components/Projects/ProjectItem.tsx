// components/Projects/ProjectItem.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { DetailSvg, ProjectPlusSvg } from "../Common/Icon/svg";

interface ProjectItemProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  subtitle,
  imageSrc,
  link,
}) => {
  return (
    <div className="shrink-0 w-full max-w-full px-3 mt-0 xl:w-4/12 xl:flex-[0_0_auto] lg:w-6/12 lg:flex-[0_0_auto] md:w-6/12 md:flex-[0_0_auto] transform-none opacity-100">
      <div className="project-item card card--light bg-[#f8f9fa] dark:bg-[#1D1D1D] mb-6 p-[30px] rounded-[20px] border-0 transition-all duration-700 ease-in-out hover:text-[#764b9b] dark:hover:text-[#44a56b] group">
        <div className="project-item__image relative overflow-hidden rounded-[20px] aspect-[11/9]">
          <Image
            alt="project"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="project-item__image__img object-cover align-middle max-w-full h-auto border-none rounded-[20px] transition-transform duration-700 ease-in-out transform group-hover:scale-110"
            src={imageSrc}
          />
          <div className="project-item__image__btn absolute top-[20px] left-[20px] opacity-0 group-hover:opacity-100">
            <div className="btn-view text-[#fff] border-none dark:bg-[#44a56b] bg-[#764b9b] text-[25px] font-black rounded-[50%] flex items-center justify-center w-[35px] h-[35px]">
              <ProjectPlusSvg />
            </div>
          </div>
        </div>
        <div className="project-item__content flex justify-between pt-[20px]">
          <div className="project-item__content__info">
            <h5 className="project-item__content__title capitalize text-[#152035] dark:text-[#eeeded] mb-[6px] text-[20px] transition-colors duration-500 ease-in-out dark:group-hover:text-[#44a56b] group-hover:text-[#764b9b]">
              {title}
            </h5>
            <p className="project-item__content__subtitle mb-0 capitalize font-normal text-[15px] dark:text-[#eeebeb]">
              {subtitle}
            </p>
          </div>
          <Link
            className="btn-link border-0 bg-transparent text-[30px] font-medium text-[#454545] dark:text-[#eeebeb] transition-colors duration-500 ease-in-out dark:group-hover:text-[#44a56b] group-hover:text-[#764b9b]"
            href={link}
          >
            <DetailSvg />
          </Link>
        </div>
        <div className="project-item__light z-[999] absolute top-0 bottom-0"></div>
      </div>
    </div>
  );
};

export default ProjectItem;
