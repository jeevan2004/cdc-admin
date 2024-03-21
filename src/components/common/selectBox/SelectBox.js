import React from "react";
import { useState } from "react";
import Select from "react-select";
import "./selectBox.css";

const SelectBox = (props) => {
  const {
    label,
    isRequired,
    validation,
    options,
    onChange,
    onKeyPress,
    onKeyDown,
    name,
    field,
    className = "",
    handelChange,
    ...rest
  } = props;
  // console.log(options, "options");
  return (
    <>
      <div className="form-group select_group mb-3">
        <label>{label}</label>
        {/* <Select onChange={handelChange} options={options} /> */}

        <Select {...field} options={options} />
      </div>
    </>
  );
};

export default SelectBox;
