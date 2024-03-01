import { FC } from "react";
import ms from "../../assets/certificates/CertificateOfCompletion_Node.js Microservices 2019.pdf";
import pattern from "../../assets/certificates/CertificateOfCompletion_Node.js Design Patterns.pdf";
import security from "../../assets/certificates/CertificateOfCompletion_Node.js Security.pdf";
import { FaWindowClose } from "react-icons/fa";

function extractTitle(str: string) {
  const title = str.split("/");
  return title[title.length - 1];
}

const CertificateModal: FC<{ certificate: string; closeModal: () => void }> = ({
  certificate,
  closeModal,
}) => {
  const defineSource = () => {
    const title = extractTitle(certificate);
    switch (title) {
      case "ms_screen.jpg":
        return ms;
      case "pattern_screen.jpg":
        return pattern;
      case "security_screen.jpg":
        return security;
      default:
        return "Source was not defined";
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FaWindowClose
          style={{ fontSize: "24px", cursor: "pointer", alignSelf: "flex-end" }}
          onClick={closeModal}
        />
        {<iframe src={defineSource()} width={800} height={600} />}
      </div>
    </div>
  );
};

export default CertificateModal;
