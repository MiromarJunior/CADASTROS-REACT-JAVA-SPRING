import { useEffect, useState } from "react"
import { getApiBack } from "../../services/crudService";
import { PessoaFisicaModel } from "./PessoaFisicaModel";
import { ColumnTable, TableSimple } from "../../components/table/TableSimple";
import { dataBR, formataCelular } from "../../services/utilServices";



import { ButtonDel, ButtonEdit } from "../../components/buttons/ButtonAction";


const tableColumnFormat = (rowSelExt:PessoaFisicaModel[]) => {
  
    if (rowSelExt.length > 0) {
        rowSelExt.forEach((rowSel)=>{       
            rowSel.pessoaDtNascForm = dataBR(rowSel.pessoaDtNascimento);    
            rowSel.pessoaFoneCelularForm = formataCelular(rowSel.pessoaFoneCelular);
            rowSel.alteracao = (
                <div style={{display : "flex", textAlign : "center"}}>
                    <ButtonEdit />
                    <ButtonDel/>


                </div>
            )
            
        })

    }

}
export const PessoaFisica = () =>{

    const [rows,setRows] = useState<PessoaFisicaModel[]>([]);

    const buscaPessoa = () =>{
        getApiBack({},"pessoa",setRows).catch(error=>console.error(error));
    }

    useEffect(()=>{
        buscaPessoa();
    },[]);

    const columns:ColumnTable[] = ([
      
        {id:0,value:"pessoaNome",title:"NOME", width:"",alignTitle:"",align:""},
        {id:1,value:"pessoaEmail",title:"EMAIL", width:"",alignTitle:"",align:""},
        {id:2,value:"pessoaDtNascForm",title:"DATA DE NASCIMENTO", width:"",alignTitle:"",align:""},
        {id:3,value:"pessoaFoneCelularForm",title:"CELULAR", width:"",alignTitle:"",align:""},
        {id:4,value:"alteracao",title:"ALTERAÇÃO", width:"50",alignTitle:"",align:""},
    ]);





    console.log(rows);

    return(
        <div>

<h1 className="titulo" >LISTA DE USUÁRIOS</h1>

            <div>
                <TableSimple columns={columns} rows={rows} tableColumnFormat={tableColumnFormat}/>
            </div>

        </div>
    )



}