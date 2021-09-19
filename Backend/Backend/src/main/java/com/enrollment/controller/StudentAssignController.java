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

import com.enrollment.entity.StudentAssignEntity;
import com.enrollment.entity.StudentLoginEntity;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.RollNoNotFoundException;
import com.enrollment.service.StudentAssignService;

@RestController
@RequestMapping("/studentAssign")
@CrossOrigin("http://localhost:4200")
public class StudentAssignController {
	@Autowired
	private StudentAssignService studentAssignService;
	@PostMapping("/departmentInsertion/{deptId}/studentAssignInsertion")
    public ResponseEntity<String> addStudentAssignDetails(@PathVariable("deptId") Long deptId,@RequestBody StudentAssignEntity student) throws DepartmentNotFoundException{
   	 StudentAssignEntity s=studentAssignService.addStudentAssignDetails(deptId,student);
   	 if(s==null) {
   		 throw new DepartmentNotFoundException("Department id is invalid");
   	 }
   	 else {
   		 return new ResponseEntity<String>("Student is Assigned Successsfully",new HttpHeaders(),HttpStatus.OK);
   	 }
    }
	@GetMapping("/getParticularDeptDetails/{deptId}/getAllstudentAssign")
	public List<StudentAssignEntity> getAllStudentAssignDetails(@PathVariable("deptId") Long deptId) throws DepartmentNotFoundException{
		List<StudentAssignEntity> studentAssignList=studentAssignService.getAllStudentAssignDetails(deptId);
   	    return studentAssignList;
	}
	/*@GetMapping("/getAllstudentAssign")
	public List<StudentAssignEntity> getAllStudentAssignDetails() throws DepartmentNotFoundException{
		List<StudentAssignEntity> studentAssignList=studentAssignService.getAllStudentAssignDetails();
   	    return studentAssignList;
}*/
	@PutMapping("/departmentUpdation/{deptId}/updateStudentAssign/{rollNo}")
	public ResponseEntity<String> updateStudentAssignDetails(@PathVariable("deptId") Long deptId,@PathVariable("rollNo") Long rollNo,@RequestBody StudentAssignEntity student) throws RollNoNotFoundException, DepartmentNotFoundException
    {
       return studentAssignService.updateStudentAssignDetails(deptId,rollNo,student);
       
    }
	@DeleteMapping("/departmentDeletion/{deptId}/deleteStudentAssign/{rollNo}")
	public ResponseEntity<String> deleteStudentAssignDetails(@PathVariable("deptId") Long deptId,@PathVariable("rollNo") Long rollNo) throws RollNoNotFoundException, DepartmentNotFoundException
    {
       return studentAssignService.deleteStudentAssignDetails(deptId,rollNo);
       
    }
}