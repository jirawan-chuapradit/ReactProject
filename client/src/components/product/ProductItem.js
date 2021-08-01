import React, {Component} from "react"

class ProductItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {productName, unitPrice, thumbnail} = this.props
       
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="mt-2"> {productName} </h5>
                <p className="text-end">{unitPrice} THB</p>

                <div class="d-grid">
                    <button class="btn btn-secondary" type="button">ซื้อ</button>
                </div>
                <hr />
            </div>
        )
    }
}


export default ProductItem;