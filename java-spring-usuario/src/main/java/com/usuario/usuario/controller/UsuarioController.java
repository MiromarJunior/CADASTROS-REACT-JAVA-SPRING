package com.usuario.usuario.controller;

import java.net.URI;
import java.util.List;

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

import com.usuario.usuario.model.Usuario;
import com.usuario.usuario.model.dto.UsuarioDTO;
import com.usuario.usuario.model.dto.UsuarioDTOTeste;
import com.usuario.usuario.model.dto.UsuarioDTOUpdate;
import com.usuario.usuario.service.UsuarioService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioService usuService;

    @GetMapping()
    public ResponseEntity<List<Usuario>> getAll(){
        List<Usuario> usuarios = usuService.getAll();
        return new ResponseEntity<>(usuarios,HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getById(@PathVariable Long id){
      Usuario usu = usuService.getById(id);      
        return new ResponseEntity<>(usu,HttpStatus.OK);

    }

    @GetMapping("/usu")
    public ResponseEntity<List<UsuarioDTOTeste>> getById(){
      List<UsuarioDTOTeste> usu = usuService.findCpfNome();      
        return new ResponseEntity<>(usu,HttpStatus.OK);

    }



    @PostMapping
    public ResponseEntity<Usuario> saveUsu(@Valid @RequestBody  UsuarioDTO dto){
       Usuario usu = usuService.saveUsuario(dto);
       URI uri = ServletUriComponentsBuilder
        .fromCurrentRequest()
        .path("/{id}")
        .buildAndExpand(usu.getUsuarioId())
        .toUri();
      return  ResponseEntity.created(uri).body(usu);

    }

    @PutMapping("{id}")
    public ResponseEntity<Usuario> updateUsu( @PathVariable Long id, @Valid @RequestBody  UsuarioDTOUpdate dto){
       Usuario usu = usuService.updateUsuario(id, dto);
      return  ResponseEntity.ok().body(usu);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id){
      usuService.deleteUsuario(id);
      return ResponseEntity.ok().build();
    }
    
}
