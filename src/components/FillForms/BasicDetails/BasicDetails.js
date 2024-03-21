import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useAuthContext } from "../../../ContextAPI/AuthContextAPI";
import CustomRadio from "../../common/customRadio/CustomRadio";
import CustomInput from "../../common/Input/Input";
import SelectBox from "../../common/selectBox/SelectBox";
import "./basicDetails.css";
const BasicDetails = () => {
  const { currentStep, setCurrentStep } = useAuthContext();
  const [marigeStatus, setMarigeStatus] = useState();

  const maritalStatus = (data) => {
    console.log(data);
    setMarigeStatus(data);
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCurrentStep(currentStep + 1);
    console.log(data, marigeStatus);
  };
  const countries = [
    "Indian",
    "Afghan",
    "Albanian",
    "Algerian",
    "Zambian",
    "Zimbabwean",
  ];

  const NationalityArr = countries.map((country) => ({
    label: country,
    value: country,
  }));

  const Caste = ["Select Caste", "Adi Dharmi", "Aheri", "Badi"];
  const CasteArr = Caste.map((cast) => ({
    label: cast,
    value: cast,
  }));
  const Gender = ["Select", "male", "female", "other"];
  const GenderArr = Gender.map((cast) => ({
    label: cast,
    value: cast,
  }));
  const BloodGroup = ["A-", "A+", "B-", "B+", "AB-", "AB+", "O-", "O+"];
  const BloodGroupArr = BloodGroup.map((cast) => ({
    label: cast,
    value: cast,
  }));
  const Languages = ["Hindi", "English", "Tamil"];
  const LanguagesArr = Languages.map((item) => ({
    label: item,
    value: item,
  }));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="hr">
          <div className="card_inner">
            <Row>
              <Col md="6">
                <CustomInput
                  register={register}
                  name="FirstName"
                  placeholder="Enter First Name"
                  type="text"
                  label="First Name"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="6">
                <CustomInput
                  register={register}
                  name="LastName"
                  placeholder="Enter Last Name"
                  type="text"
                  label="Last Name"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="6">
                <CustomInput
                  register={register}
                  name="MobileNumber"
                  placeholder="Enter Mobile Number"
                  type="text"
                  label="Mobile Number"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="6">
                <CustomInput
                  register={register}
                  name="AlternateMobileNumber"
                  placeholder="Enter Mobile Number"
                  type="text"
                  label="First Name"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="6">
                <CustomInput
                  register={register}
                  name="Dob"
                  placeholder="Date of Birth"
                  type="date"
                  label="Date of Birth"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="6">
                <Controller
                  name="Gender"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectBox
                      label="Gender"
                      name="Gender"
                      options={GenderArr}
                      field={field}
                    />
                  )}
                />
              </Col>
            </Row>
          </div>
          <div className="hr"></div>

          <div className="card_inner">
            <Col md="8" className="mb-5">
              <div className="d-flex">
                <label className="me-5">Marital Status</label>
                <CustomRadio
                  onChange={(e) => console.log(e.target.value)}
                  name="experience"
                  option={[
                    { label: "Married", value: "Married" },
                    { label: "Unmarried", value: "Unmarried" },
                    { label: "Other", value: "Other" },
                  ]}
                  defaultChecked="Married" // Set "Yes" as the default checked value
                />
              </div>
            </Col>
            <Row>
              <Col md="6">
                <CustomInput
                  register={register}
                  name="Father/HusbandName"
                  placeholder="Enter First"
                  type="text"
                  label="Father/Husband Name"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="6">
                <Controller
                  name="Nationality"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectBox
                      label="Nationality"
                      name="Nationality"
                      options={NationalityArr}
                      field={field}
                    />
                  )}
                />
              </Col>
              <Col md="6">
                <Controller
                  name="Caste"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectBox
                      label="Caste"
                      name="Caste"
                      options={CasteArr}
                      field={field}
                    />
                  )}
                />
              </Col>
              <Col md="6">
                <Controller
                  name="Blood Group"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectBox
                      label="Blood Group"
                      name="BloodGroup"
                      options={BloodGroupArr}
                      field={field}
                    />
                  )}
                />
              </Col>
              <Col md="8" className="mb-5">
                <div className="d-flex">
                  <label className="me-5">Physically Handicapped</label>
                  <CustomRadio
                    onChange={(e) => console.log(e.target.value)}
                    name="PhysicallyHandicapped"
                    option={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ]}
                    defaultChecked="Yes"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="hr"></div>

          <div className="card_inner">
            <Row>
              <Col md="6">
                <Controller
                  name="LanguagesKnown"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectBox
                      label="Languages Known"
                      name="LanguagesKnown"
                      options={LanguagesArr}
                      field={field}
                    />
                  )}
                />
              </Col>
            </Row>
          </div>
          <button className="btn btn-primary lg mx-auto mb-4" type="submit">
            Next
          </button>
        </Card>
      </form>
    </>
  );
};

export default BasicDetails;
