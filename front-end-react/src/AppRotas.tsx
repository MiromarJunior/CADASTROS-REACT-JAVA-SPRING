import { BrowserRouter,Routes ,Route} from "react-router-dom"
import { Usuario } from "./pages/usuario/Usuario"




export const AppRotas = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Usuario/>}  />         

        </Routes>
        
        </BrowserRouter>
    )
}