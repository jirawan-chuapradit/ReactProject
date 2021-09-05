import React, { Component } from "react";
import { Link } from "react-router-dom";
import { JSEncrypt } from "jsencrypt";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    console.log("constructor");
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  test() {
    let str = "i will be encrypto";
    let encrypt = new JSEncrypt.JSEncrypt(); // instantiate encrypted objects
    encrypt.setPublicKey("public_key.pem"); //Set public key
    let encryptoPasswd = encrypt.encrypt(str); // encrypted plaintext
    console.log(encryptoPasswd);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              <img style={{ height: 70 }} src="/images/logo/logo.png" atl="" />{" "}
              เฮลตี้ คาเฟ่{" "}
            </h1>
          </div>
          <div className="col-md-4 text-end">
            <h5 className="text-muted mt-4">
              {" "}
              {this.state.date.toLocaleTimeString()}{" "}
            </h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/" className="text-success">
                  หน้าหลัก
                </Link>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item">
                <Link to="/orders" className="text-success">
                  รายการสั่งซื้อ
                </Link>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item">
                <Link to="/products" className="text-success">
                  สินค้า
                </Link>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item">
                <Link to="/about" className="text-success">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item">
                <Link className="text-success" onClick={this.test()}>
                  test
                </Link>
              </li>
            </ul>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
export default Header;
