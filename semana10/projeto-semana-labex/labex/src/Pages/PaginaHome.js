import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";

const Imagem = styled.img`
width: 100vw;
height: 91vh;
`
const TextoDaImagem = styled.p`
position: absolute;
color: white;
top: 130px;
left: 100px;
font-family: Arial, Helvetica, sans-serif;
font-size: 50px;
`
const PaginaHome = () =>{
    return(
        <div>
            <Header />
            <Imagem src='https://diariodovale.com.br/wp-content/uploads/2021/04/2-LanderSpacex2.jpg' />
            <div></div>
            <TextoDaImagem>Nos ajude a construir uma <br/> <br /> civilização espacial auto<br/> <br />sustentável</TextoDaImagem>
        </div>
    )
}
export default PaginaHome