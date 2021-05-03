import TagsInput from "react-tagsinput";
import React, { useState } from "react";

import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.

const Address = (props) => {
  const [tags, setTag] = useState([]);
  const handleChangec = (tags) => {
    setTag(tags);
    props.tagsDetails(tags);
  };
  return (
    <>
      <TagsInput
        value={tags}
        onChange={handleChangec}
        inputProps={{ placeholder: "Your address", className: "form-control" }}
      />
    </>
  );
};

export default Address;
