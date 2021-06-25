import React from "react";
import Card from "./quantity";
import Price from "./price";
import PriceTotal from "./pricetotal";
import Checkout from "./checkout.jsx";

const Cart = (props) => {
  const currentCart = props.items;

  if (currentCart.length > 0) {
    return (
      <div className="table-responsive">
        <table key="table" className="table">
          <thead key="thead">
            <tr key="Tr-1">
              <th key="Th-1" scope="col" className="border-0 bg-light">
                <div className="p-2 px-3 text-uppercase">Product</div>
              </th>
              <th key="th-2" scope="col" className="border-0 bg-light">
                <div className="py-2 text-uppercase">Quantity</div>
              </th>
              <th key="th-3" scope="col" className="border-0 bg-light">
                <div className="py-2 text-uppercase">Price/Item</div>
              </th>
              <th key="th-4" scope="col" className="border-0 bg-light">
                <div className="py-2 text-uppercase">Total</div>
              </th>
              <th key="th-5" scope="col" className="border-0 bg-light">
                <div className="py-2 text-uppercase"> </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentCart.map((ca) => {
              return (
                <>
                  <tr key={ca.id}>
                    <th key={ca.id + "btn"} scope="row" className="border-0">
                      <div className="p-2">
                        <div className="ml-3 d-inline-block align-middle">
                          <button
                            key={ca.id + "btn"}
                            type="button"
                            className="btn btn-danger"
                          >
                            {ca.label}
                          </button>
                        </div>
                      </div>
                    </th>
                    <th key={ca.id + "card"} scope="row" className="border-0">
                      <Card item={ca} onAdd={props.onAdd} onSub={props.onSub} />
                    </th>
                    <th key={ca.id + "pr"} scope="row" className="border-0">
                      <Price pricelement={ca.price} />
                    </th>
                    <th key={ca.id + "prt"} scope="row" className="border-0">
                      <PriceTotal
                        totalprice={ca.price}
                        number={ca.addQuatity}
                      />
                    </th>
                    <th key={ca.id + "de"} scope="row" className="border-0">
                      <button onClick={() => props.onDelete(ca.id)}>
                        Delete
                      </button>
                    </th>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <Checkout priceitem={currentCart} />
      </div>
    );
  }

  return <></>;
};

export default Cart;
