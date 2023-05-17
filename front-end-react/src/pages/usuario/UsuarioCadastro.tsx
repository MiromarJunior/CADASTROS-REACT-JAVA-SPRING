import { createFormInput } from "../../services/utilServices"
import { UsuarioModel } from "./usuarioModel";
import { UsuarioTeste } from "./usuarioTeste";


export const UsuarioCadastro = ({lista}: {lista : UsuarioTeste})=>{

    const cadastraUsuario = (e : React.FormEvent)=>{
        e.preventDefault();

       const data =  createFormInput("#formUsuario");
       console.log(data);

    }


    return(
        <div>


            <div>
                <form onSubmit={cadastraUsuario} id="formUsuario">
                    <input type="text" id="nome" defaultValue={lista.nome} />
                    <input type="text" id="usuario" defaultValue={lista.usuario}/>
                    <input type="submit" />


                </form>
            </div>
        </div>
    )

}