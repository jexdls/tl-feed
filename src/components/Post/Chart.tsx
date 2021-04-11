function Chart({
  contChart,
}: {
  contChart: { setShowChart: React.Dispatch<React.SetStateAction<boolean>> };
}) {
  return (
    <div className="flex flex-col justify-end">
      <div className="w-full h-16 bg-gray-100 rounded-xl my-2"></div>
      <button
        className="ml-auto focus:outline-none text-black hover:text-blue-400"
        onClick={() => contChart.setShowChart(false)}
      >
        {"«"}
      </button>
    </div>
  );
}

export default Chart;
