import React, { Component } from "react";
import logo from "../images/logo.png";
class Banner extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end align-items-center p-3">
          <div>
            <img src={logo} className="logo" />
          </div>
          <h1>La maison jungle</h1>
        </div>
        <p className="trait"></p>
      </div>
    );
  }
}
export default Banner;
