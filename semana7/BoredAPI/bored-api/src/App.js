import React from "react";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
hr{
  width: 100vw;
}
p{
  border: solid black 1px;
  padding: 15px;
  font-family: cursive;
  border-radius: 5px;
  background-color: #FFFF96;
}
h3{
  font-family: cursive;
}
button{
  padding: 10px;
  font-family: cursive;
  background-color: #CEF0D1;
  border: none;
  border-radius: 5px;
}
`

export class App extends React.Component {
  state = {
    atividade: {}
  }
  pegarAtividade = () => {
    const url = 'https://www.boredapi.com/api/activity/'
    axios.get(url).then((res) => {
      this.setState({atividade: res.data})
    }).catch((err)=>{
      window.alert(err)
    })
  }
  render() {

    return (
      <Div>
        <h1>are you bored?</h1>
        <button onClick={this.pegarAtividade}>Click here!</button>
        <hr/>
        <h3>Activity:</h3>
        <p>Name: {this.state.atividade.activity} </p>
        <p>Type: {this.state.atividade.type} </p>
        <p>Participants: {this.state.atividade.participants}</p>
        <p>Price: ${this.state.atividade.price}</p>
     </Div>
    );
  }

}

export default App;
