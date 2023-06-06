package com.projeto.empresa.backendjava.pessoa.pessoafisica.model;

import java.time.LocalDate;

import com.projeto.empresa.backendjava.pessoa.Pessoa;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity


    @AttributeOverride(name = "pessoaNome", column = @Column(name = "pefi_nome", length = 150, nullable = false))
    @AttributeOverride(name = "pessoaFoneCelular", column = @Column(name = "pefi_fone_celular",length = 20))
    @AttributeOverride(name = "pessoaFoneFixo", column = @Column(name = "pefi_fone_fixo", length = 20))
    @AttributeOverride(name = "pessoaEmail", column = @Column(name = "pefi_email",length = 150,nullable = false,unique = true))
    @AttributeOverride(name = "pessoaCep", column = @Column(name = "pefi_cep", length = 8))
    @AttributeOverride(name = "pessoaLogradouro", column = @Column(name = "pefi_logradouro", length = 200))
    @AttributeOverride(name = "pessoaLogradouroNr", column = @Column(name = "pefi_logradouro_nr", length = 10))
    @AttributeOverride(name = "pessoaBairro", column = @Column(name = "pefi_bairro",length = 150))
    @AttributeOverride(name = "pessoaCidade", column = @Column(name = "pefi_cidade",length = 150))
    @AttributeOverride(name = "pessoaUf", column = @Column(name = "pefi_uf",length = 2))
    @AttributeOverride(name = "pessoaDtCadastro", column = @Column(name = "pefi_dt_cadastro",length = 2))
    @AttributeOverride(name = "pessoaDtAtualizacao", column = @Column(name = "pefi_dt_atualizacao",length = 2))
    

public class PessoaFisica extends Pessoa{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pessoaFisicaId;

    @Column(name = "pefi_cpf", length = 11, unique = true, nullable = false)
    private String pessoaCpf;

    @Column(name = "pefi_dt_nascimento")
    private LocalDate pessoaDtNascimento;

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((pessoaFisicaId == null) ? 0 : pessoaFisicaId.hashCode());
        result = prime * result + ((pessoaCpf == null) ? 0 : pessoaCpf.hashCode());
        result = prime * result + ((pessoaDtNascimento == null) ? 0 : pessoaDtNascimento.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (!super.equals(obj))
            return false;
        if (getClass() != obj.getClass())
            return false;
        PessoaFisica other = (PessoaFisica) obj;
        if (pessoaFisicaId == null) {
            if (other.pessoaFisicaId != null)
                return false;
        } else if (!pessoaFisicaId.equals(other.pessoaFisicaId))
            return false;
        if (pessoaCpf == null) {
            if (other.pessoaCpf != null)
                return false;
        } else if (!pessoaCpf.equals(other.pessoaCpf))
            return false;
        if (pessoaDtNascimento == null) {
            if (other.pessoaDtNascimento != null)
                return false;
        } else if (!pessoaDtNascimento.equals(other.pessoaDtNascimento))
            return false;
        return true;
    }

   
}
