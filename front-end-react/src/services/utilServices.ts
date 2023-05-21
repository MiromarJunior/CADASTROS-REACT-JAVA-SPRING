import { cpf } from 'cpf-cnpj-validator';
import { strict } from "assert";


// }
export const dataBR = (data: string) => {

    const dataFormat = new Date(data);

    const dataBrFormatada = (
        dataFormat.getUTCDate().toString().padStart(2, "0")
        + "/" +
        (dataFormat.getMonth() + 1).toString().padStart(2, "0")
        + "/" +
        dataFormat.getFullYear().toString()

    );
    return dataBrFormatada;
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

 
export const formataCPF = (value :string) => {

  if (!value) return ''
  
  return value.replace(/[\D]/g, '')
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



export const formataCelular = (value:string) => {
  if (!value) return '';
  
  return value.toString().replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)/, '$1')
}





export const validaCelular = (id:string)=>{
  const inputCelular = document.getElementById(id)  as HTMLInputElement; 
    if(inputCelular.value.length <= 15){
      inputCelular.value = formataCelular(inputCelular.value);       
     
      if(inputCelular.value.length < 15){
        inputCelular.setCustomValidity("Celular inválido!");       
      }else{
        inputCelular.setCustomValidity("");       
      }
      
   }    
}

// export const formataFoneFixo = (value) => {

//   if (!value) return '';
  
//   return value.toString().replace(/[\D]/g, '')
//       .replace(/(\d{2})(\d)/, '($1) $2')
//       .replace(/(\d{4})(\d)/, '$1-$2')
//       .replace(/(-\d{4})(\d+?)/, '$1')
//   }
  

// export const validaFoneFIxo = (id)=>{
//   const inputFoneFixo = document.getElementById(id);
//     if(inputFoneFixo.value.length <= 14){
//       inputFoneFixo.value = formataFoneFixo(inputFoneFixo.value); 
      
//       if(inputFoneFixo.value.length < 14){
//         inputFoneFixo.setCustomValidity("Telefone Fixo inválido!");       
//       }else{
//         inputFoneFixo.setCustomValidity("");       
//       }
      
//    }    
// }



