import { useState } from "react";
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { GoGraph } from "react-icons/go";

type ActivityVar = {
  contChart: {
    setShowChart: React.Dispatch<React.SetStateAction<boolean>>;
  };
  likespm: number;
  sharespm: number;
};

function ActivityButtons({ contChart, likespm, sharespm }: ActivityVar) {
  const [likes, setLikes] = useState(likespm);
  const [shares, setShares] = useState(sharespm);

  const likeTakeOver = likes > 0 ? "text-red-600" : "text-gray-300";
  const dislikeTakeOver = likes < 0 ? "text-black" : "text-gray-300";
  const hasShare = shares <= 0 ? "hover:" : "";

  return (
    <div className="flex  mx-auto w-auto text-base container">
      <div className="flex flex-row space-x-1">
        <button
          className={`ml-0 focus:outline-none hover:text-lg hover:text-red-600 ${likeTakeOver}`}
          onClick={() => {
            setLikes((likes) => likes + 1);
          }}
        >
          <FaHeart />
        </button>

        <button
          className={`focus:outline-none hover:text-black ${dislikeTakeOver}`}
          onClick={() => {
            setLikes((likes) => likes - 1);
          }}
        >
          <FaHeartBroken />
        </button>

        <div>{likes}</div>

        <div className="w-2"></div>

        <button
          className={`focus:outline-none text-gray-400 ${hasShare}text-blue-600`}
          onClick={() => {
            setShares((shares) => shares + 1);
          }}
        >
          <IoIosShareAlt />
        </button>

        <div>{shares}</div>
      </div>

      <button
        className="ml-auto focus:outline-none text-gray-400 hover:text-blue-400"
        onClick={() => contChart.setShowChart(true)}
      >
        <GoGraph />
      </button>
    </div>
  );
}

export default ActivityButtons;
