package com.enrollment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enrollment.entity.EnrollmentEntity;
import com.enrollment.entity.EnrollmentModel;
import com.enrollment.entity.StudentModel;
import com.enrollment.exception.CourseCodeNotFoundException;
import com.enrollment.exception.RollNoNotFoundException;
import com.enrollment.exception.StaffIdNotFoundException;
import com.enrollment.service.EnrollmentService;

@RestController
@RequestMapping("/enrollment")
@CrossOrigin("http://localhost:4200")
public class EnrollmentController {
	@Autowired
	private EnrollmentService enrollmentServiceImpl;
	@PostMapping("/student/{rollNo}/course/{code}/staff/{staffId}/addEnrollmentDetails")
	public String addEnrollmentDetails(@PathVariable("rollNo") Long rollNo,@PathVariable("code") String code,@PathVariable("staffId") Long staffId,@RequestBody EnrollmentEntity enrollmentDetails) //throws RollNoNotFoundException, CourseCodeNotFoundException, StaffIdNotFoundException
	{
		return enrollmentServiceImpl.addEnrollmentDetails(rollNo,code,staffId,enrollmentDetails);
	}
	@GetMapping("/student/{rollNo}/semester/{semId}/department/{deptId}/getEnrollmentDetails")
	public ResponseEntity<List<EnrollmentModel>> getEnrollmentDetailsByRollNo(@PathVariable("rollNo") Long rollNo,@PathVariable("semId") Long semId,@PathVariable("deptId") Long deptId){
		List<EnrollmentModel> enrollmentDetails=enrollmentServiceImpl.getEnrollmentDetailsByRollNo(rollNo,semId,deptId);
		return new ResponseEntity<List<EnrollmentModel>>(enrollmentDetails,new HttpHeaders(),HttpStatus.OK);
	}
	@GetMapping("/course/{code}/staff/{staffId}/getStudents")
    public List<StudentModel> getStudents(@PathVariable("code") String code,@PathVariable("staffId") Long staffId) throws StaffIdNotFoundException, CourseCodeNotFoundException //throws RollNoNotFoundException, CourseCodeNotFoundException, StaffIdNotFoundException
    {
        return enrollmentServiceImpl.getStudents(code,staffId);
    }
}
