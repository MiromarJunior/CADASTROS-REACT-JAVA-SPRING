import { BrowserRouter,Routes ,Route} from "react-router-dom"
import { PessoaFisica } from "./pages/pessoa/PessoaFisica"
import { CadastroPessoaFisica } from "./pages/pessoa/CadastroPessoaFisica"
import Menu from "./Menu"
import { HomeInit } from "./pages/home/HomeInit"




export const AppRotas = ()=>{
    return(
        <BrowserRouter>
         <Menu>
        <Routes>
        <Route path="/" element={<HomeInit/>}  /> 
            <Route path="/pessoaFisica" element={<PessoaFisica/>}  />         
            <Route path="/cadastroPessoaFisica" element={<CadastroPessoaFisica/>}  />         
          
        </Routes>
        </Menu>
        
        </BrowserRouter>
    )
}