import React, {Component} from "react"
import ProductItem from "./ProductItem"

class ProductList extends Component {

    // get data in props
    showProducts() {
        return  this.props.products && this.props.products.map(product => (
            // <ProductItem productName={product.productName} unitPrice={product.unitPrice} /> refactor
            <ProductItem key={product.productId} product={product} onAddOrder={this.props.onAddOrder} />
        ))
    }

    render() {
        return (
            <div className="row">
                {this.showProducts()}
            </div>
        )
    }
}

export default ProductList