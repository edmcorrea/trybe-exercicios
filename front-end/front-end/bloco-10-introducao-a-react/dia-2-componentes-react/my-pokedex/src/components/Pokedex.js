import React from "react";
import Pokemon from "./Pokemon";
import data from "../data";
import Header from "./Header";

class Pokedex extends React.Component {

  constructor() {
    super();
    this.state = { nextPokemon: 0 };
    this.handleNext = this.handleNext.bind(this);
    // this.handleType = this.handleType.bind(this);

  }

  handleNext() {
    this.setState((ultimoState, _props) => ({
      
      nextPokemon: (this.state.nextPokemon===data.length-1) ? 0 : ultimoState.nextPokemon + 1,
    }));
  }

  // handleType() {
  //   this.setState({
  //     data.filter((elem) => {
  //       elem.type === "Fire";
  //     })
  //   })
  // }



  render() {
    return (
      <div>
        <Header titulo={Pokedex} />
        {data.map((element) => (
          <Pokemon
            key={element.id}
            name={element.name}
            type={element.type}
            averageWeight={element.averageWeight}
            image={element.image}
          />
        ))[this.state.nextPokemon]}
        <button type="button" onClick={this.handleNext}>Próximo Pokemon</button>
        {/* <button type="button" onClick={this.handleType}>Fire</button> */}
        {/* <button type="button" onClick={this.handleType}>Psychic</button> */}
      </div>
    );
  }
}

export default Pokedex;
