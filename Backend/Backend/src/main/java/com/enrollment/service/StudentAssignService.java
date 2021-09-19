package com.enrollment.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.enrollment.entity.StudentAssignEntity;
import com.enrollment.entity.StudentLoginEntity;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.RollNoNotFoundException;

public interface StudentAssignService {
	StudentAssignEntity addStudentAssignDetails(Long deptId,StudentAssignEntity studentAssign) throws DepartmentNotFoundException;
	List<StudentAssignEntity> getAllStudentAssignDetails(Long deptId) throws DepartmentNotFoundException;
	//public List<StudentAssignEntity> getAllStudentAssignDetails();
	ResponseEntity<String> updateStudentAssignDetails( Long deptId,Long rollNo, StudentAssignEntity studentAssign) throws DepartmentNotFoundException, RollNoNotFoundException;
	ResponseEntity<String> deleteStudentAssignDetails( Long deptId,Long rollNo) throws DepartmentNotFoundException, RollNoNotFoundException;
}
