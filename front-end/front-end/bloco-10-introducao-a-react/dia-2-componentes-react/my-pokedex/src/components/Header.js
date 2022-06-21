import React from "react";

class Header extends React.Component {
  render() {
    const { titulo } = this.props;
    return (
      <div>
        <h1>{titulo}</h1>
      </div>
    )
  }
}

export default Header;