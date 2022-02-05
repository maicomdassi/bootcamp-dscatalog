package com.devsuperior.dscatalog.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.devsuperior.dscatalog.entities.User;

public class UserDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@Size(min=5, max = 50, message="Deve conter entre 5 e 50 carcteres")
	@NotBlank(message = "Campo obrigatório")
	private String firstName;
	private String lastName;
	
	@Email(message="Favor entrar com um e-mail válido")
	private String email;
	
	private Set<RoleDTO> roles = new HashSet<>();

	public UserDTO() {}

	public UserDTO(Long id, String firstName, String lastName, String email) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;		
	}
	public UserDTO(User entity) {		
		id = entity.getId();
		firstName = entity.getFirstName();
		lastName = entity.getLastName();
		email = entity.getEmail();	
		entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<RoleDTO> getRoles() {
		return roles;
	}
	
	
	
}
