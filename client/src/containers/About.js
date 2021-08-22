import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// function component
const About = () => {
  return (
    <div>
      <Header />
      <div className="container col-md-8">
        <h5> What is Lorem Ipsum? </h5>
        <p className="text-justify mt-4 mb-4">
          <b>Lorem Ipsum </b>is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h4 className="text-success">จาก เฮลตี้ คาเฟ่</h4>
      </div>
      <Footer company="KBTG" email="jirawan.c@kbtg.tech" />
    </div>
  );
};

export default About;
