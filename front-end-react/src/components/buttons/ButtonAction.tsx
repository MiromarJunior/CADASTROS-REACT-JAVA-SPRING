import { IconButton } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


export const ButtonEdit =()=>{
    return(
        <IconButton title="Alterar Registro" style={{ marginLeft : "0.5rem",marginRight :"0.5rem",  color:"green"}}>
        <EditIcon/>
    </IconButton>
    )
}

export const ButtonDel =()=>{
    return(
        <IconButton title="Excluir Registro" style={{marginLeft : "0.5rem",marginRight :"0.5rem",  color:"red"}}>
        <DeleteForeverIcon/>
    </IconButton>
    )
}