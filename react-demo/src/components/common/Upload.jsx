import React, { useRef } from "react";

const Upload = () => {
  const uploadRef = useRef();

  return (
    <div>
      <h1>Upload</h1>
      <input style={{ display: "none" }} type="file" ref={uploadRef} />
      <button
        onClick={() => {
          uploadRef.current.click();
          console.log(uploadRef);
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default Upload;
