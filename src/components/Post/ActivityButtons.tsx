import { useState } from "react";
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { GoGraph } from "react-icons/go";

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

type ActivityVar = {
  contChart: {
    setShowChart: React.Dispatch<React.SetStateAction<boolean>>;
  };
  likespm: number;
  sharespm: number;
  dislikespm: number;
  postsState: {
    Posts: PostType[];
    setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  };
};

function ActivityButtons({
  contChart,
  likespm,
  sharespm,
  dislikespm,
  postsState,
  id,
}: React.HTMLAttributes<HTMLDivElement> & ActivityVar) {
  const [likes, setLikes] = useState(likespm);
  const [shares, setShares] = useState(sharespm);
  const [dislikes, setDislikes] = useState(dislikespm);

  const likeTakeOver = likes > dislikes ? "text-red-600" : "text-gray-300";
  const dislikeTakeOver = likes < dislikes ? "text-black" : "text-gray-300";
  const hasShare = shares <= 0 ? "hover:" : "";

  return (
    <div className="flex  mx-auto w-auto text-base container">
      <div className="flex flex-row space-x-1">
        <button
          className={`ml-0 focus:outline-none hover:text-lg hover:text-red-600 ${likeTakeOver}`}
          onClick={() => {
            setLikes((likes) => likes + 1);
            logActivity(0, id, postsState);
          }}
        >
          <FaHeart />
        </button>

        <button
          className={`focus:outline-none hover:text-black ${dislikeTakeOver}`}
          onClick={() => {
            setDislikes((dislikes) => dislikes + 1);
            logActivity(1, id, postsState);
          }}
        >
          <FaHeartBroken />
        </button>

        <div>{likes - dislikes}</div>

        <div className="w-2"></div>

        <button
          className={`focus:outline-none text-gray-400 ${hasShare}text-blue-600`}
          onClick={() => {
            setShares((shares) => shares + 1);
            logActivity(2, id, postsState);
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

function logActivity(
  mode: number,
  currId: string | undefined,
  postsState: {
    Posts: PostType[];
    setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  }
) {
  // get the post from the array by searching with id
  const targetPost = postsState.Posts.filter(
    (post) => post.id.toString() === currId
  );

  // push the history into the array
  const dateNow = new Date(Date.now());
  targetPost[0].history[mode].data.push({
    primary: dateNow,
    secondary: targetPost[0].history[mode].data.length + 1,
  });

  console.log(targetPost);
}

export default ActivityButtons;
