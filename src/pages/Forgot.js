import React from 'react'
import gen from "../Assets/gen.jpeg";
import Bar from '../components/Bar';


export default function Forgot() {
  return (
    <div>
        <Bar/>
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
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Hint text"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                
                  type="submit"
                  className="btn btn-block mb-3 btn-danger"
                >
                 Get Password
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
    <footer style={{textAlign:'center'}}>
    <span className="text-danger">
            Last Updated: 24 August, 2022. Copyrights &copy; pakgentex.com
          </span>
    </footer>
  </div></div>
  )
}
