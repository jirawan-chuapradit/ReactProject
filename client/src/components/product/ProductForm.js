import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";
import { productFormFields } from "./formFields";

class ProductForm extends Component {
  renderFields(formFields) {
    return formFields.map(({ label, name, type, required }) => {
      return (
        <Field
          label={label}
          name={name}
          type={type}
          required={required}
          component={FormField}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form>
          {this.renderFields(productFormFields)}
          <button className="btn btn-block btn-info" type="submit">
            บันทึก
          </button>
        </form>
      </div>
    );
  }
}

ProductForm = reduxForm({ form: "productForm" })(ProductForm);

export default ProductForm;
