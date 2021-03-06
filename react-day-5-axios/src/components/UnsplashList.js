import React, { Component } from "react";
import axios from "axios";

class ZomatoList extends Component {
  constructor() {
    super();
    this.state = {
      // imgs: [],
      data: {},
    };
  }

  // componentDidMount() {
  //   const config = {
  //     headers: { "user-key": "699751d2c7ee0df728ed0806a28499b0" },
  //   };
  // axios
  //   .get("https://developers.zomato.com/api/v2.1/cities", config)
  //   .then((result) => {
  //     console.log(result.data);
  //     this.setState({
  //       zomatoList: result.data,
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  async componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
    // axios
    //   .get(
    //     "https://api.unsplash.com/photos/?client_id=53zfPZO-rf9074hbnnGtb09vlUtVUjmoL-O6Pt3eseE"
    //   )
    //   .then((data) => {
    //     this.setState({ imgs: data.data });
    //   })
    //   .catch((err) => {
    //     console.log("Error happened during fetching!", err);
    //   });

    // try {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    //   const json = await res.json();
    //   console.log(json);
    //   this.setState({ data: json });
    // } catch (error) {
    //   console.log(error);
    // }

    // try {
    //   let res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    //   let data = res.data;
    //   console.log("dataaaa2", data);
    //   this.setState({ data: data });
    // } catch (error) {
    //   console.log("masuk", error);
    // }
  }
  // }

  render() {
    console.log("dataaaa", this.state.data);
    return (
      <div>
        <h1>Unsplash</h1>
        {/* {this.state.imgs.map((item, index) => (
          <div key={index}>
            <li>{item.urls.small}</li> 
            <img src={item.urls.small} alt="image" />
          </div>
        ))} */}
      </div>
    );
  }
}

export default ZomatoList;
