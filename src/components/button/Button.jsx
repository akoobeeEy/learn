import { Component } from "react";

export class Button extends Component {
  render() {
    const { children } = this.props;
    return <button type="button" className="cursor-pointer button">{children}</button>;
  }
}

export default Button;
