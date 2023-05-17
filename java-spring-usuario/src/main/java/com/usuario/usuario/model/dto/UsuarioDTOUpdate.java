package com.usuario.usuario.model.dto;



import java.time.LocalDate;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UsuarioDTOUpdate {

    @NotBlank(message ="Campo obrigatório")
    @Size(min = 3, max = 128, message = "'${validatedValue}' precisa estar entre {min} e {max} caracteres.")
    private String usroNome;
    
    @NotBlank(message ="Campo obrigatório")
    @Size(min = 3, max = 64, message = "'${validatedValue}' precisa estar entre {min} e {max} caracteres.")
    private String usroUsuario;

    @NotBlank(message ="Campo obrigatório")
    @Email(message = "Email inválido")
    private String usroEmail;
    
    @NotBlank(message ="Campo obrigatório")
    private String usroCelular1;

    private LocalDate usroDtNascimento;
    
}
