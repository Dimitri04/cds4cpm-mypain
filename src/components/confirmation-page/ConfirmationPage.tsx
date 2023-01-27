import React from "react";
import "./ConfirmationPage.css";
import { faUserDoctor, faAt } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

export const ConfirmationPage = () => {
  return (
    <div className="app container px-0 px-md-3 confirmation-page">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <header className="app-header">
            <img
              className="mypain-header-logo"
              src={`${process.env.PUBLIC_URL}/assets/images/My_Pain_LOGO_FINAL.jpg`}
              alt="MyPain Logo"
            />
          </header>

          <div className="">
            <p className="text-center pt-5 fs-5 fw-bold">Thank You!</p>
            <div className="d-flex pt-3 px-3">
              <div
                className="p-3 d-flex justify-content-center align-items-center"
                style={{ minWidth: "64px" }}
              >
                <FontAwesomeIcon
                  className=""
                  icon={faPaperPlane as IconProp}
                  size={"2x" as SizeProp}
                />
              </div>
              <div className="p-0 py-3 pe-3 flex-grow-1">
                <p className="m-0">
                  Your responses have been sent to your doctor.
                </p>
              </div>
            </div>

            <div className="d-flex pt-2 px-3">
              <div
                className="p-3 d-flex justify-content-center align-items-center"
                style={{ minWidth: "64px" }}
              >
                <FontAwesomeIcon
                  className=""
                  icon={faUserDoctor as IconProp}
                  size={"2x" as SizeProp}
                />
              </div>
              <div className="p-0 py-3 pe-3 flex-grow-1">
                <p className="m-0">
                  Remind your doctor to review the information during your
                  visit.
                </p>
              </div>
            </div>

            <div className="d-flex pt-2 px-3">
              <div
                className="p-3 d-flex justify-content-center align-items-center"
                style={{ minWidth: "64px" }}
              >
                <FontAwesomeIcon
                  icon={faAt as IconProp}
                  size={"2x" as SizeProp}
                />
              </div>
              <div className="p-0 py-3 pe-3  flex-grow-1">
                <p className="m-0">
                  Lookout for a MyUFHealth message with{" "}
                  <Link to="/pain-resource">pain resources</Link> and a{" "}
                  <a href="">copy of your responses</a>.
                </p>
              </div>
            </div>
            <p className="text-center pt-5">
              You may close this browser window.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // <div className="confirmation-page">
  //     <div className="confirmation-container">
  //         <h1> <FontAwesomeIcon icon={faCheckCircle as IconProp} /></h1>
  //         <h2>Congratulations!</h2>
  //         <p>Your responses have been successfully recorded. You may now close your browser window.</p>
  //     </div>

  // </div>
};
