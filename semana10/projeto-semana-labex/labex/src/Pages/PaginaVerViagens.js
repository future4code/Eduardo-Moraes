import React from "react";
import styled from "styled-components";
import useRequestData from "../hooks/useRequestData";
import CardViagens from "../Components/CardViagens";
import { useHistory } from "react-router";
import { irParaHome } from "../routes/mudaPagina";
import Header from "../Components/Header";

const ConteinerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
button{
        font-size: medium;
        margin-left: 40px; 
        background-color: #959EAD;
        border: none;
        width: 120px;
        height: 40px;
        color: white;
        border-radius: 6px;
        :hover{
            background-color: #BCC8DD;
            cursor: pointer;
        }
    }
`
const PaginaVerViagens = () =>{
    const [dadosDaViagem] = useRequestData("/trips",{})
    const history = useHistory()
    
    const listaDeViagens = dadosDaViagem.trips && dadosDaViagem.trips.map((item)=>{
        return <CardViagens key={item.id} item = {item}
        id = {item.id} />
    })

    return(
        <div>
            <Header/>
            <ConteinerDiv>

                <h1>Lista de Viagens</h1>
                {listaDeViagens && listaDeViagens.length > 0 ? listaDeViagens : <p>Carregando...</p>}
                <button onClick={() => irParaHome(history)}>Voltar</button>
            </ConteinerDiv>

        </div>
    )
}
export default PaginaVerViagens