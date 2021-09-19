package com.enrollment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.enrollment.entity.StudentAssignEntity;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.RollNoNotFoundException;
import com.enrollment.repository.DepartmentRepository;
import com.enrollment.repository.StudentAssignRepository;

@Service
public class StudentAssignServiceImpl implements StudentAssignService{
	@Autowired
	StudentAssignRepository studentAssignDAO;
	
	@Autowired
	DepartmentRepository departmentDAO;
	
	
	@Override
	public StudentAssignEntity addStudentAssignDetails(Long deptId,StudentAssignEntity student) throws DepartmentNotFoundException {
		return departmentDAO.findById(deptId)
				.map(department->{
					student.setDepartment(department);
					return studentAssignDAO.save(student);
				}).orElseThrow(()->new DepartmentNotFoundException("Department Not Found"));
				
	}
	 @Override
	  public List<StudentAssignEntity> getAllStudentAssignDetails(Long deptId) throws DepartmentNotFoundException{
		 if(!departmentDAO.existsById(deptId)) {
	            throw new DepartmentNotFoundException("Department not found!");
	        }
	    	
	    	return studentAssignDAO.findByDeptId(deptId);
	 }
	/*@Override
	public List<StudentAssignEntity> getAllStudentAssignDetails(){
		return studentAssignDAO.findAll();
	}*/
	 @Override
	 public ResponseEntity<String> updateStudentAssignDetails( Long deptId, Long rollNo, StudentAssignEntity studentAssign) throws DepartmentNotFoundException, RollNoNotFoundException{ 
		 if(!departmentDAO.existsById(deptId)) {
	    		throw new DepartmentNotFoundException("Department not found!");
	    	}
	        return studentAssignDAO.findById(rollNo)
	                .map(student->{
	                    student.setJoiningDate(studentAssign.getJoiningDate());
	                    student.setName(studentAssign.getName());	                  
	                    studentAssignDAO.save(student);
	                    return new ResponseEntity<String>("Student Assign Details Updated successfully!", new HttpHeaders(), HttpStatus.OK);
	                }).orElseThrow(()->new RollNoNotFoundException("Student Not Found!")); 
	 }
	 @Override
	 public ResponseEntity<String> deleteStudentAssignDetails( Long deptId, Long rollNo) throws DepartmentNotFoundException, RollNoNotFoundException{ 
		 if(!departmentDAO.existsById(deptId)) {
	    		throw new DepartmentNotFoundException("Department not found!");
	    	}
	        return studentAssignDAO.findById(rollNo)
	                .map(student->{	                                      
	                    studentAssignDAO.delete(student);
	                    return new ResponseEntity<String>("Student Assign Details Deleted successfully!", new HttpHeaders(), HttpStatus.OK);
	                }).orElseThrow(()->new RollNoNotFoundException("Student Not Found!")); 
	 }
}
