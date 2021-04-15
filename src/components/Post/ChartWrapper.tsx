import { Chart } from "react-charts";
import { useMemo } from "react";

interface PostType {
  callName: string;
  textBody: string;
  likes: number;
  shares: number;
  dislikes: number;
  userImgSrc: string;
  history: any;
  id: number;
}

function ChartWrapper({
  contChart,
  post,
}: {
  contChart: { setShowChart: React.Dispatch<React.SetStateAction<boolean>> };
  post: PostType;
}) {
  const series = useMemo(
    () => ({
      showPoints: true,
    }),
    []
  );

  const axes = useMemo(
    () => [
      {
        primary: true,
        type: "time",
        position: "bottom",
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div className="flex flex-col justify-end">
      <div className="w-full h-60 rounded-xl my-2 overflow-scroll">
        <Chart data={post.history} series={series} axes={axes} tooltip />
      </div>
      <button
        className="ml-auto focus:outline-none text-black hover:text-blue-400"
        onClick={() => contChart.setShowChart(false)}
      >
        {"«"}
      </button>
    </div>
  );
}

export default ChartWrapper;
