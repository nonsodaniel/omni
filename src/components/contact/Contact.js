import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import {  validateEmail } from "../utils/helpers";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const validateDetails = () => {
      let valid = true
    if (name === "")  { 
        setLoading(false); 
        setNameError(true)
        valid =  false
    }
    if (email === "" || !validateEmail(email)) {
      setLoading(false);
      setEmailError(true);
      valid =  false
    }
    if (phone === "") {
      setLoading(false);
      setPhoneError(true);
      valid =  false
    }
    if (address === "") {
      setLoading(false);
      setAddressError(true);
      valid =  false
    }
    return valid;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    validateDetails();
    if ( validateDetails()) {
      const obj = {id: Date.now(), name, email, phone, address, lat, long };

      if(data.length > 0){
          let newData = [...data, obj]
        localStorage.setItem("contacts",JSON.stringify(newData));
        console.log(2)
        props.history.push('/dashboard')
      }else{
        console.log(3)
        localStorage.setItem("contacts",JSON.stringify([obj]));
        props.history.push('/dashboard')
      }
    }
  };
  const getLocation = async () => {
    if (navigator.geolocation) {
     await navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  const showPosition =(position) => {
      if(position){
          let {latitude, longitude} = position.coords
          setLat(latitude)
          setLong(longitude)
      }
  }
  useEffect(() => {
    getLocation()
      let localData =JSON.parse( localStorage.getItem("contacts"));
    localData && localData.length !== 0 ? setData(localData) : setData([])
  }, [])

  return (
    <div className="main-content">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Add contact</h1>
        <Link type="button" className="btn btn-primary" to="/dashboard">
          <span> <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </span>
         <span>  View contact(s) </span>  
             </Link>
      </div>
      <div className="form-container mb-3">
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
                Name can not be empty & must be 6 digits or more
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
            {phoneError && phone.length !== 11 && (
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
          <div className="form-group mb-3">
            <label htmlFor="address">Latitude</label>
            <input
              type="text"
              className="form-control"
              id="lat"
              placeholder="Enter Latitude"
              value={lat && lat}
              disabled
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address">Longitude</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Longitude"
              value={long && long}
              disabled
            />
          </div>
          <button type="submit" className="btn btn-primary">
              {loading && (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              )}
           <span>Submit</span> 
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Contact);
