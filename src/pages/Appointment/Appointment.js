import React from "react";
import "./appointment.css";

const Appointment = () => {
  return (
    <div className="appointment_page">
      <div className="page_heading mb-5">
        <p className="heading">Rohit</p>
        <span>
          <i class="fas fa-home"></i>{" "}
          <i class="fas fa-chevron-right me-1 ms-1"></i> Details
        </span>
      </div>

      <div className="appointment_details">
        <div className="row">
          <div className="col-md-9">
            <div className="box_wrapper mb-4">
              <div className="row">
                <div className="col-md-6">
                  <p className="heading mb-2">Child Details</p>
                  <ul>
                    <li>
                      <span>Child Name</span> <small>:</small> Surya
                    </li>
                    <li>
                      <span>Gender</span> <small>:</small> Male
                    </li>
                    <li>
                      <span>Age</span> <small>:</small> 15 Yrs
                    </li>
                    <li>
                      <span>Weight</span> <small>:</small> 30 Kgs
                    </li>
                    <li>
                      <span>Parent Name</span> <small>:</small> Joshua
                    </li>
                    <li>
                      <span>Phone Number</span> <small>:</small> 1234567899
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="heading mb-2">Appointment Details</p>
                  <ul>
                    <li>
                      <span>Health Concern</span> <small>:</small> Surya
                    </li>
                    <li>
                      <span>Specialist</span> <small>:</small> Male
                    </li>
                    <li>
                      <span>Doctor</span> <small>:</small> 15 Yrs
                    </li>
                    <li>
                      <span>Date & Slot</span> <small>:</small> 30 Kgs
                    </li>
                    <li>
                      <span>Parent Name</span> <small>:</small> Joshua
                    </li>
                    <li>
                      <span>Appointment Type</span> <small>:</small> 1234567899
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box_wrapper">
              <div className="flex_between mb-3">
                <p className="heading">Child Details</p>
                <p className="orange_text">View Invoice</p>
              </div>
              <ul>
                <li>
                  <div className="flex_between">
                    <p>
                      <span>Payment Status</span> <small>:</small> pending
                    </p>
                    <p>422</p>
                  </div>
                </li>
                <li>
                  <span>Transection ID</span> <small>:</small> -
                </li>
                <li>
                  <span>Payment Mode</span> <small>:</small> -
                </li>
              </ul>
            </div>

            <div className=" pt-5 text-center">
              <button className="btn_orange btn_lg">Start</button>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="box_wrapper">
                  <div className="flex_between mb-3">
                    <p className="heading">Child Details</p>
                    <p className="orange_text">View Invoice</p>
                  </div>
                  <ul>
                    <li>
                      <div className="flex_between">
                        <p>
                          <span>Payment Status</span> <small>:</small> pending
                        </p>
                        <p>422</p>
                      </div>
                    </li>
                    <li>
                      <span>Transection ID</span> <small>:</small> -
                    </li>
                    <li>
                      <span>Payment Mode</span> <small>:</small> -
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box_wrapper">
                  <p className="heading mb-3">Notes</p>

                  <ul>
                    <li>
                      <div className="flex_between">
                        <p>
                          <span>Scals</span>
                        </p>
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </li>
                    <li>
                      <div className="flex_between">
                        <p>
                          <span>Charts</span>
                        </p>
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </li>
                    <li>
                      <div className="flex_between">
                        <p>
                          <span>Home work/Activities</span>
                        </p>
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" pt-5 text-center">
              <button className="btn_orange btn_lg">Complete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
