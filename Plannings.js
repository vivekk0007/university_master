import React from "react";
import "./PrepareForPlacement.css";

const Planing = () => {
  const handleButtonClick = () => {
    window.location.href = "https://learn.rumie.org/AO/bytes/prepare-for-a-specific-job-interview/?utm_source=bing&utm_medium=cpc&utm_campaign=RumieLearn-Bytes%20%28NA%29&utm_term=best%20way%20to%20answer%20interview%20questions&utm_content=How%20to%20Prepare%20for%20an%20Interview";
  };

  return (
    <div className="prepare-for-placement">
      <h1>Prepare for Placement</h1>
      <div className="image-container">
        <img
          src="https://media.tenor.com/6X-STQ27lOUAAAAM/ph%E1%BB%8Fng-v%E1%BA%A5n-tr%E1%BA%A3l%E1%BB%9Di.gif"
          alt="Interview preparation"
        />
        <img
          src="https://media.tenor.com/3TK0yIGZRQYAAAAj/eduwis-preschool.gif"
          alt="Resume building"
        />
        <img
          src="https://media.tenor.com/LNIXW908mqYAAAAM/interview-suit.gif"
          alt="Mock interviews"
        />
      </div>
      <div className="content-container">
        <div className="content">
          <h2>Interview Preparation</h2>
          <p>
            A successful interview requires thorough preparation. Here are some
            tips to help you prepare for your placement interviews:
          </p>
          <ul>
            <li>Research the company and the role you are applying for.</li>
            <li>Practice common interview questions.</li>
            <li>Prepare examples to showcase your skills and experiences.</li>
            <li>Be confident and professional during the interview.</li>
            <li>Ask thoughtful questions to the interviewer.</li>
          </ul>
          <button className="click-button" onClick={handleButtonClick}>
            Start now
          </button>
        </div>
        <div className="content">
          <h2>Resume Building</h2>
          <p>
            A well-crafted resume is essential to make a good impression on
            potential employers. Consider the following tips for building an
            effective resume:
          </p>
          <ul>
            <li>Highlight your relevant skills, experiences, and achievements.</li>
            <li>Use a clean and professional resume format.</li>
            <li>Tailor your resume to match the job requirements.</li>
            <li>Proofread for any spelling or grammatical errors.</li>
            <li>Include a concise and compelling summary or objective statement.</li>
          </ul>
          <button className="click-button" onClick={handleButtonClick}>
           start now
          </button>
        </div>
        <div className="content">
          <h2>Mock Interviews</h2>
          <p>
            Mock interviews are a great way to practice and improve your
            interview skills. Consider the following benefits of mock
            interviews:
          </p>
          <ul>
            <li>Gives you a chance to simulate a real interview experience.</li>
            <li>Helps identify areas for improvement in your interview technique.</li>
            <li>Allows you to receive feedback and suggestions from experts.</li>
            <li>Builds confidence and reduces nervousness.</li>
            <li>Enables you to refine your answers and presentation.</li>
          </ul>
          <button className="click-button" onClick={handleButtonClick}>
             start now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Planing;
