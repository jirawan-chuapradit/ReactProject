import React, { Component } from "react";
import Calculator from "./Caculator";
import ProductList from "../product/ProductList";
import axios from "axios";

class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0, orders: [], confirm: false, msg: `` };
    this.addOrder = this.addOrder.bind(this);
    this.delOrder = this.delOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
  }

  addOrder(product) {
    let findOrder = this.state.orders.find(
      (order) => order.product.id === product.id
    );
    if (findOrder) {
      findOrder.quantity++;
    } else {
      this.state.orders.push({ product: product, quantity: 1 });
    }
    // eslint-disable-next-line
    const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
    this.setState({
      totalPrice: totalPrice,
      orders: this.state.orders,
      confirm: false,
    });
  }

  delOrder(product) {
    let findOrder = this.state.orders.find(
      (order) => order.product.id === product.id
    );

    let resultOrders = this.state.orders.filter(
      (order) => order.product.id !== product.id
    );
    const totalPrice =
      this.state.totalPrice -
      findOrder.quantity * parseInt(findOrder.product.unitPrice);
    this.setState({
      totalPrice: totalPrice,
      orders: resultOrders,
      confirm: false,
    });
  }

  confirmOrder() {
    const { totalPrice, orders } = this.state;
    if (orders && orders.length > 0) {
      axios
        .post("http://localhost:3001/orders", {
          orderDate: new Date(),
          totalPrice,
          orders,
        })
        .then((res) => {
          this.setState({
            totalPrice: 0,
            orders: [],
            confirm: true,
            msg: `บันทึกรายการสั่งซื้อสำเร็จ`,
          });
        });
    } else {
      this.setState({
        totalPrice: 0,
        orders: [],
        confirm: true,
        msg: `เลือกสินค้าก่อนค่ะ`,
      });
    }
  }

  cancelOrder() {
    this.setState({ totalPrice: 0, orders: [], confirm: false });
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.confirm && (
          <div className="alert alert-secondary text-end" role="alert">
            {this.state.msg}
          </div>
        )}

        <div className="row">
          <div className="col-md-9">
            <ProductList
              products={this.props.products}
              onAddOrder={this.addOrder}
            />
          </div>

          <div className="col-md-3">
            <Calculator
              totalPrice={this.state.totalPrice}
              orders={this.state.orders}
              onDelOrder={this.delOrder}
              onConfirmOrder={this.confirmOrder}
              onCancelOrder={this.cancelOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
