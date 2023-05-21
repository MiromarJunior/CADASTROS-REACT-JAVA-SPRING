import { BrowserRouter,Routes ,Route} from "react-router-dom"
import { Usuario } from "./pages/usuario/Usuario"
import { UsuarioCadastro } from "./pages/usuario/UsuarioCadastro"
import { UsuarioModel } from "./pages/usuario/usuarioModel"



export const AppRotas = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Usuario/>}  />
            <Route path="/usuarioCadastro/" element={<UsuarioCadastro />}  />

        </Routes>
        
        </BrowserRouter>
    )
}