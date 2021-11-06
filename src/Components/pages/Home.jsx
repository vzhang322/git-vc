import React from "react";
import RImage from "./reactlogo.png";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="card mt-3 mx-auto w-50">
            <div className="w-100">
              <img
                src={RImage}
                width="100%"
                height="auto"
                className="card-img-top"
                alt="img"
              />
            </div>

            <div className="card-body">
              <h4 className="card-title">Welcome to React demo app!</h4>
              <p className="card-text">
                This app is built for STEM research project
              </p>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Home;
