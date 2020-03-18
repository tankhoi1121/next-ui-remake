import React, { Component } from "react";
import Axios from "axios";
import Item from "./Item";

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
        {p.map(city => (
          <Item key={city.id} {...city} />
        ))}
      </div>
    );
  }
}
export default Background;
