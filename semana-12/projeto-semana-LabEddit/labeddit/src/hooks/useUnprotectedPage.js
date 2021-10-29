import { useHistory } from "react-router";
import {irParaFeed} from "../routes/coordinator"
import { useLayoutEffect } from "react";

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if (token){
            irParaFeed(history)
        }
    },[history])
}
export default useUnprotectedPage