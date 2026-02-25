import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Loginpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false,
      message: ""
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
        "http://localhost:5000/login",
        {
          email: this.state.email,
          password: this.state.password
        }
      );

      console.log(response.data);

      if (response.data.success) {
        this.setState({
          redirect: true,
          message: "Login Successful ✅"
        });
      } else {
        this.setState({
          message: "Invalid Credentials ❌"
        });
      }

    } catch (error) {
      console.log(error);
      this.setState({
        message: "Server Error ❌"
      });
    }
  };

  render() {

    if (this.state.redirect) {
      return <Navigate to="/home" />;
    }

    return (
      <div className="container mt-5">
        <h3 className="mb-3">Login Page</h3>

        {this.state.message && (
          <div className="alert alert-info">
            {this.state.message}
          </div>
        )}

        <form onSubmit={this.handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Login
          </button>

        </form>
      </div>
    );
  }
}

export default Loginpage;