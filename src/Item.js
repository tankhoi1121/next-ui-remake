import React, { Component } from "react";

class Item extends Component {
  render() {
    const p = this.props;

    return (
      <div>
        <p>RegionId: {p.regionId}</p>
        <p>CityName: {p.cityName}</p>
        <p>StateName: {p.stateName}</p>
        <p>CityPopulation: {p.cityPopulation}</p>
        <p>Area: {p.area}</p>
      </div>
    );
  }
}

export default Item;
