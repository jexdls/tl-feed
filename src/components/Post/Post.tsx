import ActivityButtons from "./ActivityButtons";
import PostHead from "./PostHead";
import PostBody from "./PostBody";
import Chart from "./Chart";
import { useState } from "react";

interface PostType {
  callName: string;
  textBody: string;
  likes: number;
  shares: number;
  userImgSrc: string;
}
function Post({ post }: { post: PostType }) {
  const [showChart, setShowChart] = useState(false);
  const [hasNotif, setHasNotif] = useState(true);

  return (
    <>
      <div
        onClick={() => setHasNotif(false)}
        className="container p-4 hover:shadow-md shadow-sm bg-white"
      >
        {hasNotif && (
          <div className="w-full flex justify-end">
            <div>
              <div className="absolute w-2 h-2 bg-purple-600 animate-ping rounded-full"></div>
              <div className="absolute w-2 h-2 bg-purple-600 opacity-50 rounded-full"></div>
            </div>
          </div>
        )}
        <PostHead userImgSrc={post.userImgSrc} callName={post.callName} />
        {!showChart ? (
          <>
            <PostBody textBodypm={post.textBody} />
            <ActivityButtons
              likespm={post.likes}
              sharespm={post.shares}
              contChart={{ setShowChart }}
            />
          </>
        ) : (
          <>
            <Chart contChart={{ setShowChart }} />
          </>
        )}
      </div>
    </>
  );
}

export default Post;
