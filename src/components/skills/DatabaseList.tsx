import React, { FC } from "react";
import { Technology } from "../../dataStorage/technologies";

const DatabaseList: FC<{
  list: Technology[];
}> = ({ list }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {list.map((select) => (
        <React.Fragment key={select.id}>
          {select.duration && (
            <div
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
          )}

          {select.children &&
            select.children.map((tech) => (
              <div
                style={{
                  border: "1px solid",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "5px",
                }}
                key={tech.id}
              >
                {tech.source && typeof tech.source !== "string" ? (
                  <div
                    style={{
                      fontSize: "35px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <tech.source />
                  </div>
                ) : null}

                <div>
                  <h4>{tech.title}</h4>
                  <p>Year: {tech.duration}</p>
                </div>
              </div>
            ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DatabaseList;
