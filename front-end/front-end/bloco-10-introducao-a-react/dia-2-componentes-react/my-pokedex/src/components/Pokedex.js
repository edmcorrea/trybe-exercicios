import React from "react";
import Pokemon from './Pokemon';
import data from '../data';
import Header from "./Header";

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <Header titulo={Pokedex}/>
          {data.map((element) => (
            <Pokemon 
              key={element.id}
              name={element.name} 
              type={element.type} 
              averageWeight={element.averageWeight} 
              image={element.image}
            />
          ))}
      </div>
    )
  }
}

export default Pokedex;