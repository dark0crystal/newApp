import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import vol1 from "./assets/vol1.jpeg"
import vol2 from "./assets/vol2.jpeg"
import vol3 from "./assets/vol3.jpeg"
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* Hero Section */}
      <div className="bg-light text-dark mt-5 text-center py-5">
        <div className="container">
          <h1 className="display-4">Make a Difference in Your Community</h1>
          <p className="lead">
            Join us in our mission to create a positive impact by volunteering
            for local causes.
          </p>
          <NavLink className="btn btn-primary btn-lg mt-3" to="/volunteer-posts">
            Let's Volunteer
          </NavLink>
          {/* <a className="btn btn-primary btn-lg mt-3" href="#">
            Get Started
          </a> */}
        </div>
      </div>

      {/* About Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2>Why Volunteer?</h2>
          <p className="lead">
            Volunteering is an opportunity to give back to your community,
            support causes you care about, and gain valuable experiences.
          </p>
        </div>
      </section>

    {/* Featured Opportunities */}
<section className="bg-light py-5">
  <div className="container">
    <h2 className="text-center">Motivational Volunteering Advice</h2>
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="card mb-4">
          <img
            src={vol1}
            className="card-img-top"
            alt="Opportunity 1"
          />
          <div className="card-body">
            <h5 className="card-title">"Small Acts, Big Impact"</h5>
            <p className="card-text">
              Remember, even the smallest acts of kindness can create ripples
              of change. Your efforts, no matter how small, matter greatly.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <img
            src={vol2}
            className="card-img-top"
            alt="Opportunity 2"
          />
          <div className="card-body">
            <h5 className="card-title">"Be the Change You Wish to See"</h5>
            <p className="card-text">
              Volunteering allows you to become a living example of the positive
              change you want to see in the world. Step forward and inspire others!
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <img
            src={vol3}
            className="card-img-top"
            alt="Opportunity 3"
          />
          <div className="card-body">
            <h5 className="card-title">"A Helping Hand, A Better World"</h5>
            <p className="card-text">
              The simple act of helping others brings joy, strengthens
              communities, and makes the world a better place to live in.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      
    </div>
  );
}

export default App;
