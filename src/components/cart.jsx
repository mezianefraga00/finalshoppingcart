import React, { Component } from "react";
import Card from "./quantity";
import Price from "./price";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  state = { cart: [] };

  render() {
    const itemId = this.props.item[0];
    // const { items: currentCart } = this.props;
    const currentCart = this.props.items;
    console.log(this.props.items);
    if (currentCart.length > 0) {
      return (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="border-0 bg-light">
                  <div className="p-2 px-3 text-uppercase">Product</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Quantity</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Price</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentCart.map((ca) => {
                return (
                  <>
                    <tr>
                      <th scope="row" className="border-0">
                        <div className="p-2">
                          <div className="ml-3 d-inline-block align-middle">
                            <button type="button" class="btn btn-danger">
                              {ca.label}
                            </button>
                          </div>
                        </div>
                      </th>
                      <th scope="row" className="border-0">
                        <Card
                          item={ca}
                          onAdd={this.props.onAdd}
                          onSub={this.props.onSub}
                        />
                      </th>
                      <th scope="row" className="border-0">
                        <Price pricelement={ca.price} />
                      </th>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }

    return <></>;
  }
}

export default Cart;
