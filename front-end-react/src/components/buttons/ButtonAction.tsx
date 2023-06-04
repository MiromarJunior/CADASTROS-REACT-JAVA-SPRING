import { IconButton } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

interface ButtonProps{
    
    deleteFunction: (value: number) => void;
    deleteParam: number;
}

export const ButtonEdit =()=>{
    return(
        <IconButton title="Alterar Registro" style={{ marginLeft : "0.5rem",marginRight :"0.5rem",  color:"green"}}>
        <EditIcon/>
    </IconButton>
    )
}

export const ButtonDel =({deleteFunction, deleteParam}:ButtonProps)=>{
    return(
        <IconButton onClick={()=>deleteFunction(deleteParam)}
        title="Excluir Registro" style={{marginLeft : "0.5rem",marginRight :"0.5rem",  color:"red"}}>
        <DeleteForeverIcon/>
    </IconButton>
    )
}