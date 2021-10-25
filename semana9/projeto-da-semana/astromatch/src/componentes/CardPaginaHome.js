import React from "react";
import styled from "styled-components";


const ContainerCardHome = styled.div`
display: flex;
flex-direction: column;
border: solid black 1px;
justify-content: space-around;
align-items: center;
width: 40vw;
height: 80vh;
img{
    max-height: 70%;
    max-width: 90%;
}
`
const Infos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const CardPaginaHome = (props) => {
    return (
        <ContainerCardHome>
            <img alt="imagem" src={props.pessoa.photo}></img>
            <Infos>
                <h2>{props.pessoa.name}, {props.pessoa.age} anos</h2>
                <p>{props.pessoa.bio}</p>
                <div>
                    <button onClick={() => props.avaliaPerfil(false)}>❌</button>
                    <button onClick={() => props.avaliaPerfil(true)}>💖</button>
                </div>
            </Infos>

        </ContainerCardHome>
    )
}
export default CardPaginaHome