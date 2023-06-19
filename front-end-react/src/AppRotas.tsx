import { BrowserRouter,Routes ,Route} from "react-router-dom"
import { PessoaFisica } from "./pages/pessoa/PessoaFisica"
import { CadastroPessoaFisica } from "./pages/pessoa/CadastroPessoaFisica"




export const AppRotas = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PessoaFisica/>}  />         
            <Route path="/cadastroPessoaFisica" element={<CadastroPessoaFisica/>}  />         

        </Routes>
        
        </BrowserRouter>
    )
}