import React, { Component, Fragment } from "react";
import Header from "./Header";
import OurNews from "../Our News/Our-News";
import OurChefs from "../Our Chefs/Our-Chefs";
import Team from "../the Team/Team";
import Footer from "../Footer/Footer";
import Menu from "../Food Menu/Menu";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <OurNews />
        <Menu />
        <OurChefs />
        <Team />
        <Footer />
      </Fragment>
    );
  }
}
export default Home;
