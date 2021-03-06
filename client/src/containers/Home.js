import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Monitor from "../components/monitor/Monitor";
import { connect } from "react-redux";
import { productsFetch } from "../actions";

class Home extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    console.log(
      "process.env.REACT_APP_APT_URL: ",
      process.env.REACT_APP_APT_URL
    );
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="KBTG" email="jirawan.c@kbtg.tech" />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}
export default connect(mapStateToProps, { productsFetch })(Home);
