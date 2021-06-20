import React, { Component } from "react";
import ListItem from "./listItem";

class Fruits extends Component {
  state = { fruits: [] };
  async componentDidMount() {
    const fruits = await this.fetchfruits();
    this.setState({
      fruits,
    });
  }

  fetchfruits = async () => {
    let fruits = [];
    await fetch("http://localhost:3000/vegetablesAndFruits")
      .then((response) => response.json())
      .then((listfruits) => {
        fruits = listfruits.filter((li) => li.type.id === 2);
      });

    return fruits;
  };
  render() {
    return <ListItem data={this.state.fruits} getItem={this.props.getItem} />;
  }
}

export default Fruits;
