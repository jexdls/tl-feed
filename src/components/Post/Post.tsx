import ActivityButtons from "./ActivityButtons";
import PostHead from "./PostHead";
import PostBody from "./PostBody";
import ChartWrapper from "./ChartWrapper";
import { useState } from "react";

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

function Post({
  post,
  currCallName,
  postsState,
  id,
}: React.HTMLAttributes<HTMLDivElement> & {
  post: PostType;
  currCallName: string;
  postsState: {
    Posts: PostType[];
    setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  };
}) {
  const [showChart, setShowChart] = useState(false);
  const [hasNotif, setHasNotif] = useState(true);

  return (
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
          <PostBody
            textBodypm={post.textBody}
            currCallName={currCallName}
            callName={post.callName}
          />
          <ActivityButtons
            id={id}
            postsState={postsState}
            dislikespm={post.dislikes}
            likespm={post.likes}
            sharespm={post.shares}
            contChart={{ setShowChart }}
          />
        </>
      ) : (
        <>
          <ChartWrapper post={post} contChart={{ setShowChart }} />
        </>
      )}
    </div>
  );
}

export default Post;
