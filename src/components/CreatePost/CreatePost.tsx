import { useState } from "react";
import { setTextRange } from "typescript";

import PostHead from "../Post/PostHead";

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

function CreatePost({
  callNamepm,
  userImgSrcpm,
  postsState,
}: {
  callNamepm: string;
  userImgSrcpm: string;
  postsState: {
    Posts: PostType[];
    setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  };
}) {
  const [textBodyy, setTextBody] = useState("");

  return (
    <div className="shadow-md flex items-end flex-col space-y-3 p-3 rounded-xl bg-gray-50">
      <div className="w-full flex items-start">
        <PostHead callName={callNamepm} userImgSrc={userImgSrcpm} />
      </div>
      <textarea
        value={textBodyy}
        onChange={(e) => setTextBody(e.target.value)}
        className="p-3 focus:outline-none focus:ring-1 w-full bg-white shadow-md rounded-xl"
      />
      <button
        onClick={() => {
          postsState.setPosts([
            ...postsState.Posts,
            {
              id: postsState.Posts.length,
              callName: callNamepm,
              textBody: textBodyy,
              likes: 0,
              shares: 0,
              dislikes: 0,
              userImgSrc: userImgSrcpm,
              history: [
                {
                  label: "Likes",
                  data: [],
                },
                {
                  label: "Disikes",
                  data: [],
                },
                {
                  label: "Shares",
                  data: [],
                },
              ],
            },
          ]);
          setTextBody("");
        }}
        className="rounded-md focus:outline-none focus:ring-1 bg-green-700 text-white px-3 py-1"
      >
        Post
      </button>
    </div>
  );
}

export default CreatePost;
