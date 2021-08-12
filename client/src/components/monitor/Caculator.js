import React, { Component } from "react";

class Calculator extends Component {
  showOrder(orders) {
    if (!orders || orders.length == 0) {
      return <li className="text-end text-muted"> ไม่มีสินค้า </li>;
    } else {
      return orders.map((order) => {
        return (
          <li
            className="text-end text-success  title"
            key={order.product.productId}
          >
            {order.product.productName} x {order.quantity} ={" "}
            {order.product.unitPrice * order.quantity}
            <button
              className="btn btn-light btn-sm"
              onClick={() => this.props.onDelOrder(order.product)}
            >
              X
            </button>
          </li>
        );
      });
    }
  }
  render() {
    const { totalPrice, orders } = this.props;
    return (
      <div>
        <h1 className="text-end">{totalPrice}</h1>
        <hr />

        <ul className="list-unstyled">{this.showOrder(orders)}</ul>
        <hr />
        <div className="d-grid gap-2">
          <button className="btn btn-danger" onClick={() => this.props.onConfirmOrder()} >
            ยืนยัน
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => this.props.onCancelOrder()}
          >
            ยกเลิก
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
