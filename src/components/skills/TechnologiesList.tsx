import { FC } from "react";
import { Technology } from "../../dataStorage/technologies";

const TechnologiesList: FC<{
  list: Technology[];
}> = ({ list }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {list.map((select) => (
        <div
          key={select.id}
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            border: "1px solid",
            padding: "5px",
          }}
        >
          {select.source && typeof select.source !== "string" ? (
            <div
              style={{
                fontSize: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <select.source />
            </div>
          ) : null}
          <div>
            <h4>{select.title}</h4>
            <p>Year: {select.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesList;
