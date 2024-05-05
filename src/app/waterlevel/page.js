import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

export default function WaterLevel() {
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
                <a className="nav-link active" aria-current="page" href="#">
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
      <div className="row mt-4">
        <div className="col-md-4 d-flex flex-column align-items-center">
          {/* Cards for Overview, Water Level, and Plastic Waste Counts */}
          <div className="card mb-3" style={{ width: "18rem" }}>
            <Link
              href="/home"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                className="card-body text-center d-flex flex-column justify-content-center"
                style={{ height: "160px" }}
              >
                <i
                  className="bi bi-journal-text"
                  style={{ fontSize: "50px" }}
                ></i>
                <p style={{ color: "black" }}>Overview</p>
              </div>
            </Link>
          </div>
          <Link
            href="/waterlevel"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              className="card mb-3"
              style={{ width: "18rem", height: "160px", cursor: "pointer" }}
            >
              <div className="card-body text-center d-flex flex-column justify-content-center">
                <i className="bi bi-water" style={{ fontSize: "50px" }}></i>
                <p>Water Level</p>
              </div>
            </div>
          </Link>
          <div
            className="card mb-3"
            style={{ width: "18rem", height: "170px" }}
          >
            <Link
              href="/plasticwaste"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="card-body text-center d-flex flex-column justify-content-center">
                <i className="bi bi-recycle" style={{ fontSize: "50px" }}></i>
                <p>Plastic Waste Counts</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-8">
          {/* Cards 1, 2, and 3 */}
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="card" style={{ width: "100%", height: "250px" }}>
                <div className="card-body">
                  <h5
                    className="card-title text-center"
                    style={{ fontSize: "30px" }}
                  >
                    Water Level
                  </h5>
                  <p
                    className="card-text text-center"
                    style={{ marginTop: "50px", fontSize: "80px" }}
                  >
                    10
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-3">
              <div className="card" style={{ width: "100%", height: "250px" }}>
                <div className="card-body">
                  <h5
                    className="card-title text-center"
                    style={{ fontSize: "30px" }}
                  >
                    Graph
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
