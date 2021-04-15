import { useState } from "react";

import Post from "./components/Post/Post";
import Bio from "./components/Bio/Bio";
import CreatePost from "./components/CreatePost/CreatePost";
import AboutTopBar from "./components/AboutTopBar";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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

function App() {
  const [currCallName, setCurrCallName] = useState("callName");
  const [userImgSrc, setUserImgSrc] = useState("https://picsum.photos/600");

  const [Posts, setPosts] = useState([
    {
      id: 0,
      callName: "Poo Per",
      textBody: "This is Sick!",
      likes: 0,
      shares: 0,
      dislikes: 0,
      userImgSrc: "https://picsum.photos/700",
      history: [
        {
          label: "Likes",
          data: [],
        },
        {
          label: "Dislikes",
          data: [],
        },
        {
          label: "Shares",
          data: [],
        },
      ],
    },
    {
      id: 1,
      callName: "Leo Pover",
      textBody: "I cant believe you did this",
      likes: 0,
      shares: 0,
      dislikes: 0,
      userImgSrc: "https://picsum.photos/800",
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

  return (
    <div>
      {/* <Route path="/About" component="AboutTopBar"></Route> */}
      <AboutTopBar />
      <div className="flex justify-center md:flex-row flex-col space-x-2">
        <div className="lg:w-1/4 md:w-1/3">
          <Bio />
        </div>
        <div className="flex flex-col space-y-4 p-4 m-4 md:w-3/4">
          <CreatePost
            callNamepm={currCallName}
            userImgSrcpm={userImgSrc}
            postsState={{ Posts, setPosts }}
          />
          {Posts.map((post: PostType) => (
            <Post
              postsState={{ Posts, setPosts }}
              post={post}
              currCallName={currCallName}
              key={post.id.toString()}
              id={post.id.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
