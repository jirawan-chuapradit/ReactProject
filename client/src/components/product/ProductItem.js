import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productName, unitPrice, thumbnail } = this.props.product;

    return (
      <div className="col-md-3 col-sm-6">
        <img className="img-fluid img-thumbnail" src={thumbnail} />
        <h5 className="mt-2"> {productName} </h5>
        <p className="text-end">{unitPrice} THB</p>

        {this.props.onAddOrder && (
          <div className="d-grid">
            <button
              className="btn  btn-block btn-secondary"
              onClick={() => this.props.onAddOrder(this.props.product)}
            >
              ซื้อ
            </button>
          </div>
        )}

        {(this.props.onDelProduct || this.props.onEditProduct) && (
          <button className="btn  btn-info col-5">แก้ไข</button>
        )}

        {(this.props.onDelProduct || this.props.onEditProduct) && (
          <button
            className="btn  btn-danger col-5 float-end"
            onClick={() => this.props.onDelProduct(this.props.product)}
          >
            ลบ
          </button>
        )}

        <hr />
      </div>
    );
  }
}

export default ProductItem;
