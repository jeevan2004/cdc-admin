import React, { useState } from "react";
// import Steps from "../../components/BuisnessSteps/Steps/Steps";
import Steps from "../../components/Steps/Steps";
import { useAuthContext } from "../../ContextAPI/AuthContextAPI";
import BasicDetails from "../../components/FillForms/BasicDetails/BasicDetails";
import AadharVerification from "../../components/FillForms/AadharVerification/AadharVerification";
import Address from "../../components/FillForms/Address/Address";
import EducationDetails from "../../components/FillForms/EducationDetails/EducationDetails";
import { Container } from "react-bootstrap";
import "./fillForm.css";
import ExperiendeDetails from "../../components/FillForms/experiendeDetails/ExperiendeDetails";
const FillForms = () => {
  const { currentStep } = useAuthContext();
  const steps = currentStep;
  console.log(currentStep, "cur");

  const stepRender = () => {
    if (steps === 0) {
      return <BasicDetails />;
    } else if (steps === 1) {
      return <AadharVerification />;
    } else if (steps === 2) {
      return <Address />;
    } else if (steps === 3) {
      return <EducationDetails />;
    } else if (steps === 4) {
      return <ExperiendeDetails />;
    }
  };
  return (
    <>
      <Steps />
      <Container>
        <div className="inner_sec">{stepRender()}</div>
      </Container>
    </>
  );
};

export default FillForms;
