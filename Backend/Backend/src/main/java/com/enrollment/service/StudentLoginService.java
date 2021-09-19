package com.enrollment.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import com.enrollment.entity.StaffLoginEntity;
import com.enrollment.entity.StudentLoginEntity;
import com.enrollment.exception.RollNoNotFoundException;

public interface StudentLoginService {
	ResponseEntity<String> addStudentLoginDetails(Long rollNo, StudentLoginEntity studentLogin) throws RollNoNotFoundException;
	ResponseEntity<String> updateStudentLoginDetails(Long userName, String password, StudentLoginEntity studentLogin) throws RollNoNotFoundException;
	List<StudentLoginEntity> getLoginDetails(Long userName);
}
