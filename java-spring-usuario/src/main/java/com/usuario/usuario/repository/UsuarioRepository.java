package com.usuario.usuario.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.usuario.usuario.model.Usuario;

public interface UsuarioRepository  extends JpaRepository<Usuario, Long>{

     Optional<Usuario> findByUsroCpf(String cpf);
     Optional<Usuario> findByUsroUsuario(String usuario);

    // @Query(value = "SELECT USRO_NOME,USRO_CPF, USRO_DT_NASCIMENTO FROM USUARIO WHERE usuario_id = ?1", nativeQuery = true)
    // List<String []> findByNomeAndCpf(Long id);


    @Query(value = "SELECT USRO_NOME,USRO_CPF, USRO_DT_NASCIMENTO FROM USUARIO", nativeQuery = true)
    List<String[]> findByNomeAndCpf();

    
    
    
}
