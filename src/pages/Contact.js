import React from "react";
import Bar from "../components/Bar";

export default function Contact() {
  return (
    <div>
      <Bar />
      <br />
      <br />
      <div className="container">
        <div className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
          <div className="row">
            <div className="col-md-9  mb-5">
              <form>
                <div class="mb-3">
                  <label for="exampleInput">
                    <h6>Your Name</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInput" class="form-label">
                    <h6>Email Address</h6>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInput"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    <h6>Subject</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    placeholder="Subject"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInput" class="form-label">
                    <h6>Message</h6>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInpu"
                    placeholder="Add Message"
                  />
                </div>
                <br />
                <button type="submit" class="btn btn-danger">
                  Send Your Message
                </button>
              </form>
            </div>
            <div className="col-md-3 text-center">
              <br />
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fa fa-map-marker fa-2x" />
                  <p>Islamabad</p>
                </li>
                <li>
                  <i className="fa fa-phone fa-lg mt-4 fa-2x" />
                  <p>(+92) 3084432015</p>
                </li>
                <li>
                  <i className="fa fa-envelope fa-lg mt-4 fa-2x" />
                  <p>pakgentex@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
