import React, { Component } from "react";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = { price: [] };
  }
  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    this.state.price.push(this.props.pricelement);
    return (
      <div>
        <div>
          <h1>$ {this.state.price[0]} /lb</h1>
        </div>
      </div>
    );
  }
}

export default Price;
