import React from 'react';
import react from 'react';
import styled from 'styled-components';
import './App.css';
const TodoSite = styled.div`
display: flex;
justify-content: center;
`
const DivDoCadastro = styled.div`
width: 250px;
height: 200px;
border: solid black 3px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
`
class App extends React.Component {
  render(){
    return (
      <TodoSite>
      <DivDoCadastro>
        <label>Nome:</label>
        <input type="text"></input>
        <label>Email:</label>
        <input type="email"></input>
        <button>Enviar</button>
      </DivDoCadastro>
      </TodoSite>
    );
  }
}

export default App;
