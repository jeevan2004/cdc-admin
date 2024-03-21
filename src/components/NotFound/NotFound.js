import React from "react";
import notFoundImg from "../../assets/images/NotFound.png";

const NotFound = (props) => {
  return (
    <div className="not_found">
      <img src={notFoundImg} alt="" />
      <p>{props.title}</p>
      <div className="blue_btn" onClick={() => props.btnClick(true)}>
        {props.btnName}
      </div>
    </div>
  );
};

export default NotFound;
