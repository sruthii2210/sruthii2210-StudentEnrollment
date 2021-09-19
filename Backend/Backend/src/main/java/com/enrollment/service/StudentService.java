package com.enrollment.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import com.enrollment.entity.StudentEntity;
import com.enrollment.exception.RollNoNotFoundException;

public interface StudentService {
	StudentEntity addStudentDetails(Long rollNo,StudentEntity student) throws RollNoNotFoundException;
	StudentEntity getParticularStudentDetails(Long rollNo) throws RollNoNotFoundException;
	//StudentEntity getStudentDetailById(Long rollNo);
	ResponseEntity<String> updateStudentDetails(Long id,StudentEntity studentEntity) throws RollNoNotFoundException;
	StudentEntity deleteStudentDetails( Long id);
}
