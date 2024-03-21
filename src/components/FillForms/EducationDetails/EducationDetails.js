import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../../ContextAPI/AuthContextAPI";
import CustomInput from "../../common/Input/Input";
import InputFile from "../../common/inputFile/InputFile";
import "./educationDetails.css";

const EducationDetails = () => {
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

  return (
    <div>
      <Card>
        <div className="card_inner educatioDetails">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md="12">
                <button className="btn btn-link float-end add">+ Add </button>
              </Col>
              <Col md="12">
                <CustomInput
                  register={register}
                  name="Qualification"
                  placeholder="Enter Qualification"
                  type="text"
                  label="Qualification"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="12">
                <CustomInput
                  register={register}
                  name="BoardUniversity"
                  placeholder="Enter University"
                  type="text"
                  label="Board/University"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="12">
                <CustomInput
                  register={register}
                  name="YearOfPassing"
                  placeholder="Enter Year"
                  type="text"
                  label="Year of Passing"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="12">
                <InputFile />
              </Col>
              <Col md="12">
                <button
                  type="submit"
                  className="btn btn-primary d-block sm mx-auto mb-4"
                >
                  Save
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default EducationDetails;
