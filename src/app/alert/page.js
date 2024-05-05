import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

function Alert() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#FFFFFF" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="logo-srm.png" alt="SRM Logo" style={{ width: "70%" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item" style={{ padding: "0 20px" }}>
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item" style={{ padding: "0 20px" }}>
                <a className="nav-link" href="/alert">
                  Alert
                </a>
              </li>
              <li className="nav-item" style={{ padding: "0 20px" }}>
                <a className="nav-link" href="/history">
                  History
                </a>
              </li>
              <li className="nav-item" style={{ padding: "0 20px" }}>
                <a className="nav-link" href="/">
                  Exit
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link" href="#">
              <img
                src="logo-user.png"
                alt="User Logo"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </div>
        </div>
      </nav>
      <div className="container-fluid pt-3">
        <div className="card" style={{ height: "400px" }}>
          <div className="card-body">
            <h4
              className="card-title"
              style={{ borderBottom: "1px solid black" }}
            >
              Alert!
            </h4>
            <p className="card-text" style={{ paddingTop: "20px" }}>
              Maximum water level exceeded!
              <br />
              <strong>Water Level: 85 cm</strong>
              <br />
              <strong>Maximum Limit: 80 cm</strong>
            </p>
            <p className="card-text pt-4">
              <strong>Action Required:</strong>
            </p>
            <ol>
              <li>Check the River for conditions and potential hazards.</li>
              <li>
                Take precautions or warn the public of potential flooding.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
