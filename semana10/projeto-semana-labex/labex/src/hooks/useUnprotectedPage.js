import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { irParaAdministrador } from "../routes/mudaPagina";

const useUnprotectedPage = ()=>{
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if (token){
            irParaAdministrador(history)
        }
    },[history])
}
export default useUnprotectedPage