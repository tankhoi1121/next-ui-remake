import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
class Item extends Component {
  render() {
    const p = this.props;

    return (
      <tbody>
        <tr>
          <td>{p.regionId}</td>
          <td>{p.cityName}</td>
          <td>{p.stateName}</td>
          <td>{p.cityPopulation}</td>
          <td>{p.area}</td>
        </tr>
      </tbody>
    );
  }
}

export default Item;
