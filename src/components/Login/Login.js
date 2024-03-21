import React, { useEffect } from "react";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import "./login.css";
import PhoneInput from "react-phone-input-2";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import logo from "../../assets/images/logo.png";
import { useAuthContext } from "../../ContextAPI/AuthContextAPI";

const Login = () => {
  const [value, setValue] = useState("");
  const [loginShow, setLoginShow] = useState(true);
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState();
  // const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const { doLogin, currUserData } = useAuthContext();

  // console.log(value, otp, "otp");
  return (
    <>
      <div className="loginModal">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 login_left"></div>
            <div className="col-md-6 login_reight">
              <div className="login-content">
                <div>
                  <img src={logo} alt="" />
                </div>
                {loginShow ? (
                  <>
                    <h6>Sign Up</h6>

                    <div className="group">
                      <p className="mb-2 fw-bold">Phone Nmuber</p>
                      <PhoneInput
                        // {...register("phone")}
                        country={"in"}
                        value={value}
                        onChange={(number) => setValue(number)}
                      />
                    </div>

                    {/* <div id="recaptcha" className="mt-3"></div> */}
                    <button
                      className="  btn_orange btn_lg
 mb-5 mt-5"
                      onClick={() => setLoginShow(!loginShow)}
                    >
                      Generate OTP
                    </button>
                  </>
                ) : (
                  <>
                    <h6>OTP Verification</h6>
                    <small>
                      Enter the OTP sent to <span> +91 9087654322</span>
                    </small>
                    <div className="otp_input text-center">
                      <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderInput={(props) => <input {...props} />}
                      />

                      <small>
                        Didn’t receive code? <span>Resend</span>
                      </small>
                    </div>
                    <button
                      className="  btn_orange btn_lg
 mb-5 mt-5"
                      onClick={() => navigate("/dashboard")}
                    >
                      Submit
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
