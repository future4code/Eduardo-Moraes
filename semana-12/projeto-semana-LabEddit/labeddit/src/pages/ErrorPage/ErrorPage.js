import { Typography } from "@material-ui/core";
import React from "react";
import Erro404 from "../../assets/Erro404.jpg"
import { ImagemDeErro, ErrorPageContainer } from "./styled";

const ErrorPage = () => {
    return(
        <ErrorPageContainer>
            <ImagemDeErro src={Erro404}/>
            <Typography color={"primary"} variant={"h4"} align={"center"}> erro 404 - página não encontrada</Typography>
        </ErrorPageContainer>
    )
}
export default ErrorPage