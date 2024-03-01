import Echart from "echarts-for-react";
import plan from "../../dataStorage/futurePlans";

const RoadGraph = () => {
  const option = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "tree",
        data: [plan],
        left: "2%",
        right: "2%",
        top: "30.5%",
        bottom: "10%",
        symbol: "emptyCircle",
        orient: "BT",
        expandAndCollapse: true,
        label: {
          position: "bottom",
          rotate: 0,
          verticalAlign: "top",
          align: "center",
        },
        leaves: {
          label: {
            position: "top",
            rotate: 90,
            verticalAlign: "middle",
            align: "left",
          },
        },
        emphasis: {
          focus: "descendant",
        },
        animationDurationUpdate: 750,
      },
    ],
  };

  return <Echart option={option} style={{ width: "100%", height: "100vh" }} />;
};

export default RoadGraph;
