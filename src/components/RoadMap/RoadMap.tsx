import { useContext, useEffect, useRef } from "react";
import RoadGraph from "./RoadGraph";
import "./RoadMap.css";
import useOnScreen from "../../hooks/useOnScreen";
import Context from "../../utils/Context";

const RoadMap = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(ref);

  const getContext = useContext(Context);
  useEffect(() => {
    if (isVisible) {
      getContext?.setSection("Road Map");
    }
  }, [isVisible, getContext]);

  return (
    <section id="RoadMap" ref={ref}>
      <h1>Road Map</h1>
      <RoadGraph />
    </section>
  );
};

export default RoadMap;
