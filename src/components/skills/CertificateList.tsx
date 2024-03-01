import { FC, useEffect, useState } from "react";
import { Technology } from "../../dataStorage/technologies";

const CertificateList: FC<{
  list: Technology[];
  setSelectedCertificate: (v: string) => void;
}> = ({ list, setSelectedCertificate }) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  const handleCertificateModal = (source: string) => {
    if (source && screenSize > 880) setSelectedCertificate(source);
    return null;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "25px",
        flexWrap: "wrap",
      }}
    >
      {list.map((select) => (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          key={select.id}
        >
          <h4>{select.title}</h4>
          <div
            className="certificate-img"
            onClick={() => handleCertificateModal(select.source as string)}
          >
            <img src={select.source as string} alt={select.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateList;
