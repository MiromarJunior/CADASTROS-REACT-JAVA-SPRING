package com.usuario.usuario.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  
    private Long usuarioId;


    @Column(length = 128,nullable = false,name = "usro_nome")
    private String usroNome;

    @Column(length = 64, unique = true,nullable = false)
    private String usroUsuario;

    @Column(length = 11, unique = true,nullable = false, name = "usro_cpf")
    private String usroCpf;

    @Column(length = 20, nullable = false)
    private String usroCelular1;

    @Column(length = 20)
    private String usroCelular2;

    @Column(length = 20)
    private String usroWhatsapp;

    @Column(length = 150)
    private String usroLogradouro;

    @Column(length = 15)
    private String usroLogradouroNr;

    @Column(length = 150)
    private String usroComplemento;

    @Column(length = 100)
    private String usroBairro;

    @Column(length = 100)
    private String usroCidade;

    @Column(length = 2)
    private String usroUF;
  
    private LocalDate usroDtNascimento;

    private LocalDateTime usroDtCadastro;

    private LocalDateTime usroDtAtualizacao;

    
    private String usroEmail;
    
    
}
