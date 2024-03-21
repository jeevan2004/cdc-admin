import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useAuthContext } from "../../../ContextAPI/AuthContextAPI";
import CustomRadio from "../../common/customRadio/CustomRadio";
import CustomInput from "../../common/Input/Input";
import InputFile from "../../common/inputFile/InputFile";
import SelectBox from "../../common/selectBox/SelectBox";
import "./experiendeDetails.css";

const ExperiendeDetails = () => {
  const [experiences, setExperiences] = useState(true);
  const { currentStep, setCurrentStep } = useAuthContext();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setCurrentStep(currentStep + 1);
  };

  const experience = (data) => {
    console.log(data);
  };

  const yearFrom = ["From", "2020", "2021", "2022"];
  const yearFromArr = yearFrom.map((cast) => ({
    label: cast,
    value: cast,
  }));
  const yearTo = ["From", "2020", "2021", "2022"];
  const yearToArr = yearTo.map((cast) => ({
    label: cast,
    value: cast,
  }));

  return (
    <>
      <Card>
        <div className="card_inner educatioDetails">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md="8" className="mb-5">
                <div className="d-flex">
                  <label className="me-5">Do you have any experience?</label>
                  <CustomRadio
                    // register={register}
                    onChange={(e) => setExperiences(e.target.value === "Yes")}
                    name="experience"
                    option={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ]}
                    defaultChecked="Yes" // Set "Yes" as the default checked value
                  />
                </div>
              </Col>
            </Row>
            {experiences ? (
              <Row>
                <Col md="6">
                  <CustomInput
                    register={register}
                    name="ExperienceDetails"
                    placeholder="Previous Job Description"
                    type="text"
                    label="Experience Details"
                    errors={errors?.ServiceDetails}
                    validation={""}
                    className="rounded-pill"
                  />
                </Col>
                <Col md="6">
                  <CustomInput
                    register={register}
                    name="PreviousEmployer"
                    placeholder="Name of the Company "
                    type="text"
                    label="Previous Employer"
                    errors={errors?.ServiceDetails}
                    validation={""}
                    className="rounded-pill"
                  />
                </Col>
                <Col md="7" className="mb-3">
                  <div className="form-group experience_year mb-4 d-flex align-items-center justify-content-between">
                    <p className="fs_15 fw_600">Years of Experience</p>
                    <Controller
                      name="yearFrom"
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <SelectBox
                          label=""
                          name="yearFrom"
                          options={yearFromArr}
                          field={field}
                        />
                      )}
                    />
                    <Controller
                      name="yearTo"
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <SelectBox
                          label=""
                          name="yearTo"
                          options={yearToArr}
                          field={field}
                        />
                      )}
                    />
                  </div>
                </Col>

                <Col md="6">
                  <label className="d-inline-block mb-3 fs_15 fw_600">
                    Upload Proof of experience
                  </label>
                  <InputFile />
                </Col>
                <Col md="6">
                  <label className="d-inline-block mb-3 fs_15 fw_600">
                    Last Relieving letter
                  </label>
                  <InputFile />
                </Col>
              </Row>
            ) : (
              ""
            )}
            <Row>
              <Col md="12" className="mt-5 ">
                <button
                  type="submit"
                  className="btn btn-primary d-block lg mx-auto my-4"
                >
                  Save
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </Card>
    </>
  );
};

export default ExperiendeDetails;
