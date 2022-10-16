import React, { useState, useRef } from "react";
import gen from "../Assets/gen.jpeg";
import Bar from "../components/Bar";
import * as countries from './Countries'
import swal from 'sweetalert';
import { url, headers } from '../components/Variable'
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha"
import axios from 'axios'
export default function Register() {
  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [country, setCountry] = useState('')
  const [category, setcategory] = useState('University professor: not languages / linguistics')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const captchaRef = useRef(null)
  const [isVerified, setisVerified] = useState(false)
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('email--->',email)
    // console.log(validateEmail(email))
    if (isVerified === false) {
      swal({
        title: "User signup failed!",
        text: 'Complete captcha before registration',
        icon: "error",
      })
      return
    }
    if (fName === '') {
      alert('First Name is reuired')
      return
    }
    else if (lName === '') {
      alert('Last Name is reuired')
      return
    }
    else if (email === '') {
      alert('Email is reuired')
      return
    }
    else if (country === '') {
      alert('Country is reuired')
      return
    }
    else if (password === '') {
      alert('Password is reuired')
      return
    }
    else if (confirmPassword === '') {
      alert('Confirm Password is reuired')
      return
    }
    else if (password.length < 6) {
      alert('Password must be at least 6 characters')
      return
    }
    else if (confirmPassword.length < 6) {
      alert('Confirm Password must be at least 6 characters')
      return
    }
    else if (validateEmail(email) === false) {
      alert('Email is badly formatted. Engter correct email address')
      return
    }
    else if (password !== confirmPassword) {
      alert('Password and confirm password must match')
      return
    }
    else {
      let data = {
        fName,
        lName,
        email,
        password,
        country,
        userCategory: category,
        phone
      }
      const token = captchaRef.current.getValue();
      fetch(`${url}/pakgentex/registerUser`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then((response) => {
          // console.log('response--->', response)
          if (response.message === 'Success') {
            // setIsLoading(false)
            if (response.doc !== null && response.doc !== undefined) {
              swal({
                title: "User created!",
                text: "User successfully registered. Login now to continue!",
                icon: "success",
              });
              setfName('')
              setlName('')
              setEmail('')
              setPassword('')
              setCountry('')
              setConfirmPassword('')
            } else {
              // alert('No results found for word: '+Word)
              swal({
                title: "User signup failed!",
                text: response.err,
                icon: "error",
              });
            }

            // setData(response.doc);
          }
          else {
            swal({
              title: "User signup failed!",
              text: response.err,
              icon: "error",
            });
          }

        })
        .catch((error) => {
          console.log(error);
        });
    }

  }
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
                    type="text"
                    className="form-control"
                    value={fName}
                    placeholder="Enter First Name"
                    onChange={e => {
                      setfName(e.target.value)
                    }}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    value={lName}
                    placeholder="Enter Last Name"
                    onChange={e => {
                      setlName(e.target.value)
                    }}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value)
                    }}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone No."
                    value={phone}
                    onChange={e => {
                      setphone(e.target.value)
                    }}
                  />
                </div>
                <div className="form-outline mb-4">

                  <select onChange={e => {
                    setCountry(e.target.value)
                    // console.log('country ---> ',e.target.value)
                  }} value={country} class="form-select" aria-label="Default select example">
                    <option value='0' selected>--SELECT COUNTRY--</option>
                    {countries.map((cnt, index) => {
                      return <option key={index} value={cnt.country}>{cnt.country}</option>
                    })}
                  </select>
                </div>
                <div className="form-outline mb-4">
                  <div className="form-outline mb-4">
                    <input
                      type="select"
                      className="form-control"
                      placeholder="Please Select Category"
                      readOnly
                    />
                  </div>
                  <div>
                    <div className="form-check">
                      <input onClick={(e) => {
                        setcategory('University professor: languages / linguistics')
                      }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        University professor: languages / linguistics
                      </label>
                    </div>
                    <div className="form-check">
                      <input onClick={() => {
                        setcategory('Graduate student: languages or linguistics')
                      }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Graduate student: languages or linguistics
                      </label>
                    </div>
                    <div className="form-check">
                      <input onClick={() => {
                        setcategory('University professor: not languages / linguistics')
                      }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        University professor: not languages / linguistics
                      </label>
                    </div>
                  </div>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value)
                    }}
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={e => {
                      setConfirmPassword(e.target.value)
                    }}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <ReCAPTCHA
                    sitekey={'6Lc6bIUiAAAAANc0aEFmKXVrbktDSrkLRU77f3L8'}
                    ref={captchaRef}
                    onChange={e => {
                      // console.log('e----->',e)
                      const token = e
                      axios.post(url + '/pakgentex/verifyToken', { token })
                        .then(res => {
                          if (res.status === 200) {
                            if (res.data.message === 'Success') {
                              setisVerified(true)
                            }
                          }
                        })
                        .catch((error) => {
                          console.log(error);
                        })
                    }}
                  />
                </div>
                <br />
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-block mb-3 text-white btn-danger"
                  >
                    Register
                  </button>
                </div>
              </form>
              <p style={{ textAlign: 'center' }}>
                Already registered? Go back to <Link to="/Search">
                  login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <footer style={{ textAlign: "center" }}>
          <span className="text-danger">
            Last Updated: 24 Aug, 2022. Copyrights &copy; pakgentex.com
          </span>
        </footer>
        <br />
      </div>
    </div>
  );
}
