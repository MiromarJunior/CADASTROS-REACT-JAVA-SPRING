import { useEffect, useState } from "react"
import { UsuarioModel } from "./usuarioModel"
import { getApiBack } from "./usuarioService"
import { IconButton, Paper } from "@mui/material";
import { dataBR } from "../../services/utilServices";
import { ButtonDel, ButtonEdit } from "../../services/ButtonService";
import { Link, useNavigate } from "react-router-dom";
import { UsuarioCadastro } from "./UsuarioCadastro";


export const Usuario = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState<UsuarioModel[] | null>();


    useEffect(() => {
        const busca = async () => {
             await getApiBack({}, 'usuario', setRows);
            //console.log(valor)

        }
      
            busca();
      

    }, [])

   
    const [usuario,setUsuario] = useState<UsuarioModel | null>();

    const alteraUsuario = (lista: UsuarioModel | null) => {    
        navigate("/usuarioCadastro",{state:{lista}})

         


    }





   
    return (
        <div>
            <div >
            <h1 className="titulo" >USUÁRIO</h1>
            <div className="centralizaDiv" >
                <Paper sx={{ width: "80%" }} >

                    <table className="  table table-hover table-sm  table-bordered">
                        <thead>
                            <tr>
                                <th>AÇÃO</th>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>USUARIO</th>
                                <th>DATA NASCIMENTO</th>

                            </tr>

                        </thead>
                        <tbody>
                            {rows?.map((l) =>
                                <tr key={l.usuarioId}>
                                    <td align="center">

                                        <IconButton onClick={() => alteraUsuario(l)} className="iconButtonEdit">
                                            <ButtonEdit />
                                        </IconButton>
                                        <IconButton className="iconButtonEdit">
                                            <ButtonDel />
                                        </IconButton>


                                    </td>
                                    <td>{l.usuarioId}</td>
                                    <td>{l.usroNome}</td>
                                    <td>{l.usroUsuario}</td>
                                    <td>{dataBR(l.usroDtNascimento)}</td>


                                </tr>
                            )}
                        </tbody>

                    </table>
                </Paper>
            </div>
            </div>

   


        </div>
    )
}