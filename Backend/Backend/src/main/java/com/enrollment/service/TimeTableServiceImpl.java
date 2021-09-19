package com.enrollment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.enrollment.entity.DepartmentEntity;
import com.enrollment.entity.SemesterEntity;
import com.enrollment.entity.TimeTableEntity;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.SemesterNotFoundException;
import com.enrollment.repository.DepartmentRepository;
import com.enrollment.repository.SemesterRepository;
import com.enrollment.repository.TimeTableRepository;
@Service
public class TimeTableServiceImpl implements TimeTableService{
	@Autowired
	private SemesterRepository semesterRepository;
	@Autowired
	private DepartmentRepository departmentRepository;
	@Autowired
	private TimeTableRepository timeTableRepository;
	@Override
	public ResponseEntity<String> addTimeTableDetails(Long semId, Long deptId, TimeTableEntity timeTableDetails) throws SemesterNotFoundException, DepartmentNotFoundException {
		// TODO Auto-generated method stub
		if(!semesterRepository.existsById(semId))
		{
			throw new SemesterNotFoundException("Semester ID Not Found!");
		}
		if(!departmentRepository.existsById(deptId))
		{
			throw new DepartmentNotFoundException("Department ID Not Found!");
		}
		SemesterEntity semesterDetails=semesterRepository.findById(semId).get();
		timeTableDetails.setSemester(semesterDetails);
		DepartmentEntity departmentDetails=departmentRepository.findById(deptId).get();
		timeTableDetails.setDepartment(departmentDetails);
		timeTableRepository.save(timeTableDetails);
		return new ResponseEntity<String>("TimeTable Details Added Successfully!",new HttpHeaders(),HttpStatus.OK);
	}
	@Override
	public ResponseEntity<String> deleteTimeTableDetails(Long semId, Long deptId, String day) throws SemesterNotFoundException, DepartmentNotFoundException {
		// TODO Auto-generated method stub
		if(!semesterRepository.existsById(semId))
		{
			throw new SemesterNotFoundException("Semester ID Not Found!");
		}
		if(!departmentRepository.existsById(deptId))
		{
			throw new DepartmentNotFoundException("Department ID Not Found!");
		}
		timeTableRepository.deleteByIdAndDay(semId,deptId,day);
		return new ResponseEntity<String>("TimeTable Details deleted Successfully!",new HttpHeaders(),HttpStatus.OK);
	}
	@Override
	public List<TimeTableEntity> getTimeTableDetails(Long semId, Long deptId)
			throws SemesterNotFoundException, DepartmentNotFoundException {
		// TODO Auto-generated method stub
		if(!semesterRepository.existsById(semId))
		{
			throw new SemesterNotFoundException("Semester ID Not Found!");
		}
		if(!departmentRepository.existsById(deptId))
		{
			throw new DepartmentNotFoundException("Department ID Not Found!");
		}
		List<TimeTableEntity> timeTableDetails=timeTableRepository.getBySemAndDeptId(semId,deptId);
		return timeTableDetails;
	}
//	@Override
//	public ResponseEntity<String> updateTimeTableDetails(Long semId, Long deptId, String day,TimeTableEntity timeTableDetails)
//			throws SemesterNotFoundException, DepartmentNotFoundException {
//		if(!semesterRepository.existsById(semId))
//		{
//			throw new SemesterNotFoundException("Semester ID Not Found!");
//		}
//		if(!departmentRepository.existsById(deptId))
//		{
//			throw new DepartmentNotFoundException("Department ID Not Found!");
//		}
//		timeTableRepository.updateBySemIdAndDeptId(semId,deptId,day,timeTableDetails);
//		return new ResponseEntity<String>("TimeTable Details Updated Successfully!",new HttpHeaders(),HttpStatus.OK);
//	}
	
}
