import { useState } from "react";
import "./app.css";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Skills from "./components/skills/Skills";
import Context from "./utils/Context";
import scrollToTheComponent from "./utils/scrollFunction";
import { FaCaretUp } from "react-icons/fa";
import RoadMap from "./components/RoadMap/RoadMap";

function App() {
  const [section, setSection] = useState<string | null>(null);
  const values = { section, setSection };

  const handlerScrollProcess = (id: string) => {
    scrollToTheComponent(id);
    setSection(id === "Introduction" ? null : id);
  };

  return (
    <Context.Provider value={values}>
      <div className="app-wrapper">
        <Intro />
        <Skills />
        <Projects />
        <RoadMap />
        {section && section !== "Introduction" && (
          <div className="return-container">
            <p>{section}</p>
            <button onClick={() => handlerScrollProcess("Introduction")}>
              <FaCaretUp />
            </button>
          </div>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
