import React from "react";
// import student from "./images/student.svg";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <div>
      <section id="header" className=" d-flex align-items-center">
        <div className="container-fluid  ">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1>{props.name}</h1>
                  <h1 id="university">
                    <strong className="brand-name text-primary">
                      PANJAB University
                    </strong>
                  </h1>
                  <h2 className="my-3">
                   This is the beginning of anything  you want.
                   The academic qualifications as prescribed in Information Bulletin and Application Form of JEE
                    (Main)-2023 are applicable for this allocation/allotment, extract of which is reproduced below.
<ul type="square">
  <li>Only those candidates who have passed their Class 12th/ equivalent examination in 2021, 2022, or those who are appearing 
in Class 12th/ equivalent examination in 2023, are eligible to appear in JEE(Main) – 2023 Examination.</li>

<li>Candidates who passed Class 12th/equivalent examination in 2020 or before as well as those who will appear in
 such examination in 2024 or later are not eligible to appear in JEE(Main)–2023”.</li></ul>
                  </h2>

                  <div className="mt-3">
                    <NavLink
                      className=" btn-get-started"
                      to={props.visit}
                      role="button"
                    >
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                   className="oval"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;
