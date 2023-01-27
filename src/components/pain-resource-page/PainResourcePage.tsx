import React from "react";
import "./PainResourcePage.css";

export const PainResourcePage = () => {
  return (
    <div className="app container px-0 px-md-3 pain-resource-page">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <header className="app-header">
            <img
              className="mypain-header-logo"
              src={`${process.env.PUBLIC_URL}/assets/images/My_Pain_LOGO_FINAL.jpg`}
              alt="MyPain Logo"
            />
          </header>
          <p className="text-center pt-5 fs-5 fw-bold">
            HELPFUL PAIN RESOURCES
          </p>
          <p>
            The following websites may have information that could help you with
            your chronic pain.
          </p>
        </div>
      </div>
    </div>
  );
};
