import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component{
  render(){
    return(
      conteudos.map((element) => <div>
          <h3>O conteúdo é: {element.conteudo}</h3>
          <h3>Status: {element.status}</h3>
          <h3>Bloco: {element.bloco}</h3>
        </div>
      )
    )
  }
}

export default Content