import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./customRadio.css";
const CustomRadio = ({ register, onChange, name, option, defaultChecked }) => {
  const breedList = ["Golden Retriever", "Pug", "Saint Bernard", "Lab"];

  return (
    <>
      <div className="custom_check d-flex">
        {option.map((item, index) => (
          <div key={index} className="me-4">
            <input
              type="radio"
              id={item.value}
              name={name}
              value={item.value}
              onChange={onChange} // Pass the onChange function here
              defaultChecked={defaultChecked === item.value}
            />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomRadio;
