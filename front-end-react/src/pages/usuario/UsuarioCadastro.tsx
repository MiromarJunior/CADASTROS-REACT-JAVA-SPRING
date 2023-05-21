import { Container, TextField } from "@mui/material";
import { createFormInput, formataCPF, formataCelular, validaCPF, validaCelular } from "../../services/utilServices"
import { UsuarioModel } from "./usuarioModel";
import { useLocation } from "react-router-dom";



export const UsuarioCadastro = () => {
    const { state } = useLocation();
    const { lista }: { lista: UsuarioModel } = state || { lista: null };
    console.log(lista)
    const cadastraUsuario = (e: React.FormEvent) => {
        e.preventDefault();

        const data = createFormInput("#formUsuario");
        console.log(data);


    }
    const returnPage = () => {
        window.history.back();

    }


    return (
        <div>
            <h1 className="titulo" >CADASTRO DE USUÁRIO</h1>


            <Container>
                <form onSubmit={cadastraUsuario} id="formUsuario">
                    <div>
                        <TextField id="usroNome" required defaultValue={lista?.usroNome}
                            size="small"
                            label="Nome"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 128 }}
                            sx={{ margin: "0.5rem" }}

                        />
                        <TextField id="usroUsuario" required defaultValue={lista?.usroUsuario}
                            size="small"
                            label="Usuário"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 64 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="usroCpf" required defaultValue={formataCPF(lista?.usroCpf)}
                            onKeyUp={() => validaCPF("usroCpf")}
                            size="small"
                            label="Cpf"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 14 }}
                            sx={{ margin: "0.5rem" }}

                        />

                    </div>
                    <div>
                        <TextField id="usroCelular1" required defaultValue={formataCelular(lista?.usroCelular1)}
                            onKeyUp={() => validaCelular("usroCelular1")}
                            size="small"
                            label="Celular"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 15 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="usroCelular2" defaultValue={formataCelular(lista?.usroCelular2)}
                            onKeyUp={() => validaCelular("usroCelular2")}
                            size="small"
                            label="Celular 2"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 15 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="usroWhatsapp" defaultValue={lista?.usroWhatsapp}
                            select
                            SelectProps={{ native: true }}
                            size="small"
                            label="WhatsApp"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 15 }}
                            sx={{ margin: "0.5rem" }}>
                            <option value={""}></option>
                            <option value={lista?.usroCelular1}>{formataCelular(lista?.usroCelular1)}</option>
                            <option value={""}></option>
                        </TextField>



                    </div>


                   
                    <div>
                    <button className="btn btn-outline-primary btn-sm" style={{margin : "0.5rem"}} type="submit" form="formUsuario"  >SALVAR</button>
                  
                        <button className="btn btn-outline-danger btn-sm" type="button" onClick={returnPage} >VOLTAR</button>


                    </div>

                </form>

            </Container>
        </div>
    )

}