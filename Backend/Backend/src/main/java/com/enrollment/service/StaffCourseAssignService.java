package com.enrollment.service;

import java.util.List;

import org.springframework.http.ResponseEntity;


import com.enrollment.entity.StaffCourseAssignEntity;
import com.enrollment.exception.CourseCodeNotFoundException;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.StaffIdNotFoundException;


public interface StaffCourseAssignService {

	ResponseEntity<String> addCourseDetails(Long newId,String courseId,StaffCourseAssignEntity staffCourseAssignDetails) throws StaffIdNotFoundException;

	List<StaffCourseAssignEntity> getStaffDetailsByCourseId(String courseCode) throws  CourseCodeNotFoundException;

	ResponseEntity<String> updateCourseDetails(Long newId,String courseId,StaffCourseAssignEntity staffCourseAssignDetails) throws StaffIdNotFoundException;

	ResponseEntity<String> deleteStaffCourse(Long newId,String courseId) throws StaffIdNotFoundException;
	List<Long> getStaffDetailsByCourseCode(String courseCode) throws  CourseCodeNotFoundException;
	List<String> getCourseDetailsByStaffId(Long newId) throws  StaffIdNotFoundException;
}
