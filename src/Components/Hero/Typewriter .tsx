

// components/TypewriterComponent.jsx
import { Typewriter } from "react-simple-typewriter";
// import "react-simple-typewriter/dist/index.css";
import "react-simple-typewriter/dist/index"

const TypewriterComponent = () => {
  return (
    <div className="Typewriter" data-testid="typewriter-wrapper">
      <span className="Typewriter__wrapper text-white text-4xl font-bold">
        <Typewriter
          words={["Designer", "Freelancer", "Front-End-Developer"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
};

export default TypewriterComponent;
