import React from "react";

class Header extends React.Component {
  render() {
    const { titulo } = this.props;
    return (
      <header>
        <h1>{titulo}</h1>
        {/* Sistema Solar */}
      </header>
    )
  }
}

export default Header;