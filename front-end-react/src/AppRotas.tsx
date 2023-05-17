import { BrowserRouter,Routes ,Route} from "react-router-dom"
import { Usuario } from "./pages/usuario/Usuario"
import { UsuarioCadastro } from "./pages/usuario/UsuarioCadastro"

const lista = {
    nome: "Usuario",
    usuario : "miiis"
}
export const AppRotas = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Usuario/>}  />
            <Route path="/cad" element={<UsuarioCadastro lista={lista}/>}  />

        </Routes>
        
        </BrowserRouter>
    )
}