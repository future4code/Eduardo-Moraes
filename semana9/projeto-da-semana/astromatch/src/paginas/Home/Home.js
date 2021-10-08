import React, { useState } from "react";
import styled from "styled-components";
import CardPaginaHome from "../../componentes/CardPaginaHome";

const ConteinerDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const Home = (props)=>{

    return(
        <ConteinerDiv>
            <CardPaginaHome
            pessoa={props.pessoa} 
            avaliaPerfil={props.avaliaPerfil}
            />
        </ConteinerDiv>
    )
}
export default Home;