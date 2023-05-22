package com.usuario.usuario.model.dto;

import java.time.LocalDate;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UsuarioDTOTeste{
    

    @Column(name = "usro_nome")
    private String usroNome;   

    @Column(name = "usro_cpf")
    private String usroCpf;

    private LocalDate usroDtNascimento;


    
}
