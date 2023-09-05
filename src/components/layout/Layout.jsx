import React, { Component, Fragment } from "react";
import {Header, Footer} from "../index.js"


export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
