import React, { Component } from "react";
import Axios from "axios";
import Item from "./Item";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class Background extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      cities: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const config = {
      method: "POST",
      url: "http://localhost:5000/api/City/GetCity",
      headers: {
        "Access-Control-Request-Headers": "http://localhost:5000",
        "Content-Type": "application/json"
      }
    };

    Axios.request(config).then(res => {
      console.log(res.data);
      this.setState({ cities: res.data });
    });
  }

  render() {
    this.props = this.state.cities;
    const p = this.props;
    return (
      <div>
        <span>City API</span>
        <table class="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">RegionID</th>
              <th scope="col">CityName</th>
              <th scope="col">StateName</th>
              <th scope="col">CityPopulation</th>
              <th scope="col">Area</th>
            </tr>
          </thead>
          {p.map(city => (
            <Item key={city.id} {...city} />
          ))}
        </table>
      </div>
    );
  }
}
export default Background;
