import { Component } from "react";

import {
  Banner,
  Company,
  Certificates,
  OurProduction,
  Team,
  News,
} from "../components/index.js";

export class Home extends Component {
  render() {
    return (
      <>
        <Banner />
        <Company />
        <Certificates />
        <OurProduction />
        <Team />
        <News/>
      </>
    );
  }
}

export default Home;
