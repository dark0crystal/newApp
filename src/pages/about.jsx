import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-4 mb-4">About Us</h1>
          <p className="lead mb-4">
            Our platform connects passionate individuals with organizations that need volunteers. 
            We believe in making a difference by enabling everyone to contribute their time and skills 
            for a cause that matters.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5">Our Mission</h2>
              <p className="mb-0">
                To empower organizations by providing a space to post volunteer opportunities 
                and to inspire individuals to give back to their communities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5">What We Offer</h2>
              <p className="mb-0">
                We offer a platform where organizations can create volunteer postings, 
                and users can easily browse and apply for opportunities that align with their interests.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 text-center">
          <h2 className="h5">Join Us and Make a Difference</h2>
          <p>
            Whether you’re an organization seeking volunteers or an individual looking to give back, 
            we’re here to connect you with the right opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
