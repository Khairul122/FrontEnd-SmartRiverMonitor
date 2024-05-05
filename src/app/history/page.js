import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

function History() {
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
      <div className="container-fluid pt-2">
        <div className="card" style={{ height: "5%" }}>
          <div className="card-body">
            <h4
              className="card-title text-center justify-content-center text-center"
              style={{ fontSize: "20px", color: "#000" }}
            >
              HISTORY
            </h4>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-2">
        <div className="card" style={{ height: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="card-body">
            <h3>Graph</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
