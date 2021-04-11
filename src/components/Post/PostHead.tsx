import { useState } from "react";

type Head = {
  callName: string;
  userImgSrc: string;
};

function PostHead({ userImgSrc, callName }: Head) {
  const [callNameloc, setCallName] = useState(callName);
  const [userImgSrcloc, setUserImgSrc] = useState(userImgSrc);

  return (
    <div className="flex items-center space-x-2 text-lg">
      {/* circle */}
      <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden shadow-xl">
        <img src={userImgSrcloc}></img>
      </div>
      <div className="font-bold">{callNameloc}</div>
    </div>
  );
}

export default PostHead;
