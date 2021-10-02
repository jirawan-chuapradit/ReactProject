import React, { Component } from "react";
import Layout from "../components/layout";
import axios from "axios";
import Link from "next/link";

// class component
class Index extends Component {
  static async getInitialProps() {
    const res = await axios.get("http://localhost:3001/blogs");
    return { blogs: res.data };
  }

  renderBlogs = (blogs) => {
    // jsx
    return blogs.map((blog) => {
      return (
        <div key={blog.id} className="col-6">
          <img src={blog.thumbnail} className="img-fluid" />
          <h4 className="mt-3">
            <Link href={"/blog/detail?id=" + blog.id}>{blog.subject}</Link>
          </h4>
          <hr />
          <p className="text-justify">{blog.intro}</p>
        </div>
      );
    });
  };
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">{this.renderBlogs(this.props.blogs)}</div>
        </div>
      </Layout>
    );
  }
}

export default Index;
