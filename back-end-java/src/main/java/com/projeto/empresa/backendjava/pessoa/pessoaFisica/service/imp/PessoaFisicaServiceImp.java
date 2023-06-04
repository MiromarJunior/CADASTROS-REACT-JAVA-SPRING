package com.projeto.empresa.backendjava.pessoa.pessoaFisica.service.imp;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.projeto.empresa.backendjava.pessoa.pessoaFisica.dto.PessoaFisicaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.dto.PessoaFisicaSimplesDTO;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.dto.PessoaFisicaUpdateDTO;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.model.PessoaFisica;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.repository.PessoaFisicaRepository;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.service.PessoaFisicaService;

@Service
public class PessoaFisicaServiceImp implements PessoaFisicaService {

    @Autowired
    private PessoaFisicaRepository repository;

    private String apenasNumeros(String value){
        if(value != null){
            return value.replaceAll("\\D+", "");
        }else{
            return value;
        }

    }

    @Override
    public List<PessoaFisicaSimplesDTO> getSimpleDTO() {
        List<PessoaFisica> pessoas = repository.findAll();
        return pessoas.stream()
                .map(pessoa -> {
                    PessoaFisicaSimplesDTO dto = new PessoaFisicaSimplesDTO();
                    dto.setPessoaNome(pessoa.getPessoaNome());
                    dto.setPessoaEmail(pessoa.getPessoaEmail());
                    dto.setPessoaCpf(apenasNumeros(pessoa.getPessoaCpf()));
                    dto.setPessoaDtCadastro(pessoa.getPessoaDtCadastro());
                    return dto;
                }).collect(Collectors.toList());

    }

    @Override
    public PessoaFisica createPessoaFisica(PessoaFisicaDTO dto) {
        validaCpf(dto.getPessoaCpf());
        
        PessoaFisica pessoa = new PessoaFisica();
        pessoa.setPessoaNome(dto.getPessoaNome());
        pessoa.setPessoaCpf(dto.getPessoaCpf());
        pessoa.setPessoaDtNascimento(dto.getPessoaDtNascimento());
        pessoa.setPessoaFoneCelular( apenasNumeros(dto.getPessoaFoneCelular()));
        pessoa.setPessoaEmail(dto.getPessoaEmail());
        pessoa.setPessoaDtCadastro(LocalDateTime.now());
        return repository.save(pessoa);

    }

    @Override
    public List<PessoaFisica> getAllPessoaFisica() {
        return repository.findAll();
    }

    @Override
    public PessoaFisica getPessoaFisicaById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Usuário não encontrado com o ID: " + id));
    }

    @Override
    public PessoaFisica updatePessoaFisica(Long id,PessoaFisicaUpdateDTO dto) {
       
        PessoaFisica pessoa = getPessoaFisicaById(id);

        pessoa.setPessoaFisicaId(id);
        pessoa.setPessoaNome(dto.getPessoaNome());
        pessoa.setPessoaDtNascimento(dto.getPessoaDtNascimento());
        pessoa.setPessoaFoneCelular(apenasNumeros(dto.getPessoaFoneCelular()));
        pessoa.setPessoaEmail(dto.getPessoaEmail());    
        pessoa.setPessoaDtAtualizacao(LocalDateTime.now());
        pessoa.setPessoaBairro(dto.getPessoaBairro());
        pessoa.setPessoaCep(apenasNumeros(dto.getPessoaCep()));
        pessoa.setPessoaCidade(dto.getPessoaCidade());
        pessoa.setPessoaFoneFixo(apenasNumeros(dto.getPessoaFoneFixo()));
        pessoa.setPessoaLogradouro(dto.getPessoaLogradouro());
        pessoa.setPessoaLogradouroNr(dto.getPessoaLogradouroNr());
        pessoa.setPessoaUf(dto.getPessoaUf());
   
        return repository.save(pessoa);
    }

    @Override
    public void validaCpf(String cpf) {
        String cpfString = cpf.replaceAll("\\D+", "");        
        if(repository.findByPessoaCpf(cpfString).isPresent()){
           throw new ResponseStatusException(HttpStatus.CONFLICT,
            "Erro ao Cadastrar ou Atualizar Pessoa - CPF já Cadastrado: ");
        }
    }

    @Override
    public Map<String, Object> deletePessoaFisica(Long id) {
        getPessoaFisicaById(id);
        repository.deleteById(id);
        Map<String, Object> resposta = new HashMap<>();
        resposta.put("mensagem", "Aluno Excluído com Sucesso!");
       return resposta;
    }

}
