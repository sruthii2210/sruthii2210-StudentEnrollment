package com.enrollment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.enrollment.entity.CourseEntity;
import com.enrollment.entity.DepartmentEntity;
import com.enrollment.entity.SemesterEntity;
import com.enrollment.entity.StaffAssignEntity;
import com.enrollment.entity.StaffCourseAssignEntity;
import com.enrollment.entity.StaffEntity;
import com.enrollment.exception.CourseCodeNotFoundException;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.StaffIdNotFoundException;
import com.enrollment.repository.CourseRepository;
import com.enrollment.repository.StaffAssignRepository;
import com.enrollment.repository.StaffCourseAssignRepository;

@Service
public class StaffCourseAssignServiceImpl implements StaffCourseAssignService{

@Autowired
StaffCourseAssignRepository staffCourseAssignRepository;

@Autowired
StaffAssignRepository staffAssignRepository;

@Autowired
CourseRepository courseRepository;

	@Override
	public ResponseEntity<String> addCourseDetails(Long newId,String courseId, StaffCourseAssignEntity staffCourseAssignDetails) throws StaffIdNotFoundException {
		
		if(!staffAssignRepository.existsById(newId))
			throw new StaffIdNotFoundException("staff id is not found");
		
		StaffAssignEntity staffAssign=staffAssignRepository.findById(newId).get();
		staffCourseAssignDetails.setStaffId(staffAssign);
		
		CourseEntity course=courseRepository.findById(courseId).get();
		staffCourseAssignDetails.setCourseId(course);
		
		staffCourseAssignRepository.save(staffCourseAssignDetails);
		return new ResponseEntity<String>("Course is assigned to staff Successfully!",new HttpHeaders(),HttpStatus.OK);

	
	}

	@Override
	public List<StaffCourseAssignEntity> getStaffDetailsByCourseId(String courseCode)
			throws CourseCodeNotFoundException {
		if(!courseRepository.existsById(courseCode))
		{
			throw new CourseCodeNotFoundException("Course Code Not Found!,Enter the valid id");
		}
		List<StaffCourseAssignEntity> staffDetails=staffCourseAssignRepository.getByCourseCode(courseCode);
		return staffDetails;
	
	}

	@Override
	public ResponseEntity<String> updateCourseDetails(Long newId, String courseId,
			StaffCourseAssignEntity staffCourseAssignDetails) throws StaffIdNotFoundException {
		
		
		if(!staffAssignRepository.existsById(newId))
		throw new StaffIdNotFoundException("staff id is not found");
		
		
		staffCourseAssignRepository.updateByCourseId(newId,courseId);
		return new ResponseEntity<String>("course Details Updated for staff Successfully!",new HttpHeaders(),HttpStatus.OK);
		

	}

	public ResponseEntity<String> deleteStaffCourse(Long newId,String courseId)throws StaffIdNotFoundException {
		
		if(!staffAssignRepository.existsById(newId))
			throw new StaffIdNotFoundException("staff id is not found");
		
		staffCourseAssignRepository.deleteByCourseId(courseId,newId);
		return new ResponseEntity<String>("staffCourse Details deleted Successfully!",new HttpHeaders(),HttpStatus.OK);
		 
	}

	@Override
	public List<Long> getStaffDetailsByCourseCode(String courseCode) throws CourseCodeNotFoundException {
		// TODO Auto-generated method stub
		if(!courseRepository.existsById(courseCode))
		{
			throw new CourseCodeNotFoundException("Course Code Not Found!,Enter the valid id");
		}
		List<Long> staffDetails=staffCourseAssignRepository.getByCourseId(courseCode);
		return staffDetails;
	}
	public List<String> getCourseDetailsByStaffId(Long newId)
            throws StaffIdNotFoundException {
        if(!staffAssignRepository.existsById(newId))
        {
            throw new StaffIdNotFoundException("StaffId Not Found!,Enter the valid id");
        }
        List<String> staffDetails=staffCourseAssignRepository.getCourseDetailsByStaffId(newId);
        return staffDetails;
   
    }

	
	
}




