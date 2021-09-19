package com.enrollment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.enrollment.entity.StaffLoginEntity;
import com.enrollment.entity.StudentLoginEntity;
import com.enrollment.exception.RollNoNotFoundException;
import com.enrollment.exception.StaffIdNotFoundException;
import com.enrollment.repository.StudentAssignRepository;
import com.enrollment.repository.StudentLoginRepository;

@Service
public class StudentLoginServiceImpl implements StudentLoginService{
	@Autowired 
	StudentAssignRepository studentAssignDAO;
	
	@Autowired
	StudentLoginRepository studentLoginDAO;
	
	@Override
    public ResponseEntity<String> addStudentLoginDetails(Long rollNo, StudentLoginEntity studentLogin) throws RollNoNotFoundException {
        return studentAssignDAO.findById(rollNo)
                .map(student->{
                    studentLogin.setStudentAssign(student);
                    studentLoginDAO.save(studentLogin);
                    return new ResponseEntity<String>("Student Login Details added successfully!", new HttpHeaders(), HttpStatus.OK);
                }).orElseThrow(()->new RollNoNotFoundException("Student Not Found!"));
    }
	public ResponseEntity<String> updateStudentLoginDetails(Long userName,String password, StudentLoginEntity studentLogin) throws RollNoNotFoundException {
		if(!studentAssignDAO.existsById(userName)) {
    		throw new RollNoNotFoundException("Student not found!");
    	}
		studentLoginDAO.updateByLoginId(userName,password);
		return new ResponseEntity<String>("staffLoginDetails Updated Successfully!",new HttpHeaders(),HttpStatus.OK);
        
    }

	
	@Override
	public List<StudentLoginEntity> getLoginDetails(Long userName) {

	List<StudentLoginEntity> studentLoginDetails=(List<StudentLoginEntity>) studentLoginDAO.findByLoginId(userName);
	return  studentLoginDetails;

	}
		

 
}
