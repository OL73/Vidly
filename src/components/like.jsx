import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fas } from "@fortawesome/free-solid-svg-icons";
import { faHeart as far } from "@fortawesome/free-regular-svg-icons";

const Like = ({ isLiked, onLiked }) => {
  return (
    <div>
      <span onClick={onLiked}>
        <FontAwesomeIcon icon={!isLiked ? far : fas} className="text-success" />
      </span>
    </div>
  );
};

export default Like;
