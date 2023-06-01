package com.projeto.empresa.backendjava.pessoa.pessoaFisica.service;

import java.util.List;

import com.projeto.empresa.backendjava.pessoa.pessoaFisica.dto.PessoaFisicaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.dto.PessoaFisicaSimplesDTO;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.dto.PessoaFisicaUpdateDTO;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.model.PessoaFisica;

public interface PessoaFisicaService {

    List<PessoaFisicaSimplesDTO>  getSimpleDTO();

    List<PessoaFisica>  getAllPessoaFisica();

    PessoaFisica  getPessoaFisicaById(Long id);

    void validaCpf(String cpf);

    PessoaFisica createPessoaFisica(PessoaFisicaDTO dto);

    PessoaFisica updatePessoaFisica(Long id, PessoaFisicaUpdateDTO dto);

  
    
}
