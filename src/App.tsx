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
}

function App() {
  const [currCallName, setCurrCallName] = useState("callName");
  const [userImgSrc, setUserImgSrc] = useState("https://picsum.photos/600");

  const [Posts, setPosts] = useState([
    {
      callName: "Jie",
      textBody: "This is Sick!",
      likes: 2,
      shares: 5,
      dislikes: 5,
      userImgSrc: "https://picsum.photos/700",
    },
    {
      callName: "Opoe",
      textBody: "I cant believe you did this",
      likes: 200,
      shares: 23,
      dislikes: 23,
      userImgSrc: "https://picsum.photos/800",
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
            <Post post={post} currCallName={currCallName} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
