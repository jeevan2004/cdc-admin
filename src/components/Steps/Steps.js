import React from "react";
import "./steps.css";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../ContextAPI/AuthContextAPI";
const Steps = () => {
  const { currentStep, setCurrentStep } = useAuthContext();
  const steps = [
    {
      name: "Basic Details",
    },
    {
      name: "Aadhar Verification",
    },
    {
      name: "Address",
    },
    {
      name: "Education Details",
    },
    {
      name: "Experiende Details",
    },
    {
      name: "Social Media Details",
    },
  ];

  const navigate = useNavigate();

  const handelSkip = () => {
    if (currentStep > 3) {
      navigate("/dashboard");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="steps">
      <div className="container">
        <div className="steps_content">
          <ul>
            {steps?.map((step, index) => {
              return (
                <li
                  key={index}
                  className={
                    currentStep === index
                      ? "step_active"
                      : // "step_complete"
                      currentStep > index
                      ? "step_complete"
                      : ""
                  }
                >
                  {step.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Steps;
