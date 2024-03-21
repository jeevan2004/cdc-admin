import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ri_store from "../../assets/images/ri_store.svg";
import location_icon from "../../assets/images/location_icon.svg";
import leftArrow from "../../assets/images/leftArrow.svg";

import "./popups.css";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import business_icon from "../../assets/images/business_icon.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomInput from "../common/Input/Input";
import { api } from "../../api/api";
import { useAuthContext } from "../../ContextAPI/AuthContextAPI";

const Popups = ({ title }) => {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState("");
  const [business, setBusiness] = useState(false);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const isBusiness = () => {
    setBusiness(!business);
  };

  const { currUserData } = useAuthContext();
  const handelNavigate = () => {
    // navigate("/steps");
    // setShow(false);
  };
  const closepopup = () => {
    setShow(false);
  };
  console.log(business, "business");

  const getNum = (number, country) => {
    setValue(number);
    setNumber(country?.dialCode);
    console.log(country?.dialCode);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = async (data) => {
    console.log(data);
    let payload = {
      grommerName: data.grommerInfo,
      name: data?.businessName || "",
      phoneCode: `+${number}`,
      mobile: value || "",
      street: data.street,
      city: data.city,
      zipcode: data.zipcode,
      state: data.state,
      country: "US",
      location: [9.9261, 78.1215],

      // grommerName: "Grommer Gopi",
      // name: "pet universe",
      // phoneCode: "+91",
      // mobile: "5500055000",
      // street: "lake view street",
      // city: "Los angels",
      // zipcode: 567890,
      // state: "Los angles",
      // country: "US",
      // location: [9.9261, 78.1215],
    };
    let res = await api(
      "api/v1/groomer/addBusiness",
      payload,
      "post",
      `${currUserData.token}`,
      "Business Create Successfully!"
    );
    if (res && res.success) {
      setShow(false);
      navigate("/steps");
    }

    console.log(res, "res res");
  };
  const handleError = (errors) => {
    console.log(errors);
  };

  const registerOptions = {
    grommerInfo: { required: "Service name is required" },
    businessName: { required: "Name is required" },
    street: { required: "Street is required" },
    city: { required: "City is required" },
    zipcode: { required: "ZipCode is required" },
    state: { required: "State is required" },
    country: { required: "Country is required" },
  };

  const getBusinessData = async () => {
    let res = await api(
      "api/v1/groomer/getBusinessList",
      {},
      "get",
      `${currUserData.token}`,
      ""
    );
    if (res && res.success) {
      if (res?.data?.length < 0) {
        setShow(true);
      }
      console.log(res.data?.length, "res");
    }
  };

  useEffect(() => {
    getBusinessData();
  }, [show]);

  return (
    <>
      <div
        className={`modal fade ${show ? "show" : ""}`}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        role="dialog"
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="d-flex align-items-center p-3">
              <img src={leftArrow} onClick={() => navigate("/")} />
              <h6 className="ps-3 mb-0">Create an Account</h6>{" "}
              <button
                onClick={closepopup}
                type="button"
                className="btn-close popup_btn_po"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                <CustomInput
                  label="Grommer Info"
                  register={register}
                  name="grommerInfo"
                  placeholder="Full Name*"
                  type="text"
                  errors={errors.grommerInfo}
                  validation={registerOptions.grommerInfo}
                  image={business_icon}
                />

                {business ? (
                  <>
                    <div className="form-group">
                      <label className="d-block">Business Info</label>
                      <small>
                        If your business not found,{" "}
                        <span onClick={isBusiness}>CREATE BUSINESS</span>
                      </small>
                      <div className="input_field_group mt-2">
                        <input
                          type="text"
                          placeholder="Full Name *"
                          className="input_fields"
                        />
                        <span className="serch_icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M15.7499 15.7499L12.4927 12.4927M12.4927 12.4927C13.0498 11.9355 13.4918 11.274 13.7933 10.5461C14.0949 9.8181 14.2501 9.03786 14.2501 8.24991C14.2501 7.46196 14.0949 6.68172 13.7933 5.95375C13.4918 5.22578 13.0498 4.56433 12.4927 4.00716C11.9355 3.44999 11.274 3.00803 10.5461 2.70649C9.8181 2.40495 9.03786 2.24976 8.24991 2.24976C7.46196 2.24976 6.68172 2.40495 5.95375 2.70649C5.22578 3.00803 4.56433 3.44999 4.00716 4.00716C2.88191 5.13241 2.24976 6.65857 2.24976 8.24991C2.24976 9.84125 2.88191 11.3674 4.00716 12.4927C5.13241 13.6179 6.65857 14.2501 8.24991 14.2501C9.84125 14.2501 11.3674 13.6179 12.4927 12.4927Z"
                              stroke="#1A1A1A"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="d-block">
                        Select and Claim your Business
                      </label>
                      <small className="show_all">
                        Showing all results for <span> House</span>{" "}
                      </small>
                    </div>{" "}
                    <div className="all_result">
                      <Row className="mt-3 border_b">
                        <Col md={6}>
                          <div className="contnet">
                            <div className="d-flex align-items-center">
                              <img src={ri_store} />
                              <h5 className="ps-3 mb-0 ">Pet House</h5>
                            </div>
                            <div className="inner mt-2  d-flex align-items-baseline ps-4">
                              <img src={location_icon} />
                              <p className="ps-2">
                                Necklace road, Hussain Sagar, Kairatabad,
                                Hyderabad, Telangana
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="checkBlack">
                            <input
                              className="form-check-input float-end"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-3 border_b">
                        <Col md={6}>
                          <div className="contnet">
                            <div className="d-flex align-items-center">
                              <img src={ri_store} />
                              <h5 className="ps-3 mb-0 ">Pet House</h5>
                            </div>
                            <div className="inner mt-2  d-flex align-items-baseline ps-4">
                              <img src={location_icon} />
                              <p className="ps-2">
                                Necklace road, Hussain Sagar, Kairatabad,
                                Hyderabad, Telangana
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="checkBlack">
                            <input
                              className="form-check-input float-end"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </>
                ) : (
                  <>
                    <CustomInput
                      label="Create Business"
                      register={register}
                      name="businessName"
                      placeholder="Business Name *"
                      type="text"
                      errors={errors.businessName}
                      validation={registerOptions.businessName}
                      image={business_icon}
                    />

                    <div className="form-group">
                      {/* <label htmlFor="">phone</label> */}
                      <div className="input_field_group mb-3">
                        {/* <img className="icon" src={business_icon} /> */}
                        <PhoneInput
                          country={"in"}
                          value={value}
                          className="input_fields ps-0"
                          onChange={(number, country) =>
                            getNum(number, country)
                          }
                        />
                      </div>
                    </div>
                    <CustomInput
                      label="Address"
                      register={register}
                      name="street"
                      placeholder="Street 1"
                      type="text"
                      errors={errors.street}
                      validation={registerOptions.street}
                      image={business_icon}
                    />
                    <div className="form-group">
                      <Row>
                        <Col mdd={6}>
                          <CustomInput
                            register={register}
                            name="city"
                            placeholder="City"
                            type="text"
                            errors={errors.city}
                            image={business_icon}
                            validation={registerOptions.city}
                          />
                        </Col>
                        <Col mdd={6}>
                          <CustomInput
                            register={register}
                            name="zipcode"
                            placeholder="Zip Code"
                            type="text"
                            errors={errors.zipcode}
                            image={business_icon}
                            validation={registerOptions.zipcode}
                          />
                        </Col>
                      </Row>
                    </div>
                    <CustomInput
                      register={register}
                      name="state"
                      placeholder="State"
                      type="text"
                      errors={errors.state}
                      image={business_icon}
                      validation={registerOptions.state}
                    />
                    <CustomInput
                      register={register}
                      name="country"
                      placeholder="Country"
                      type="text"
                      errors={errors.country}
                      image={business_icon}
                      validation={registerOptions.country}
                    />
                  </>
                )}

                <button className="submitBtn">SUBMIT </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal_backdrop"
        style={{ display: `${show ? "block" : "none"}` }}
      ></div>
    </>
  );
};

export default Popups;
