import React, {Component} from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component {

    render() {
        const {children, title="เฮลตี้ คาเฟ่ บล็อกเกอร์"} = this.props;
        return (
            <div>
            <Head> 
                <title> {title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/static/css/style.css" />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
        )
    }
}

export default Layout;
