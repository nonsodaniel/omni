import React from "react";
import { Link } from "react-router-dom";
import "./contacts.css";

const ContactHeader = () => {
  return (
    <div className="contact-header flex-wrap flex-md-nowrap  pb-2 mb-3 border-bottom">
      <h1 className="h2">Add contact</h1>
      <Link type="button" className="btn btn-primary" to="/dashboard">
        <span>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-eye"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </span>
        <span> View contact(s) </span>
      </Link>
    </div>
  );
};

export default ContactHeader;
