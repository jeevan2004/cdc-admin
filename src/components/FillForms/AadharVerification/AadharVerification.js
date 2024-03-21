import React, { useState, useRef } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import OTPInput from "react-otp-input";
import { useAuthContext } from "../../../ContextAPI/AuthContextAPI";
import CustomInput from "../../common/Input/Input";
import "./aadharVerification.css";
const AadharVerification = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCurrentStep(currentStep + 1);
    console.log(data);
  };

  const { currentStep, setCurrentStep } = useAuthContext();
  const [aadharNumber, setAadharNumber] = useState();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <div className="card_inner ">
          <div className="aadhar_sec">
            <p className="w-100 mb-3">Aadhar Number</p>
            <OTPInput
              value={aadharNumber}
              onChange={setAadharNumber}
              numInputs={12}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary sm mx-auto mb-4 d-block mt-5"
          >
            Verify
          </button>
          <Row>
            <Col md="8" className="mx-auto">
              <CustomInput
                register={register}
                name="otp"
                type="text"
                label="OTP"
                errors={errors?.ServiceDetails}
                validation={""}
                className="rounded-pill"
              />
            </Col>
          </Row>
        </div>

        <button className="btn btn-primary sm mx-auto mb-4" type="submit">
          Next
        </button>
      </Card>
    </form>
  );
};

export default AadharVerification;
