import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
      <h1 className="h2">Dashboard</h1>
      <Link type="button" className="btn btn-primary" to="/contact">
        <span>
          <svg
            data-v-75419b40=""
            data-v-aa799a9e=""
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-25 feather feather-plus"
          >
            <line
              data-v-75419b40=""
              data-v-aa799a9e=""
              x1="12"
              y1="5"
              x2="12"
              y2="19"
            ></line>
            <line
              data-v-75419b40=""
              data-v-aa799a9e=""
              x1="5"
              y1="12"
              x2="19"
              y2="12"
            ></line>
          </svg>
        </span>
        Create new contact
      </Link>
    </div>
  );
};

export default DashboardHeader;
