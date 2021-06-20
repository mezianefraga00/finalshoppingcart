import React, { Component } from "react";

class Card extends Component {
  onclick(type) {
    this.setState((prevState) => {
      if (prevState.count > 1 && type === "sub") {
        return {
          count: prevState.count - 1,
        };
      }
      if (type === "add") {
        return {
          count: prevState.count + 1,
        };
      }
    });
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </button>
        <span className="badge rounded-pill bg-success">
          {this.props.item.addQuatity}
        </span>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => this.props.onSub(this.props.item)}
        >
          -
        </button>
      </div>
    );
  }
}

export default Card;
