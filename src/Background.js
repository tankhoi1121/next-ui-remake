import React, { Component } from "react";
import axios from "axios";

class Background extends Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      isFetching: false
    };
  }

  componentDidMount() {
    this.setState({ cities: [], isFetching: true });
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      proxy: {
        host: "192.168.0.102",
        port: 5000
      }
    };

    const body = "";
    axios({
      method: "POST",
      proxytype: "socks5",
      proxy: {
        host: "192.168.0.102",
        port: 5000
      },
      url: "http://localhost:5000/api/City/GetCity"
    })
      .then(res => {
        this.setState({ cities: res.data, isFetching: false });
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  }

  render() {
    return <p>{this.state.cities}</p>;
  }
}

export default Background;
