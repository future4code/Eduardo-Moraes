import axios from "axios";
import React from "react";
import styled from "styled-components";

const Butao = styled.button`
display: flex;
justify-content: center;
`
const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
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

export default class TelaCadastro extends React.Component{
    state = {
        nome: "",
        email: ""
    }
    atualizaNome = (e) =>{
        this.setState({nome: e.target.value})
    }
    atualizaEmail = (e) => {
        this.setState({email: e.target.value})
    }
    enviarCadastro = () =>{
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers:{
                Authorization: "Eduardo-Moraes-Maryam"
            }
        }).then((res)=>{
            window.alert("Você foi cadastrado com sucesso")
            this.setState({nome: "", email: ""})
        })
        .catch((err)=>{
            window.alert("erro, não foi possivel fazer o cadastro")
        })
    }
    
    render(){
        return(
            <Div>
                <Butao onClick={()=>{this.props.irParaLista()}}> ir para lista</Butao>
            <DivDoCadastro>
            <label>Nome:</label>
            <input 
            onChange={this.atualizaNome}
             value={this.state.nome}
              type="text"
              />
            <label>Email:</label>
            <input
            onChange={this.atualizaEmail}
             value={this.state.email} 
             type="email"
             />
            <button onClick={this.enviarCadastro} >Enviar</button>
          </DivDoCadastro>
          </Div>
        )
    }
}