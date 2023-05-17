package com.usuario.usuario.service;

import java.util.List;
import com.usuario.usuario.model.Usuario;
import com.usuario.usuario.model.dto.UsuarioDTO;
import com.usuario.usuario.model.dto.UsuarioDTOTeste;
import com.usuario.usuario.model.dto.UsuarioDTOUpdate;


public interface UsuarioService {

    Usuario saveUsuario(UsuarioDTO dto);

    Usuario updateUsuario(Long id, UsuarioDTOUpdate dto);

    List<Usuario> getAll();

    Usuario getById(Long id);

    Void deleteUsuario(Long id);

    List<UsuarioDTOTeste> findCpfNome();

  
    
    




   
    
}
