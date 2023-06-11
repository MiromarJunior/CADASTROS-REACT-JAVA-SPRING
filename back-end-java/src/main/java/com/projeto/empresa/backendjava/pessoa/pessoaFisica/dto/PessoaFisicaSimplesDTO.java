package com.projeto.empresa.backendjava.pessoa.pessoafisica.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.validator.constraints.br.CPF;

import com.projeto.empresa.backendjava.pessoa.pessoafisica.model.PessoaFisica;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class PessoaFisicaSimplesDTO {

    private Long pessoaFisicaId;

    @NotBlank(message ="Campo obrigatório")
    @Size(min = 3, max = 150, message = "'${validatedValue}' precisa estar entre {min} e {max} caracteres.")
    private String pessoaNome;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaFoneCelular;


    @Email
    @NotBlank(message ="Campo obrigatório")
    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaEmail;

    private LocalDateTime pessoaDtCadastro;

    private LocalDateTime pessoaDtAtualizacao;

    @NotBlank(message ="Campo obrigatório")
    @CPF
    private String pessoaCpf;

    @Past(message = "Data não pode ser hoje!")
    private LocalDate pessoaDtNascimento;

    public PessoaFisicaSimplesDTO(PessoaFisica pessoa){
        this.pessoaFisicaId = pessoa.getPessoaFisicaId();
        this.pessoaNome = pessoa.getPessoaNome();
        this.pessoaFoneCelular = pessoa.getPessoaFoneCelular();
        this.pessoaEmail = pessoa.getPessoaEmail();
        this.pessoaDtCadastro = pessoa.getPessoaDtCadastro();
        this.pessoaDtAtualizacao = pessoa.getPessoaDtAtualizacao();
        this.pessoaCpf = pessoa.getPessoaCpf();
        this.pessoaDtNascimento= pessoa.getPessoaDtNascimento();

    }



    
    
}
