import { useState } from "react";
import { setTextRange } from "typescript";

import PostHead from "../Post/PostHead";

interface PostType {
  callName: string;
  textBody: string;
  likes: number;
  shares: number;
  userImgSrc: string;
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
            {
              callName: callNamepm,
              textBody: textBodyy,
              likes: 0,
              shares: 0,
              userImgSrc: userImgSrcpm,
            },
            ...postsState.Posts,
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
