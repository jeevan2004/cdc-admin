import React, { useState } from "react";
import "./inputFile.css";
const InputFile = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imagesArray = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          imagesArray.push(reader.result);
          if (imagesArray.length === files.length) {
            setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
          }
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };
  return (
    <>
      <div className="input_file_box">
        <svg
          width="29"
          height="22"
          viewBox="0 0 29 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5312 21.8438V15.6562H19.6562L14.5 9.46875L9.34375 15.6562H13.4688V21.8438H8.3125V21.7922C8.13925 21.8025 7.97425 21.8438 7.79688 21.8438C5.74559 21.8438 3.77832 21.0289 2.32785 19.5784C0.877369 18.1279 0.0625 16.1607 0.0625 14.1094C0.0625 10.1411 3.06344 6.90713 6.91412 6.46369C7.25173 4.69879 8.19379 3.1067 9.57827 1.96125C10.9627 0.815798 12.7031 0.188589 14.5 0.1875C16.2971 0.188506 18.0378 0.81564 19.4226 1.96106C20.8074 3.10649 21.7499 4.69862 22.0879 6.46369C25.9386 6.90713 28.9354 10.1411 28.9354 14.1094C28.9354 16.1607 28.1206 18.1279 26.6701 19.5784C25.2196 21.0289 23.2523 21.8438 21.2011 21.8438C21.0278 21.8438 20.8607 21.8025 20.6854 21.7922V21.8438H15.5312Z"
            fill="#444444"
          />
        </svg>

        <label htmlFor="upload-button" className="custom-upload-button">
          Upload
        </label>
        <input
          id="upload-button"
          type="file"
          multiple
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: "none" }}
        />

        {/* show image */}
        {/* <div>
          {selectedImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`image-${index}`}
                style={{ width: "100px", height: "100px", margin: "5px" }}
              />
              <button onClick={() => handleRemoveImage(index)}>Remove</button>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default InputFile;
