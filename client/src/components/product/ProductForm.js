import React, { Component } from "react";
import { reduxForm } from "redux-form";

class ProductForm extends Component {
  render() {
    return (
      <div>
        <form></form>
      </div>
    );
  }
}

ProductForm = reduxForm({ form: "productForm" })(ProductForm);

export default ProductForm;
