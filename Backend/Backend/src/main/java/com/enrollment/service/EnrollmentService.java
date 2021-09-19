package com.enrollment.service;

import java.util.List;

import com.enrollment.entity.EnrollmentEntity;
import com.enrollment.entity.EnrollmentModel;
import com.enrollment.entity.StudentModel;
import com.enrollment.exception.CourseCodeNotFoundException;
import com.enrollment.exception.StaffIdNotFoundException;

public interface EnrollmentService {
	String addEnrollmentDetails(Long rollNo,String code,Long staffId,EnrollmentEntity enrollmentDetails);
	//throws RollNoNotFoundException, CourseCodeNotFoundException, StaffIdNotFoundException;
	List<EnrollmentModel> getEnrollmentDetailsByRollNo(Long rollNo,Long semId,Long deptId);
	List<StudentModel> getStudents(String code,Long staffId) throws StaffIdNotFoundException, CourseCodeNotFoundException, StaffIdNotFoundException;
}
