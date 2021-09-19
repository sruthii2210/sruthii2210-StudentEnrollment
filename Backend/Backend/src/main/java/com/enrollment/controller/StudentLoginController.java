package com.enrollment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enrollment.entity.StaffLoginEntity;
import com.enrollment.entity.StudentLoginEntity;
import com.enrollment.exception.RollNoNotFoundException;
import com.enrollment.exception.StaffIdNotFoundException;
import com.enrollment.service.StudentLoginService;


@RestController
@RequestMapping("/studentLogin")
@CrossOrigin("http://localhost:4200")
public class StudentLoginController {
	
	     @Autowired
	     private StudentLoginService studentLoginService;
	     
	     @PostMapping("/studentAssignInsertion/{rollNo}/studentLogininsertion")
	     public ResponseEntity<String> addStudentLoginDetails(@PathVariable("rollNo") Long rollNo,@RequestBody StudentLoginEntity student) throws RollNoNotFoundException
	     {
	     return studentLoginService.addStudentLoginDetails(rollNo,student);
	     }
	     
	     @PutMapping("updateStudentLogin/{userName}/{password}")
	     public ResponseEntity<String> updateStudentLoginDetails(@PathVariable("userName") Long userName,@PathVariable("password") String password,@RequestBody StudentLoginEntity student) throws RollNoNotFoundException
	     {
	        return studentLoginService.updateStudentLoginDetails(userName,password,student);
	        
	     }
	     
	     @GetMapping("getLoginCredentials/{userName}")
	 	public ResponseEntity<List<StudentLoginEntity>> getLoginDetails(@PathVariable("userName") Long userName){
	 		
	 		List<StudentLoginEntity> studentDetails=studentLoginService.getLoginDetails(userName);
	 		
	 	return new ResponseEntity<List<StudentLoginEntity>>(studentDetails,new HttpHeaders(),HttpStatus.OK);
	 		
	 	
	 	}
}
