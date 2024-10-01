import SectionTitle from "../Common/Title/SectionTitle";
import { ProjectData } from "./Project";
import ProjectItem from "./ProjectItem";



export default function Projects() {
  return (
    <section
      className="project section section--white bg-[#fff] dark:bg-[#232323] pt-[100px] pb-[76px] px-[30px]"
      id="projects"
    >
      <div className="container w-full px-3 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <SectionTitle
          title="My Projects"
          subtitle="A Latest Creative Works In Design And Web"
        />
        <div className="row project__items flex flex-wrap -mx-3">
          {ProjectData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
