import { useEffect, useState } from "react"
import { deleteApiBack, getApiBack } from "../../services/crudService";
import { PessoaFisicaModel } from "./PessoaFisicaModel";
import { ColumnTable, TableSimple } from "../../components/table/TableSimple";
import { confirmaDel, dataBR, formataCelular } from "../../services/utilServices";



import { ButtonDel, ButtonEdit } from "../../components/buttons/ButtonAction";



export const PessoaFisica = () =>{

    const [rows,setRows] = useState<PessoaFisicaModel[]>([]);

    const buscaPessoa = () =>{
        getApiBack({},"pessoa",setRows).catch(error=>console.error(error));
    }

    useEffect(()=>{
        buscaPessoa();
    },[]);

    const deletePessoa = (pessoaId:number)=>{
        confirmaDel().then((response)=>{
            if(response.isConfirmed){
                deleteApiBack(pessoaId,"pessoa").then((resp)=>{
                    if(resp === true){
                        buscaPessoa();
                    }
                })
            }
        })
    }

    const columns:ColumnTable[] = ([
      
        {id:0,value:"pessoaNome",title:"NOME", width:"",alignTitle:"",align:""},
        {id:1,value:"pessoaEmail",title:"EMAIL", width:"",alignTitle:"",align:""},
        {id:2,value:"pessoaDtNascForm",title:"DATA DE NASCIMENTO", width:"",alignTitle:"",align:""},
        {id:3,value:"pessoaFoneCelularForm",title:"CELULAR", width:"",alignTitle:"",align:""},
        {id:4,value:"alteracao",title:"ALTERAÇÃO", width:"50",alignTitle:"",align:""},
    ]);
    const tableColumnFormat = (rowSelExt:PessoaFisicaModel[]) => {
  
        if (rowSelExt.length > 0) {
            rowSelExt.forEach((rowSel)=>{       
                rowSel.pessoaDtNascForm = dataBR(rowSel.pessoaDtNascimento);    
                rowSel.pessoaFoneCelularForm = formataCelular(rowSel.pessoaFoneCelular);
                rowSel.alteracao = (
                    <div style={{display : "flex", textAlign : "center"}}>
                        <ButtonEdit />
                        <ButtonDel deleteFunction={deletePessoa} deleteParam={rowSel.pessoaFisicaId}/>
    
    
                    </div>
                )
                
            })
    
        }
    
    }



    console.log(rows);

    return(
        <div>

<h1 className="titulo" >LISTA DE USUÁRIOS</h1>

            <div>
                <TableSimple rowId={"pessoaFisicaId"} columns={columns} rows={rows} tableColumnFormat={tableColumnFormat}/>
            </div>

        </div>
    )



}