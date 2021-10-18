import React from "react";
import { useHistory } from "react-router";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";

const PaginaAdministrador = () =>{
    useProtectedPage()
    const history = useHistory()
    const [dadosDaViagem, getViagem] = useRequestData("/viagem")
    return(
        <div>

        </div>
    )
}
export default PaginaAdministrador