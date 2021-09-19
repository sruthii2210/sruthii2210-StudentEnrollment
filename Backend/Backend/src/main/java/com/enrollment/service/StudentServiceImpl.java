package com.enrollment.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.enrollment.entity.StudentAssignEntity;
import com.enrollment.entity.StudentEntity;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.RollNoNotFoundException;
import com.enrollment.repository.StudentAssignRepository;
import com.enrollment.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
    @Autowired
    StudentAssignRepository studentAssignDAO;
	@Autowired
	StudentRepository studentDAO;
	
	@Override
	public StudentEntity addStudentDetails(Long rollNo,StudentEntity studentEntity) throws RollNoNotFoundException {
		return studentAssignDAO.findById(rollNo)
				.map(student->{
					studentEntity.setStudentAssign(student);
					return studentDAO.save(studentEntity);
				}).orElseThrow(()->new RollNoNotFoundException("Roll No Not Found"));
				
	}
	
	@Override
	public StudentEntity getParticularStudentDetails(Long rollNo) throws RollNoNotFoundException 
	{
		if(!studentAssignDAO.existsById(rollNo)) {
            throw new RollNoNotFoundException("Student not found!");
        }
    	
    	return studentDAO.findByStudentId(rollNo);
 }
	

	/*@Override
	public StudentEntity getStudentDetailById(Long rollNo) {
		return studentDAO.findById(rollNo).get();//get
	}
	*/
	@Override
	public ResponseEntity<String> updateStudentDetails(Long personalId,StudentEntity studentEntity) throws RollNoNotFoundException {
		return studentDAO.findById(personalId)
		.map(student->{
		student.setFirstName(studentEntity.getFirstName());
		student.setLastName(studentEntity.getLastName());
		student.setDateOfBirth(studentEntity.getDateOfBirth());
		student.setGender(studentEntity.getGender());
		student.setEmail(studentEntity.getEmail());
		student.setContactNo(studentEntity.getContactNo());
		student.setAddress(studentEntity.getAddress());
		studentDAO.save(student);
	return new ResponseEntity<String>("Student Details updated successfully!",new HttpHeaders(),HttpStatus.OK);
	}).orElseThrow(()->new RollNoNotFoundException("Student not found with the rollNo"+" "+personalId));
	}
	
	@Override
	public StudentEntity deleteStudentDetails(Long personalId) {
		StudentEntity studentEntity=studentDAO.findById(personalId).get();
		if(	studentEntity !=null)
			studentDAO.deleteById(personalId);
		return studentEntity;  
	}

	
}


