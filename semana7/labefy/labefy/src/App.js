import React from "react";
import styled from "styled-components";
import AdicionarPlaylist from "./components/AdicionaPlaylist";
import MostraPlaylist from "./components/MostraPlaylist";


class App extends React.Component {
  state={
    estadoDaTela: "AdicionarPlaylist" 
  }
  irParaMostraPlaylist = () =>{
    this.setState({estadoDaTela: "MostraPlaylist"})
  }
  escolheTela = () => {
    switch (this.state.estadoDaTela){
      case "AdicionarPlaylist":
        return <AdicionarPlaylist
        irParaMostraPlaylist = {this.irParaMostraPlaylist}
        />
      case "MostraPlaylist":
        return <MostraPlaylist/>
      default:
        <div>[ERRO] página não encontrada!</div>  
    }
  }

  render() {
    
    return (
      <div>
        {this.escolheTela()}
        <button onClick={()=>{this.irParaMostraPlaylist()}}>mudar de pagina</button>
      </div>
    );
  }

}

export default App;
