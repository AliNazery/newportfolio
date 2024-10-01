import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Hero from "@/Components/Hero/Hero";
import Services from "@/Components/MyServices/Services";
import Projects from "@/Components/Projects/Projects";
import Testimonial from "@/Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ImageSlider/> */}
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
    </>
  );
}
