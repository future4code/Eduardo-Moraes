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
const Lista = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border: solid black 2px;
padding: 6px;
margin: 10px;
width: 200px;
`

export default class TelaLista extends React.Component {
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }
    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "Eduardo-Moraes-Maryam"
            }
        }).then((res) => {
            this.setState({ usuarios: res.data })
        }).catch((err) => {
            window.alert(err.response.data)
        })
    }
    deletarUsuario = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers:{
                Authorization: "Eduardo-Moraes-Maryam"
            }
        }).then((res)=>{
            this.pegarUsuarios()
            window.alert("usuario deletado com sucesso")
        }).catch((err)=>{
            window.alert("[ERRO] tente novamente mais tarde")
        })
    }
    render() {
        const listaDeUsuarios = this.state.usuarios.map((user) => {
            return (
                <Lista key={user.id}>
                    {user.name}
                    <button onClick={()=>this.deletarUsuario(user.id)}>X</button>
                </Lista>
            )
        })
        return (
            <Div>
                <Butao onClick={() => { this.props.irParaCadastro() }}> ir para cadastro</Butao>
                {listaDeUsuarios}
            </Div>
        )
    }
}