import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {  getLocation, validateEmail } from "../utils/helpers";
import Address from "./Address";
import ContactHeader from "./ContactHeader";

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
    if (address.length === 0) {
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
      const obj = {
        id: Date.now(),
        name,
        email,
        phone,
        address,
        lat,
        long,
      };
      if (data.length > 0) {
        let newData = [...data, obj];
        localStorage.setItem("contacts", JSON.stringify(newData));
        props.history.push("/dashboard");
      } else {
        localStorage.setItem("contacts", JSON.stringify([obj]));
        props.history.push("/dashboard");
      }
    }
  };

  
  const showPosition =(position) => {
      if(position){
          let {latitude, longitude} = position.coords
          setLat(latitude)
          setLong(longitude)
      }
  }
  const addressTags = (tags) => {
    setAddress(tags);
  };
  useEffect(() => {
    showPosition()
    getLocation(showPosition)
      let localData =JSON.parse( localStorage.getItem("contacts"));
    localData && localData.length !== 0 ? setData(localData) : setData([])
  }, [])
  return (
    <div className="main-content">
      <ContactHeader />
      <div className="form-container mb-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Your Name"
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
            {nameError && name.length < 2 && (
              <small id="nameError" className="form-text text-danger">
                Name can not be empty & must be 2 digits or more
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
              placeholder="Your email"
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
            <label htmlFor="phone">Phone  <b>*(Valid 11 digits)</b></label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Your Phone Number"
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
            <label htmlFor="address">Address <b>*(type your address & enter)</b></label>
            <Address  tagsDetails={addressTags}/>
            {addressError && address.length === 0  && (
              <small id="addressError" className="form-text text-danger">
                Address can not be empty
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
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Contact);
