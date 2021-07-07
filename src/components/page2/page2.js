import React from "react";
import Drinks from "./Drinks";
import Desserts from "./Desserts";
import axios from "axios";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
      desserts: [],
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://chaibackend.herokuapp.com/api/drinks",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => this.setState({ drinks: response.data.drinks }))
      .catch((err) => console.log(err));

    axios({
      method: "GET",
      url: "https://chaibackend.herokuapp.com/api/desserts",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => this.setState({ desserts: response.data.desserts }))
      .catch((err) => console.log(err));
  }

  render() {
    const { drinks, desserts } = this.state;
    return (
      <React.Fragment>
        <body className="background">
          <h1 id="pageTitle">Drinks & Desserts</h1>
          {/* <div></div> */}
          <div className="top">
            <div className="sheet">
              <Drinks drinks={drinks} />
              <br />
              <br />
              <br />
              <Desserts desserts={desserts} />
            </div>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default Menu;
