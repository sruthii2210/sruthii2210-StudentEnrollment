package com.enrollment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enrollment.entity.HodEntity;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.HodIdNotFoundException;
import com.enrollment.service.HodServiceImpl;

@RestController
@RequestMapping("/hod")
@CrossOrigin("http://localhost:4200")
public class HodController {
	@Autowired
	private HodServiceImpl hodServiceImpl;
	@PostMapping("/department/{deptId}/hodInsertion")
	public ResponseEntity<String> addHodDetails(@PathVariable("deptId") Long deptId,@RequestBody HodEntity hodEntity) throws HodIdNotFoundException, DepartmentNotFoundException
	{
		return hodServiceImpl.addHodDetails(deptId,hodEntity);
	}
	@GetMapping("/getHodDetails")
	public ResponseEntity<List<HodEntity>> getHodDetails()
	{
		List<HodEntity> hodDetailsList=hodServiceImpl.getHodDetails();
		return new ResponseEntity<List<HodEntity>>(hodDetailsList,new HttpHeaders(),HttpStatus.OK);
	}
	@GetMapping("/getParticularHodDetails/{id}")
	public ResponseEntity<HodEntity> getParticularHodDetails(@PathVariable("id")Long id) throws HodIdNotFoundException
	{
		HodEntity particularHodDetails=hodServiceImpl.getParticularHodDetails(id);
		if(particularHodDetails==null)
		{
			throw new HodIdNotFoundException("Enter Valid Id");
		}
		else
		{
			return new ResponseEntity<HodEntity>(particularHodDetails,new HttpHeaders(),HttpStatus.OK);
		}
	}
	@DeleteMapping("/hodDeletion/{id}")
	public ResponseEntity<String> deleteHodDetails(@PathVariable("id") Long id) throws HodIdNotFoundException
	{
		return hodServiceImpl.deleteHodDetails(id);
	}
	@PutMapping("/hodUpdation/{id}")
	public ResponseEntity<String> updateHodDetails(@PathVariable("id") Long id,@RequestBody HodEntity hodEntity) throws HodIdNotFoundException
	{
		return hodServiceImpl.updateHodDetails(id,hodEntity);
	}
	@ExceptionHandler(HodIdNotFoundException.class)
	public ResponseEntity<String> userNotFound(HodIdNotFoundException e)
	{
		return new ResponseEntity<String>(e.getMessage(),HttpStatus.OK);
	}
}