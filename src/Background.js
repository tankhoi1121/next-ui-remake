import React, { Component } from "react";
import Axios from "axios";

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
    const { cities } = this.state;
    return (
      <div>
        <ul>
          {Object.keys(cities).map(city => (
            <li>{city}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Background;
