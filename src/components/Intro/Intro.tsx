import About from "./about/About";
import Header from "./header/Header";
import "./Intro.css";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodewars, SiUpwork } from "react-icons/si";
import { useContext, useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import Context from "../../utils/Context";

const Intro = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(ref);

  const getContext = useContext(Context);
  useEffect(() => {
    if (isVisible) {
      getContext?.setSection("Introduction");
    }
  }, [isVisible, getContext]);

  return (
    <section ref={ref} className="intro-wrapper" id="Introduction">
      <Header />
      <div className="social-networks">
        <div className="social-network">
          <FaGithubSquare />
          <span>GitHub</span>
        </div>
        <div className="social-network">
          <FaLinkedin />
          <span>LinkedIn</span>
        </div>
        <div className="social-network">
          <SiUpwork />
          <span>UpWork</span>
        </div>
        <div className="social-network">
          <MdEmail />
          <span>Email</span>
        </div>
        <div className="social-network">
          <SiLeetcode />
          <span>Leet Code</span>
        </div>
        <div className="social-network">
          <SiCodewars />
          <span>Code wars</span>
        </div>
      </div>
      <About />
    </section>
  );
};

export default Intro;
