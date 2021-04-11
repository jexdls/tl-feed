import React, { useState } from "react";

function BioText() {
  const [descOnFocus, setDescOnFocus] = useState(false);
  const [descriptionText, setDescriptionText] = useState(
    "I am a person that breathes"
  );

  return (
    <div className="flex w-full items-center flex-col pb-2 px-2 pt-0">
      <div className="text-lg font-bold p-0">Name</div>
      {descOnFocus ? (
        <div className="flex flex-col w-11/12">
          {" "}
          <textarea
            onBlur={() => setDescOnFocus(false)}
            className="focus:outline-none focus:ring-1 w-full p-3 rounded-xl bg-white shadow-xl"
            onChange={(e) => setDescriptionText(e.target.value)}
            value={descriptionText}
          />
        </div>
      ) : (
        <div
          onClick={() => setDescOnFocus(true)}
          className="w-full p-3 text-center rounded-xl shadow-sm hover:bg-white border-top-sm"
        >
          {descriptionText}
        </div>
      )}
    </div>
  );
}

export default BioText;
