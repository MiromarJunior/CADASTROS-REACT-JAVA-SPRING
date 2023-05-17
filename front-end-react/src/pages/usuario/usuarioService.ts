import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const getApiBack = async (data:object,uri:string,setRows:Function)=>{
    return await axios.get(`${baseURL}${uri}`,{params : data}).then((res)=>{
        setRows(res.data);

    }).catch((error)=>{
        console.log(error);
        alert(error.response.data.message);
    })
}