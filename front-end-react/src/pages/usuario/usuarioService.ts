import axios from "axios";
import { mostrarAlerta } from "../../services/utilServices";

const baseURL = process.env.REACT_APP_API_URL;

export const getApiBack = async (data:object,uri:string,setRows:Function) =>{
    return await axios.get(`${baseURL}${uri}`,{params : data}).then((res)=>{      
        setRows(res.data);     
    }).catch((error)=>{
        console.log(error);
        mostrarAlerta(error.response.data.message,true).catch((error) => console.error(error));
    })
}

export const postApiBack =  async(data:object,uri:string) =>{
    return await axios.post(`${baseURL}${uri}`, data).then((res)=>{      
        mostrarAlerta("Registro Cadastrado com Sucesso !",false).catch((error) => console.error(error));

       return true;    
    }).catch((error)=>{
        console.log(error);
        if(error.response.status === 400){
            return mostrarAlerta(
                error.response.data.errors[0].field +"\n"+
                error.response.data.errors[0].defaultMessage
                ,true);
        }
        mostrarAlerta(error.response.data.message,true).catch((error) => console.error(error));
    })
}

export const putApiBack =  async(id:number,data:object,uri:string) =>{
    return await axios.put(`${baseURL}${uri}/${id}`, data).then((res)=>{   
        mostrarAlerta("Registro Atualizado com Sucesso !",false).catch((error) => console.error(error));
     
        return true;   
    
       
    }).catch((error)=>{
        console.log(error);
        if(error.response.status === 400){
            return mostrarAlerta(
                error.response.data.errors[0].field +"\n"+
                error.response.data.errors[0].defaultMessage
                ,true).catch((error) => console.error(error));
        }
        mostrarAlerta(error.response.data.message,true).catch((error) => console.error(error));
    })
}

export const deleteApiBack =  async(id:number,uri:string) =>{
    return await axios.delete(`${baseURL}${uri}/${id}`).then((res)=>{      
       return true;    
    }).catch((error)=>{
        console.log(error);
        if(error.response.status === 400){
            return mostrarAlerta(
                error.response.data.errors[0].field +"\n"+
                error.response.data.errors[0].defaultMessage
                ,true).catch((error) => console.error(error));
        }
        mostrarAlerta(error.response.data.message,true).catch((error) => console.error(error));
    })
}


  