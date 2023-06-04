import { BrowserRouter,Routes ,Route} from "react-router-dom"
import { PessoaFisica } from "./pages/pessoa/PessoaFisica"




export const AppRotas = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PessoaFisica/>}  />         

        </Routes>
        
        </BrowserRouter>
    )
}