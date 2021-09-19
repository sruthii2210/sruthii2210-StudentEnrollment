package com.enrollment.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enrollment.entity.StudentEntity;
import com.enrollment.exception.RollNoNotFoundException;
import com.enrollment.service.StudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin("http://localhost:4200")
public class StudentController {
     @Autowired
     private StudentService studentService;
     
     @PostMapping("/studentAssignInsertion/{rollNo}/studentinsertion")
     public ResponseEntity<String> addStudentDetails(@PathVariable("rollNo") Long rollNo,@RequestBody StudentEntity student) throws RollNoNotFoundException{
    	 StudentEntity s=studentService.addStudentDetails(rollNo,student);
    	 if(s==null) {
    		 throw new RollNoNotFoundException("Roll No is invalid");
    	 }
    	 else {
    		 return new ResponseEntity<String>("Student added Successsfully",new HttpHeaders(),HttpStatus.OK);
    	 }
     }
     
     @GetMapping("getAllstudentAssign/{rollNo}/getParticularStudent")
     public ResponseEntity<StudentEntity> getParticularStudentDetails(@PathVariable("rollNo") Long rollNo) throws RollNoNotFoundException{
    	 StudentEntity student=studentService.getParticularStudentDetails(rollNo);
    	 return new ResponseEntity<StudentEntity>(student,new HttpHeaders(),HttpStatus.OK);
    	 }
    
     /*@GetMapping("getAllstudentAssign/{rollNo}/getStudentById/{}")
     public ResponseEntity<StudentEntity> getStudentDetailById(@PathVariable("rollNo") Long rollNo) throws RollNoNotFoundException{
     StudentEntity s=studentService.getStudentDetailById(rollNo);
    			if (s == null) {
    				throw new RollNoNotFoundException("Roll No does not exist,so we couldn't fetch details");
    			} else {
    				return new ResponseEntity<StudentEntity>(s, new HttpHeaders(), HttpStatus.OK);
    			}
    		}*/

     @PutMapping("/updateStudent/{personalId}")
     public ResponseEntity<String> updateStudentDetails(@PathVariable("personalId") Long personalId,@RequestBody StudentEntity student) throws RollNoNotFoundException
     {
     return studentService.updateStudentDetails(personalId,student);
     }
     @DeleteMapping("/deleteStudent/{personalId}")
 	 public ResponseEntity<String> deleteStudentDetails(@PathVariable("personalId") Long personalId) throws RollNoNotFoundException {
 		StudentEntity s = studentService.deleteStudentDetails(personalId);
 		if (s == null) {
 			throw new RollNoNotFoundException("Delete Operation Unsuccessful,Provided Id does not exist");
 		} else {
 			return new ResponseEntity<String>("Employee deleted successfully", new HttpHeaders(), HttpStatus.OK);
 		}
 	}

}
     
     
     

