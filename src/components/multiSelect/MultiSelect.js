import React from "react";
import Select from "react-select";

const MultiSelect = ({ data, newArray, businessId }) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleSelectionChange = (selectedValues) => {
    // selectedValues?.map((item) => {
    //   setSelectedOptions(...selectedOptions, item.value);
    // // });
    const selectedValuesArray = selectedValues?.map((option) => option.value);
    const selectedBusinessId = selectedValues?.map(
      (option) => option?.business
    );

    newArray([...selectedValuesArray]);
    setSelectedOptions(selectedValues);
    businessId(selectedValues[0]?.business);
    console.log(
      selectedValues,
      selectedValuesArray,
      selectedBusinessId,
      "selectdvd"
    );
  };

  const options = data?.map((item) => ({
    value: item._id,
    label: item.name,
    business: item?.business,
  }));

  console.log(selectedOptions, "selectedOptions");

  return (
    <div>
      {/* <label htmlFor="multiSelect">Select multiple options:</label> */}
      <Select
        id="multiSelect"
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleSelectionChange}
      />
      {/* <div>
        <strong>Selected options:</strong>
        <ul>
          {selectedOptions?.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default MultiSelect;
