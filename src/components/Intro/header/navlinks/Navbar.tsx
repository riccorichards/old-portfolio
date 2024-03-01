import { useContext } from "react";
import scrollToTheComponent from "../../../../utils/scrollFunction";
import "./Navbar.css";
import Context from "../../../../utils/Context";
import resumeFile from "../../../../assets/RICHARD T.pdf";

const Navbar = () => {
  const getContext = useContext(Context);

  const handlerScrollProcess = (id: string) => {
    if (getContext) {
      scrollToTheComponent(id);
      getContext.setSection(id);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Richard_T_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ul className="nav-links-wrapper">
      <li onClick={() => handlerScrollProcess("Introduction")}>Introduction</li>
      <li onClick={() => handlerScrollProcess("Skills")}>Skills</li>
      <li onClick={() => handlerScrollProcess("Projects")}>Projects</li>
      <li onClick={() => handlerScrollProcess("RoadMap")}>Road Map</li>
      <li onClick={handleDownloadResume}>Resume</li>
    </ul>
  );
};

export default Navbar;
