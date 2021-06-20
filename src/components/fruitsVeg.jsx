import React, { Component } from "react";
import Cart from "./cart";
import Grid from "./grid";

class FruitsVeg extends Component {
  state = { currentElement: {}, cart: [] };

  handleAddQuantity = (item) => {
    console.log("handled");
    const cart = [...this.state.cart];

    let index;
    cart.map((ca) => {
      if (ca.id === item.id) {
        index = cart.indexOf(ca);
      }
    });

    cart[index].addQuatity++;
    this.setState({ cart });
  };
  handleSubQuantity = (item) => {
    const cart = [...this.state.cart];

    let index;
    cart.map((ca) => {
      if (ca.id === item.id) {
        index = cart.indexOf(ca);
      }
    });
    if (cart[index].addQuatity > 0) cart[index].addQuatity--;
    this.setState({ cart });
  };

  addItemToCart = (item) => {
    if (this.state.cart.find((e) => e.id === item.id)) {
      const cart = [...this.state.cart];

      let index;
      cart.map((ca) => {
        if (ca.id === item.id) {
          index = cart.indexOf(ca);
        }
      });

      cart[index].addQuatity++;
      this.setState({ cart });
    } else {
      item.addQuatity = 1;
      this.setState({ cart: [...this.state.cart, item] });
      console.log(this.state.cart);
    }
  };

  getItem = (myid) => {
    fetch(`http://localhost:3000/vegetablesAndFruits/${myid}`)
      .then((response) => response.json())
      .then((item) => {
        // const myitem = item[0];
        console.log("fetch", item);
        this.addItemToCart(item);
      });
  };

  render() {
    return (
      <div className="App">
        <Grid getItem={this.getItem} />
        <Cart
          onAdd={this.handleAddQuantity}
          onSub={this.handleSubQuantity}
          item={this.state.currentElement}
          items={this.state.cart}
        />
        ;
      </div>
    );
  }
}

export default FruitsVeg;
