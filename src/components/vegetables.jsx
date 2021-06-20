import React, { Component } from "react";
import ListItem from "./listItem";

class Vegetables extends Component {
  state = { vegetables: [] };
  async componentDidMount() {
    const vegetables = await this.fetchvegetables();
    this.setState({ vegetables });
  }

  fetchvegetables = async () => {
    let vegatables = [];
    await fetch("http://localhost:3000/vegetablesAndFruits")
      .then((response) => response.json())
      .then((listVegatables) => {
        vegatables = listVegatables.filter((li) => li.type.id === 1);
      });

    return vegatables;
  };

  render() {
    return (
      <ListItem data={this.state.vegetables} getItem={this.props.getItem} />
    );
  }
}

export default Vegetables;
