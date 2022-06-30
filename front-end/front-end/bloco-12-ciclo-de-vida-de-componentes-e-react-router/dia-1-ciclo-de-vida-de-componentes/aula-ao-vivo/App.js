import React from "react";
import Loading from "./Loading";

class App extends React.Component {
  constructor(props) {
    console.log("App Constructor");
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    console.log("App Metodo Did Mount");
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  componentDidUpdate() {
    console.log("App Metodo Did Update");
  }

  render() {
    console.log("App Metodo Render");
    if (this.state.loading) return <Loading />;
    return (
      <>
        <h1>Dados Carregados</h1>
      </>
    );
  }
}
export default App;
