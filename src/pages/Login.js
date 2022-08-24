import React from "react";
import Bar from "../components/Bar";
import gen from "../Assets/gen.jpeg";

export default function Login() {
  return (
    <div>
      <Bar />
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center pt-4">
            <div className="col-md-6 col-sm-6">
              <form className="p-2">
                <div className="d-flex justify-content-center pt-4 pb-4">
                  <img src={gen} alt="logo" width="180" />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="row mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    {/* <div className="form-check mb-3 mb-md-0">
                      <input
                        className="form-check-input"
                        style={{
                          backgroundColor: "#5db959",
                          borderColor: "#5db959",
                        }}
                        type="checkbox"
                        defaultValue
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="loginCheck">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div> */}
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <a href="/Forgot">Forgot password?</a>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-block mb-4 text-white btn-danger"
                  >
                    Sign in
                  </button>
                </div>
                <div className="text-center">
                  <p>
                    Register? <a href="/Register">Register</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer style={{ textAlign: "center" }}>
          <span className="text-danger">
            Last Updated: 24 August, 2022. Copyrights &copy; pakgentex.com
          </span>
        </footer>
      </div>
    </div>
  );
}
