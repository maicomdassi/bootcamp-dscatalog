package com.devsuperior.dscatalog.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.devsuperior.dscatalog.entities.Product;
import com.devsuperior.dscatalog.tests.Factory;

@DataJpaTest
public class ProductRepositoryTests {

	@Autowired
	private ProductRepository repository;
	
	private long exintingId;
	private long nonExintingId;
	private Product product;
	private long countTotalProducts;
	
	@BeforeEach
	void setUp() throws Exception{
		
		exintingId = 1L;
		nonExintingId = 100L;
		countTotalProducts = 25L;
		
		product = Factory.createProduct();
	}
	
	@Test
	public void findByIdShouldReturnNonEmptytOptionalWhenIdExists() {		
			
		Optional<Product> result = repository.findById(exintingId);		
		Assertions.assertTrue(result.isPresent());
	}
	@Test
	public void findByIdShouldReturnEmptytOptionaltWhenIdDoesNotExists() {		
			
		Optional<Product> result = repository.findById(nonExintingId);		
		Assertions.assertTrue(result.isEmpty());
	}
	
	@Test
	public void saveShouldPersistWithAutoIncrementWhenIdisNull() {
		product.setId(null);
		
		product = repository.save(product);
		
		Assertions.assertNotNull(product.getId());
		Assertions.assertEquals(countTotalProducts +1, product.getId());
	}
			
	@Test
	public void deleteShouldDeleteObjectWhenIdExists() {		
		
		repository.deleteById(exintingId);
		
		Optional<Product> result = repository.findById(exintingId);		
		Assertions.assertFalse(result.isPresent());
	}
	
	@Test
	public void deleteShouldThrowEmptyResultDataAccessExceptionWhenIdDoesNotExist() {		
				
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {			
			repository.deleteById(nonExintingId);
		});
				
	}
	
}
