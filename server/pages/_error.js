import React from "react";
import Layout from "../components/layout";

//class component

class Error extends React.Component {
  static getInitialProps(res, err) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="text-center">
            <h3>
              {this.props.statusCode
                ? "An error" + this.props.statusCode + " occured on server"
                : `an error occured on client`}
            </h3>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Error;
