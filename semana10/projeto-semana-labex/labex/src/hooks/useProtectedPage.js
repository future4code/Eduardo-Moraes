import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { irParaLogin } from "../routes/mudaPagina";

const useProtectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token =localStorage.getItem("token")
        if (!token){
            irParaLogin(history)
        }
    }, [history])
}
export default useProtectedPage