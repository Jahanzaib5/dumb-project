import React, { Component } from "react";
import First from "./First-part/First";
import Second from "./Second-part/second";

export default class AbuotUs extends Component {
  render() {
    return (
      <div>
        <div>
          <First />
        </div>
        <div>
          <Second/>
        </div>
      </div>
    );
  }
}
