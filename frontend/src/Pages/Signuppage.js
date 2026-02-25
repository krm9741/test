import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Signuppage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      mobile: "",
      city: "",
      stateName: "",
      zip: "",
      redirect: false   // only navigation control variable
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        this.state
      );

      alert("User Registered Successfully ✅");
      console.log(response.data);

      // Redirect after success
      this.setState({ redirect: true });

    } catch (error) {
      console.log(error);
      alert("Error while registering ❌");
    }
  };

  render() {

    if (this.state.redirect) {
      return <Navigate to="/login" />;
    }

    return (
      <div className="container mt-5">
        <form className="row g-3" onSubmit={this.handleSubmit}>

          <div className="col-md-4">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
              required />
          </div>

          <div className="col-md-4">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
              required />
          </div>

          <div className="col-md-4">
            <label className="form-label">Email</label>
            <input type="email" className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required />
          </div>

          <div className="col-md-4">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required />
          </div>

          <div className="col-md-4">
            <label className="form-label">Mobile</label>
            <input type="text" className="form-control"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
              required />
          </div>

          <div className="col-md-4">
            <label className="form-label">City</label>
            <input type="text" className="form-control"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              required />
          </div>

          <div className="col-md-4">
            <label className="form-label">State</label>
            <input type="text" className="form-control"
              name="stateName"
              value={this.state.stateName}
              onChange={this.handleChange}
              required />
          </div>

          <div className="col-md-4">
            <label className="form-label">Zip</label>
            <input type="text" className="form-control"
              name="zip"
              value={this.state.zip}
              onChange={this.handleChange}
              required />
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default Signuppage;