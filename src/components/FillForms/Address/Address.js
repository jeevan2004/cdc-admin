import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useAuthContext } from "../../../ContextAPI/AuthContextAPI";
import CustomInput from "../../common/Input/Input";
import SelectBox from "../../common/selectBox/SelectBox";
import "./Address.css";
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
const Address = () => {
  const [localAddress, setLocalAddress] = useState(true);
  const { currentStep, setCurrentStep } = useAuthContext();
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

  return (
    <>
      <Card>
        <div className="card_inner address_card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="align-items-end">
              <Col md="12">
                <label className="mb-3" style={{ display: "inline-block" }}>
                  Permanent Address
                </label>
              </Col>
              <Col md="6">
                <CustomInput
                  register={register}
                  name="Address1"
                  placeholder="Address 1"
                  type="text"
                  label=""
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="6">
                <CustomInput
                  register={register}
                  name="Address2"
                  placeholder="Address 2"
                  type="text"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
              <Col md="6">
                <Controller
                  name="Country"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectBox
                      // label="Country"
                      name="Country"
                      options={NationalityArr}
                      field={field}
                    />
                  )}
                />
              </Col>
              <Col md="6">
                <Controller
                  name="State"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectBox
                      // label="State"
                      name="State"
                      options={NationalityArr}
                      field={field}
                    />
                  )}
                />
              </Col>
              <Col md="6">
                <Controller
                  name="District"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <SelectBox
                      // label="District"
                      name="District"
                      options={NationalityArr}
                      field={field}
                    />
                  )}
                />
              </Col>
              <Col md="3" style={{ position: "relative", top: "10px" }}>
                <CustomInput
                  register={register}
                  name="Pincode"
                  placeholder="Pincode"
                  type="text"
                  errors={errors?.ServiceDetails}
                  validation={""}
                  className="rounded-pill"
                />
              </Col>
            </Row>
            <Row className="align-items-end mt-5">
              <Col md="12" className="check_boxBlock">
                <label className="mb-3" style={{ display: "inline-block" }}>
                  Local Address <small>(Optional)</small>
                </label>
                <CustomInput
                  register={register}
                  name="SameAsPermanentAddress"
                  placeholder=""
                  type="checkbox"
                  label="Same as Permanent Address"
                  onClick={() => setLocalAddress(!localAddress)}
                  isRequired

                  // errors={errors?.ServiceDetails}
                  // validation={registerOptions.ServiceDetails}
                />
              </Col>
            </Row>
            {localAddress ? (
              <Row className="align-items-end ">
                <Col md="6">
                  <CustomInput
                    register={register}
                    name="LocalAddress1"
                    placeholder="Address 1"
                    type="text"
                    // label="Permanent Address"
                    errors={errors?.ServiceDetails}
                    validation={""}
                    className="rounded-pill"
                  />
                </Col>
                <Col md="6">
                  <CustomInput
                    register={register}
                    name="LocalAddress2"
                    placeholder="Address 2"
                    type="text"
                    errors={errors?.ServiceDetails}
                    validation={""}
                    className="rounded-pill"
                  />
                </Col>
                <Col md="6">
                  <Controller
                    name="LocalAddCountry"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <SelectBox
                        // label="Country"
                        name="Country"
                        options={NationalityArr}
                        field={field}
                      />
                    )}
                  />
                </Col>
                <Col md="6">
                  <Controller
                    name="LocalAddState"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <SelectBox
                        // label="State"
                        name="State"
                        options={NationalityArr}
                        field={field}
                      />
                    )}
                  />
                </Col>
                <Col md="6">
                  <Controller
                    name="LocalAddDistrict"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <SelectBox
                        // label="District"
                        name="District"
                        options={NationalityArr}
                        field={field}
                      />
                    )}
                  />
                </Col>
                <Col md="3" style={{ position: "relative", top: "10px" }}>
                  <CustomInput
                    register={register}
                    name="LocalAddPincode"
                    placeholder="Pincode"
                    type="text"
                    errors={errors?.ServiceDetails}
                    validation={""}
                    className="rounded-pill"
                  />
                </Col>
              </Row>
            ) : (
              ""
            )}

            <button
              className="btn btn-primary d-block lg mx-auto mt-4"
              type="submit"
            >
              Next
            </button>
          </form>
        </div>
      </Card>
    </>
  );
};

export default Address;
