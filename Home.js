import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import student from "./images/19182_l-1.jpg.avif"
// import { NavLink } from "react-router-dom";
import Common from "./Common";
function Home() {
  return (
    <div>
      <Common
        name="Welcome To UIET "
        
        imgsrc={student}
        visit="/service"
        btnName="Get Started"
      />
    </div>
  );
}
export default Home;
