import { useState } from "react";

function PostBody({
  textBodypm,
  currCallName,
  callName,
}: {
  textBodypm: string;
  currCallName: string;
  callName: string;
}) {
  const [textBody, setTextBody] = useState(textBodypm);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(textBody);

  return (
    <div className="">
      {currCallName === callName && (
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => {
              setTextBody(isEditing ? editText : textBody);
              setIsEditing(!isEditing);
            }}
            className={`${
              isEditing ? "text-gray-500" : "text-gray-200"
            } hover:text-blue-500 focus:outline-none`}
          >
            {!isEditing ? "Edit" : "Confirm"}
          </button>
          {isEditing && (
            <button
              onClick={() => {
                setIsEditing(false);
                setTextBody(textBody);
                setEditText(textBody);
              }}
              className="focus:outline-none hover:text-blue-500 text-gray-500"
            >
              Ignore
            </button>
          )}
        </div>
      )}
      {!isEditing ? (
        <div className="p-3">{textBody}</div>
      ) : (
        <textarea
          className="w-full rounded-xl focus:outline-none focus:ring-1 text-gray-500 p-3"
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        />
      )}
    </div>
  );
}

export default PostBody;
