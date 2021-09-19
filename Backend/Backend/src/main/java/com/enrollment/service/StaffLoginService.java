package com.enrollment.service;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.enrollment.entity.StaffCourseAssignEntity;
import com.enrollment.entity.StaffEntity;
import com.enrollment.entity.StaffLoginEntity;
import com.enrollment.exception.CourseCodeNotFoundException;
import com.enrollment.exception.StaffIdNotFoundException;

public interface StaffLoginService {

public ResponseEntity<String> addLoginCredentials( Long id,StaffLoginEntity staff) throws StaffIdNotFoundException;
	
public ResponseEntity<String> updateLoginCredentials(Long loginId,String password, StaffLoginEntity staff) throws StaffIdNotFoundException;

public List<StaffLoginEntity> getLoginDetails(Long loginId) throws StaffIdNotFoundException;

}
