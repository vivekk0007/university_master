import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import study from "./images/UIET_logo.png";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

function About() {
  return (
    <div>
     
      <div><Common
      name="Welcome to About Page"
      imgsrc={study}
      visit="/contact"
        btnName="contact now"
     /></div>
     <div>
      <pre>.
        <br></br>
        <br></br>
          
          .
          
          <br>
          </br>
          <br>
          </br>
          . </pre></div> 
    
       < div >
       <strong>Important points regarding the eligibility conditions followed by JAC-2023 are:</strong>
 <ul>
 <li>All India Rank prepared by the National Testing Agency (NTA) based on score in JEE (Main)-2023
  for B.E./B.Tech. shall be used for admission to B.E.</li>
  <li>A candidate belonging to any category shall be considered for seat allocation if he/she is declared
  successful in 12th or equivalent examination by Board/University/Council.</li>
  <li>A candidate who gets a compartment in the 12th examination held in April/May 2023 will be eligible for 
 admission under JAC-2023 if he/she clears the same (by appearing in the supplementary examination) before 
 the last date of registration.</li>
 <li>Aggregate marks percentage in 12th or equivalent examination shall be worked out as suggested by the certificate 
 awarding Board/University/Council. If the Board/University/Council awards letter grades without providing the equivalent
  percentage of marks on the grade sheet, the candidate should obtain a certificate from the respective Board/University/Council
   specifying equivalent percentage conversion formula and submit at the time of reporting/counselling. In the absence of
    such a certificate, the decision of JAC-2023 regarding his/her eligibility shall be final.</li>
    <li>The admissions under NRI/ Foreign Nationals category shall be conducted by Direct Admissions of Students Abroad-2023 
 (DASA-2023). The aspirants are advised to refer to the website https://www.dasanit.org</li>
 General Conditions
 <li>For admission to the B.E. courses, each candidate must-
 
 (a) bear a good moral character and should not have been debarred from any institution/ University,
 
 (b) be an Indian National (except for those seats which are open to NRIs),
 
 (c) satisfy the prescribed medical standards of fitness as follows-
 
      (i) Standard of Physique
 
 A candidate must be in good mental and body health, and free from any physical defect likely to
 
 interfere with effective performance of duties of his/her profession.</li>
 
 </ul>
       </div>
       </div>
  );
}

export default About;
