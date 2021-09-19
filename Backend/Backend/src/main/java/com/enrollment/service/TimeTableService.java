package com.enrollment.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import com.enrollment.entity.TimeTableEntity;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.SemesterNotFoundException;

public interface TimeTableService {
	ResponseEntity<String> addTimeTableDetails(Long semId,Long deptId,TimeTableEntity timeTableDetails) throws SemesterNotFoundException, DepartmentNotFoundException;
	ResponseEntity<String> deleteTimeTableDetails(Long semId,Long deptId,String day) throws SemesterNotFoundException, DepartmentNotFoundException;
	List<TimeTableEntity> getTimeTableDetails(Long semId,Long deptId) throws SemesterNotFoundException, DepartmentNotFoundException;
	//ResponseEntity<String> updateTimeTableDetails(Long semId,Long deptId,String day,TimeTableEntity timeTableDetails) throws SemesterNotFoundException, DepartmentNotFoundException;
}
