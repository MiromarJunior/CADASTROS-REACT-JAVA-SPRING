package com.usuario.usuario.service.imp;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.usuario.usuario.model.Usuario;
import com.usuario.usuario.model.dto.UsuarioDTO;
import com.usuario.usuario.model.dto.UsuarioDTOTeste;
import com.usuario.usuario.model.dto.UsuarioDTOUpdate;
import com.usuario.usuario.repository.UsuarioRepository;
import com.usuario.usuario.service.UsuarioService;

import jakarta.transaction.Transactional;

@Service
public class UsuarioServiceImp implements UsuarioService {
    
    @Autowired
    UsuarioRepository usuRepo;

    private String apenasNumeros(String value){
        if(value != null){
            return value.replaceAll("\\D+", "");
        }else{
            return value;
        }

    }

    private void validaCpf(String cpf){
        String cpfString = cpf.replaceAll("\\D+", "");        
        if(usuRepo.findByUsroCpf(cpfString).isPresent()){
           throw new ResponseStatusException(HttpStatus.CONFLICT,
            "Erro ao Cadastrar ou Atualizar Usuário - CPF já Cadastrado: ");
        }

    }

    private void validaUsuario(String usuario){
         
        if(usuRepo.findByUsroUsuario(usuario).isPresent()){
           throw new ResponseStatusException(HttpStatus.CONFLICT,
            "Erro ao Cadastrar ou Atualizar Usuário\n - Nome de usuário já Cadastrado: ");
        }

    }

   
    @Override
    public Usuario saveUsuario(UsuarioDTO dto) {
       Usuario usu = new Usuario();
       validaCpf(dto.getUsroCpf());    
       validaUsuario(dto.getUsroUsuario());       

        usu.setUsroNome(dto.getUsroNome());
        usu.setUsroUsuario(dto.getUsroUsuario());
        usu.setUsroEmail(dto.getUsroEmail());
        usu.setUsroCpf(dto.getUsroCpf());
        usu.setUsroDtNascimento(dto.getUsroDtNascimento());
        usu.setUsroCelular1( apenasNumeros(dto.getUsroCelular1()));
        usu.setUsroDtCadastro(LocalDateTime.now());
        usuRepo.save(usu);
        return usu;
    }

    @Override
    public List<Usuario> getAll() {
       return usuRepo.findAll();       
    }

    @Override
    public Usuario getById(Long id) {

     return usuRepo.findById(id)
     .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
     "Usuário não encontrado com o ID: " + id));    
    }

    @Override    
    public Usuario updateUsuario(Long id, UsuarioDTOUpdate dto) {
     Usuario usu = getById(id); 
     
        usu.setUsuarioId(id);
        usu.setUsroNome(dto.getUsroNome());       
        usu.setUsroEmail(dto.getUsroEmail());    
        usu.setUsroDtNascimento(dto.getUsroDtNascimento());
        usu.setUsroDtAtualizacao(LocalDateTime.now());
        usu.setUsroUsuario(dto.getUsroUsuario());
        usu.setUsroCelular1(apenasNumeros(dto.getUsroCelular1()));
        usuRepo.save(usu);
        return usu;
       
    }

    @Override
    public Void deleteUsuario(Long id) {          
        getById(id);       
        usuRepo.deleteById(id);
        return null;

    }

    @Override
    public List<UsuarioDTOTeste> findCpfNome() {
        List<String[]> result = usuRepo.findByNomeAndCpf();
        if(!result.isEmpty()){    
        List<UsuarioDTOTeste> dtoList = new ArrayList<>();
        for (String[] obj : result) {
            UsuarioDTOTeste dto = new UsuarioDTOTeste();
            dto.setUsroNome(obj[0]);
            dto.setUsroCpf(obj[1]);
            LocalDate localDate = LocalDate.parse(obj[2]);
            dto.setUsroDtNascimento(localDate);
            dtoList.add(dto);
        }
        return dtoList;
    }
    return Collections.emptyList();
       
    }


    
}

/*
 * 
 *     @Override
    public UsuarioDTOTeste findByIdUsu(Long id){
        UsuarioDTOTeste usu = new UsuarioDTOTeste();  
        
        List<String[]> result = usuRepo.findByNomeAndCpf(id);
        for (String[] obj : result) {
            usu.setUsroNome(obj[0]);
            usu.setUsroCpf(obj[1]);
            LocalDate localDate = LocalDate.parse(obj[2]);
            usu.setUsroDtNascimento(localDate);
    
        }

        return usu;
        
    }



           Optional<Usuario> usuarioOptional = usuRepo.findById(id);
        if (usuarioOptional.isEmpty()) {
            return null;
        }
        Usuario usuario = usuarioOptional.get();
        UsuarioDTO dto = new UsuarioDTO();
        BeanUtils.copyProperties(usuario, dto, "usroUsuario", "usroEmail", "usroCelular1");
        return dto;
 */