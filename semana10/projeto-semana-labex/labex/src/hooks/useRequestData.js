import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (endpoint, estadoInicial) =>{
    const [data, setData] = useState(estadoInicial)

    const pegaData = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Eduardo-Moraes-Maryam${endpoint}`,{
            headers:{
                auth: localStorage.getItem("token")
            }
        }).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            window.alert(err.response.data.message)
        })
    }
    useEffect(()=>{
        pegaData()
    }, [endpoint])
    return(
        [data, pegaData]
    )
}
export default useRequestData