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

import com.enrollment.entity.CourseEntity;
import com.enrollment.entity.StaffCourseAssignEntity;
import com.enrollment.exception.CourseCodeNotFoundException;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.StaffIdNotFoundException;
import com.enrollment.service.StaffCourseAssignService;


@RestController
@RequestMapping("/staffCourseAssign")
@CrossOrigin("http://localhost:4200")
public class StaffCourseAssignController {
	
	@Autowired
	private StaffCourseAssignService staffCourseAssignServiceImpl;
	
	@PostMapping("/addStaffAssign/{newId}/addCourse/{courseId}")
	public ResponseEntity<String> addCourseDetails(@PathVariable("newId") Long newId,@PathVariable("courseId") String courseId,@RequestBody StaffCourseAssignEntity staffCourseDetails) throws StaffIdNotFoundException
	{
		return staffCourseAssignServiceImpl.addCourseDetails(newId,courseId,staffCourseDetails);
	}
	
	
	@GetMapping("/addCourse/{courseId}/getStaff")
	public ResponseEntity<List<StaffCourseAssignEntity>> getStaffDetailsByCourseId(@PathVariable("courseId") String courseId) throws DepartmentNotFoundException, CourseCodeNotFoundException
	{
		List<StaffCourseAssignEntity>staffDetails=staffCourseAssignServiceImpl.getStaffDetailsByCourseId(courseId);
		return new ResponseEntity<List<StaffCourseAssignEntity>>(staffDetails,new HttpHeaders(),HttpStatus.OK);
	}
	@GetMapping("/addCourse/{courseId}/getStaffByCourse")
	public ResponseEntity<List<Long>> getStaffDetailsByCourseCode(@PathVariable("courseId") String courseId) throws DepartmentNotFoundException, CourseCodeNotFoundException
	{
		List<Long>staffDetails=staffCourseAssignServiceImpl.getStaffDetailsByCourseCode(courseId);
		return new ResponseEntity<List<Long>>(staffDetails,new HttpHeaders(),HttpStatus.OK);
	}
	
	@PutMapping("/addStaffAssign/{newId}/updateCourse/{courseId}")
	public ResponseEntity<String> updateCourseDetails(@PathVariable("newId") Long newId,@PathVariable("courseId") String courseId,@RequestBody StaffCourseAssignEntity staffCourseDetails) throws StaffIdNotFoundException
	{
		return staffCourseAssignServiceImpl.updateCourseDetails(newId,courseId,staffCourseDetails);
	}
	
	@DeleteMapping("/addStaffAssign/{newId}/addCourse/{courseId}/deleteStaffCourse")
	public ResponseEntity<String> deleteStaffCourse(@PathVariable("newId") Long newId,@PathVariable("courseId") String courseId) throws StaffIdNotFoundException
	{
		return staffCourseAssignServiceImpl.deleteStaffCourse(newId,courseId);
	}
	@GetMapping("/addStaffAssign/{newId}/getCourse")
    public ResponseEntity<List<String>> getCourseDetailsByStaffId(@PathVariable("newId") Long newId) throws StaffIdNotFoundException
    {
        List<String>staffDetails=staffCourseAssignServiceImpl.getCourseDetailsByStaffId(newId);
        return new ResponseEntity<List<String>>(staffDetails,new HttpHeaders(),HttpStatus.OK);
    }
	
}


