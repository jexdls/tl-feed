import { useState } from "react";

function BioImg() {
  const [bioImgSrc, setBioImgSrc] = useState("https://picsum.photos/500");
  return (
    <div className="w-40 h-40 rounded-full bg-gray-400 overflow-hidden">
      <img src={bioImgSrc}></img>
    </div>
  );
}

export default BioImg;
