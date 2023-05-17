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
  



