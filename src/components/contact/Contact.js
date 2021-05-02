import React, { useState, useEffect } from "react";
import { validateEmail } from "../utils/helpers";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [clicked, setClicked] = useState(false);

  const validateDetails = () => {
    if (name === "") {
      setLoading(false);
      setNameError(true);
    }
    if (email === "" || !validateEmail(email)) {
      setLoading(false);
      setEmailError(true);
    }
    if (phone === "") {
      setLoading(false);
      setPhoneError(true);
    }
    if (address === "") {
      setLoading(false);
      setAddressError(true);
    }
    return true;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    setClicked(true);
    e.preventDefault();
    validateDetails();
    if (clicked && !nameError && !emailError && !phoneError) {
      alert("hello");
    }
    // const obj = { name, email, phone, address };
    // localStorage.setItem(JSON.stringify([obj]));
  };
  //   console.log(nameError, emailError, phoneError);
  return (
    <div className="main-content">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Add contact</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter Name"
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
            {nameError && name.length < 6 && (
              <small id="nameError" className="form-text text-danger">
                Name can not be empty & must bbe 6 digits or more
              </small>
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              placeholder="Enter email"
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />
            {emailError && !validateEmail(email) && (
              <small id="emailError" className="form-text text-danger">
                Email must be valid
              </small>
            )}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={({ target }) => {
                setPhone(target.value);
              }}
            />
            {phoneError && phone.length != 11 && (
              <small id="phoneError" className="form-text text-danger">
                Phone number must be valid
              </small>
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Address"
              value={address}
              onChange={({ target }) => {
                setAddress(target.value);
              }}
            />
            {addressError && address.length < 6 && (
              <small id="phoneError" className="form-text text-danger">
                Phone number must be valid
              </small>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
