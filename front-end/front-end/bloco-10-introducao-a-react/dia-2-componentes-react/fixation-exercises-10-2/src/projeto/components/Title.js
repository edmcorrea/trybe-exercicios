import React from "react";

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <header>
        <h2>{headline}</h2>
        {/* sistema solar */}
      </header>
    )
  }
}

export default Header;