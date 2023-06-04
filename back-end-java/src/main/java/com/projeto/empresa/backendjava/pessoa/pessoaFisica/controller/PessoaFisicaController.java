package com.projeto.empresa.backendjava.pessoa.pessoaFisica.controller;

import java.net.URI;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.projeto.empresa.backendjava.pessoa.pessoaFisica.dto.PessoaFisicaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.dto.PessoaFisicaUpdateDTO;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.model.PessoaFisica;
import com.projeto.empresa.backendjava.pessoa.pessoaFisica.service.imp.PessoaFisicaServiceImp;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/pessoa")
public class PessoaFisicaController {

    @Autowired
    private PessoaFisicaServiceImp service;


    @GetMapping
    public ResponseEntity<List<PessoaFisica>> getAll(){
        List<PessoaFisica> pessoas = service.getAllPessoaFisica();
        return new ResponseEntity<>(pessoas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PessoaFisica> getbyId(@PathVariable Long id){
        PessoaFisica pessoa = service.getPessoaFisicaById(id);
        return new ResponseEntity<>(pessoa, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<PessoaFisica> savEntity(@Valid @RequestBody PessoaFisicaDTO dto){
        PessoaFisica pessoa =  service.createPessoaFisica(dto);
        URI uri = ServletUriComponentsBuilder
        .fromCurrentRequest()
        .path("/{id}")
        .buildAndExpand(pessoa.getPessoaFisicaId())
        .toUri();        
        return ResponseEntity.created(uri).body(pessoa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PessoaFisica> updatePessoa(@PathVariable  Long id,@Valid @RequestBody PessoaFisicaUpdateDTO dto){
        PessoaFisica pessoa = service.updatePessoaFisica(id, dto);
        return new ResponseEntity<>(pessoa, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deletePessoa(@PathVariable  Long id){
        Map<String, Object> resposta = service.deletePessoaFisica(id);   
       
     return new ResponseEntity<>(resposta,HttpStatus.OK);
    
    }


    





    
}
