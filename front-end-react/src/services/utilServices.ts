



import { cpf } from 'cpf-cnpj-validator';
import Swal from 'sweetalert2';



// }
export const dataBR = (data: string) => {
    return data?.split("-").reverse().join("/");
};

export const dataBRCompleta = (data: string) => {
    const dataFormat = new Date(data);

    const dataBrFormatada = (
        dataFormat.getDate().toString().padStart(2, "0") +
        "/" +
        (dataFormat.getMonth() + 1).toString().padStart(2, "0") +
        "/" +
        dataFormat.getFullYear().toString()

        + " " +
        dataFormat.getHours().toString().padStart(2, "0")

        + ":" +
        dataFormat.getMinutes().toString().padStart(2, "0")


    );
    return dataBrFormatada;

};

export const dataInput = (data: string) => {

  const dataFormat = new Date(data);

  const dataBrFormatada = (
    dataFormat.getFullYear().toString()
    + "-" +
    (dataFormat.getMonth() + 1).toString().padStart(2, "0")
    + "-" +
      dataFormat.getUTCDate().toString().padStart(2, "0")
     

  );
  return dataBrFormatada;
};

export const createFormInput = (idForm: string) => {
    const form = document.querySelector(idForm) as HTMLFormElement;
    const inputs = Array.from(form.elements) as HTMLInputElement[];
  
    const formObject: Record<string, string> = inputs.reduce((acc, input) => {
      if (input.id) {
        acc[input.id] = input.value;
      }
      return acc;
    }, {} as Record<string, string>);
  
    return formObject;
  };

 
export const formataCPF = (value :string | undefined) => {

  if (!value) return ''
  
  return value.replace(/\D/g, '')
  .replace(/(\d{3})(\d)/, '$1$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1-$2')

}
export const validaCPF= (id:string)=>{
  const inputCPF = document.getElementById(id) as HTMLInputElement; 
  
    if(inputCPF.value.length <= 14){
      inputCPF.value = formataCPF(inputCPF.value);  
     
      if(cpf.isValid(inputCPF.value) === false){
        inputCPF.setCustomValidity("CPF inválido!");
        inputCPF.style.color = "red";
      }else{
        inputCPF.setCustomValidity("");
        inputCPF.style.color = "";   
      }
   }    
}



export const formataCelular = (value:string | undefined) => {
  if (!value) return '';
  
  return value.toString().replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)/, '$1')
}





export const validaCelular = (id:string)=>{
  const inputCelular = document.getElementById(id)  as HTMLInputElement; 
  if(!inputCelular?.value)return "";
    if(inputCelular.value.length <= 15){
      inputCelular.value = formataCelular(inputCelular.value);       
     
      if(inputCelular.value.length < 15){
        inputCelular.setCustomValidity("Celular inválido!");       
      }else{
        inputCelular.setCustomValidity("");       
      }
      
   }    
   
}

export const apenasNr = (id:string) => {
  const nr = document.getElementById(id)  as HTMLInputElement; 

  if(!nr?.value)return "";
 nr.value = nr?.value.replace(/\D/g, '');
 

};

 interface CepProps{
idCep:string;
idUF:string;
idCidade:string;
idBairro:string;
idLogradouro:string;
}

export const buscaCepOnline = async ({idCep,idUF,idCidade,idBairro,idLogradouro}:CepProps) => {
  const inputCep = document.getElementById(idCep) as HTMLInputElement; 
  const inputUF = document.getElementById(idUF) as HTMLInputElement; 
  const inputCidade = document.getElementById(idCidade) as HTMLInputElement; 
  const inputBairro = document.getElementById(idBairro) as HTMLInputElement; 
  const inputLogradouro = document.getElementById(idLogradouro) as HTMLInputElement; 

  if(!inputCep)return "";

  const cep = inputCep.value;
  
  if ((cep).toString().length === 8) {
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(res => res.json()).then(data => {
              if (data.erro) {                       
                  return mostrarAlerta("CEP não encontrado", true)
              } else {
                inputUF.value = data.uf;
                inputCidade.value = data.localidade;
                inputBairro.value = data.bairro;
                inputLogradouro.value = data.logradouro;

              }
          }).catch((error) => {
              console.error(error);
              if (error.code === "ERR_NETWORK") return mostrarAlerta("Erro ao conectar com Servidor", true);
              mostrarAlerta(error.response.data, true).catch(error=> console.error(error));
          });
  } else {
      mostrarAlerta("CEP inválido!", true).catch(error=> console.error(error));
  }

}


/** 
export const formataFoneFixo = (value) => {

  if (!value) return '';
  
  return value.toString().replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)/, '$1')
  }
  

export const validaFoneFIxo = (id)=>{
  const inputFoneFixo = document.getElementById(id);
    if(inputFoneFixo.value.length <= 14){
      inputFoneFixo.value = formataFoneFixo(inputFoneFixo.value); 
      
      if(inputFoneFixo.value.length < 14){
        inputFoneFixo.setCustomValidity("Telefone Fixo inválido!");       
      }else{
        inputFoneFixo.setCustomValidity("");       
      }
      
   }    
}
*/
export const estadosBR:string[] = 
 ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
  'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO' ];


  export const mostrarAlerta = async(msg:string, error:boolean) => {
  
    let tempo = (error === true ? 60000 : 3000);
    let botao = (error === true ? true : false);
    return (
    await  Swal.fire({
        background: "rgb(218, 244, 235)",   
        position: 'center',      
        toast: true,
        width: "30em",
        title: msg,
        icon: (error === true ? "error" : "success"),
        showConfirmButton: botao,
        timer: tempo,
        confirmButtonColor: "red"
      })
    )
  }


  export const confirmaDel = async() => {

    return await Swal.fire({
      background: "rgb(218, 244, 235)",
      position: 'center',
      width: "25rem",
      title: 'Deseja excluir esse registro?',
      text: "Esta ação não poderá ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      toast: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: "Cancelar"
    })
  
  }

  export const confirmaMSG = async(msg:string) => {

    return await Swal.fire({
      background: "rgb(218, 244, 235)",
      width: "25rem",
      title: msg,
      icon: 'warning',
      showCancelButton: true,
      toast: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: "Cancelar"
    })
  
  }