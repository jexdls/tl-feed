import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai';


function Heart(){
    const[likes, setLikes]  = useState(0);
    const[isLiked, setIsLiked] = useState(false);
    return(
    <div className="flex flex-row space-x-4 mx-auto">
        <button onClick={()=>setIsLiked(!isLiked)}>
            {isLiked ? <AiFillHeart/> : <AiOutlineHeart/>}           
        </button>
        <div className="flex w-auto">{likes}</div>
    </div>
    );
}

export default Heart;