import React from 'react';
import styled from 'styled-components';
import TelaCadastro from './TelaCadastro';
import TelaLista from './TelaLista';

const TodoSite = styled.div`
display: flex;
justify-content: center;
`

class App extends React.Component {
  state = {
    estadoDaTela: "CADASTRO"
  }
  escolheTela = () => {
    switch (this.state.estadoDaTela) {
      case "CADASTRO":
        return (
        <TelaCadastro 
          irParaLista = {this.irParaLista}
        />
        )
      case "LISTA":
        return <TelaLista
        irParaCadastro = {this.irParaCadastro} />
      default:
        return <div>Página não encontrada! [ERRO]</div>
    }
  }
  irParaCadastro = () => {
    this.setState({estadoDaTela: "CADASTRO"})
  }
  irParaLista = () =>{
    this.setState({estadoDaTela: "LISTA"})
  }
  render() {
    return (
  
      <TodoSite>
        {this.escolheTela()}
      </TodoSite>
     
    );
  }
}

export default App;
