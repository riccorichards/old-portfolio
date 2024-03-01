import "./Skills.css";
import technologies from "./../../dataStorage/technologies";
import { useContext, useEffect, useRef, useState } from "react";
import CertificateModal from "./CertificateModal";
import CertificateList from "./CertificateList";
import TechnologiesList from "./TechnologiesList";
import DatabaseList from "./DatabaseList";
import useOnScreen from "../../hooks/useOnScreen";
import Context from "../../utils/Context";

const Skills = () => {
  const categories = Object.keys(technologies);
  const [selectedTech, setSelectedTech] = useState(technologies.Certificate);
  const [selectedTitle, setSelectedTitle] = useState("Certificate");
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(ref);

  const getContext = useContext(Context);
  useEffect(() => {
    if (isVisible) {
      getContext?.setSection("Skills");
    }
  }, [isVisible, getContext]);

  const handleSelectionProcess = (selectedKey: string) => {
    for (const key in technologies) {
      if (key === selectedKey) {
        setSelectedTech(technologies[key]);
        setSelectedTitle(selectedKey);
      }
    }
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };
  return (
    <section className="skills-wrapper" id="Skills" ref={ref}>
      <h1>My Skills</h1>
      <div className="skills-categories">
        {categories.map((category) => (
          <button
            onClick={() => handleSelectionProcess(category)}
            style={{
              backgroundColor:
                selectedTitle === category ? "rgba(192, 193, 193, 0.522)" : "",
              color: selectedTitle === category ? "#fff" : "",
            }}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="technologies-wrapper">
        {selectedTitle === "Certificate" ? (
          <CertificateList
            list={selectedTech}
            setSelectedCertificate={setSelectedCertificate}
          />
        ) : selectedTitle !== "Database" ? (
          <TechnologiesList list={selectedTech} />
        ) : (
          <DatabaseList list={selectedTech} />
        )}
      </div>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          closeModal={closeModal}
        />
      )}
    </section>
  );
};

export default Skills;
