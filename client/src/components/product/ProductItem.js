import React, {Component} from "react"

class ProductItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {productName, unitPrice, thumbnail} = this.props.product
       
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="mt-2"> {productName} </h5>
                <p className="text-end">{unitPrice} THB</p>

                <div className="d-grid">
                    <button className="btn btn-secondary" type="button"  onClick={() => this.props.onAddOrder(this.props.product)}>ซื้อ</button>
                </div>
                <hr />
            </div>
        )
    }
}


export default ProductItem;