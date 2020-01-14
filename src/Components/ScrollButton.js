import React, { Component } from "react";

class ScrollButton extends Component {
  // Function to scroll to top.
  toTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  render() {
    return (
      <div
        idName="toTop"
        className="btn btn-outline-warning btn-lg d-flex justify-content-center"
        onClick={this.toTop}
      >
        Scroll to top>
      </div>
    );
  }
}

export default ScrollButton;
