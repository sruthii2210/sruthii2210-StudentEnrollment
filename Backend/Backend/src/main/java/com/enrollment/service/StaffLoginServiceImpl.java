package com.enrollment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.enrollment.entity.StaffEntity;
import com.enrollment.entity.StaffLoginEntity;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.StaffIdNotFoundException;
import com.enrollment.repository.StaffLoginRepository;
import com.enrollment.repository.StaffRepository;


@Service
public class StaffLoginServiceImpl implements StaffLoginService{

	@Autowired
	StaffLoginRepository staffLoginRepository;
	
	@Autowired
	StaffRepository staffRepository;

	@Override
	public ResponseEntity<String> addLoginCredentials(Long id, StaffLoginEntity staffLogin) throws StaffIdNotFoundException {
		
		return staffRepository.findById(id)
                .map(staff->{
                    staffLogin.setUsername(staff);
                    staffLoginRepository.save(staffLogin);
                    return new ResponseEntity<String>("Staff Login Details added successfully!", new HttpHeaders(), HttpStatus.OK);
                }).orElseThrow(()->new StaffIdNotFoundException("Staff Not Found!"));
	}

	
	

	@Override
	public ResponseEntity<String> updateLoginCredentials(Long loginId,String password,StaffLoginEntity staffLogin)
			throws StaffIdNotFoundException {
		
		if(!staffRepository.existsById(loginId))
				throw new StaffIdNotFoundException("Staff id is not found");
		
		 staffLoginRepository.updateByLoginId(loginId,password);
		return new ResponseEntity<String>("staffLoginDetails Updated  Successfully!",new HttpHeaders(),HttpStatus.OK);
		
		
		
	}

	@Override
	public List<StaffLoginEntity> getLoginDetails(Long loginId) throws StaffIdNotFoundException {
		
		List<StaffLoginEntity> staffLoginDetails=(List<StaffLoginEntity>) staffLoginRepository.findByLoginId(loginId);
		 return staffLoginDetails;
			
	}

	
	
	
	
//	 @PutMapping("/addstaff/{id}/addLoginCredentials/{loginId}")
//    public Assignment updateAssignment(@PathVariable Long studentId,
//    								@PathVariable Long assignmentId,
//    								@Valid @RequestBody Assignment assignmentUpdated) {
//    	
//    	if(!studentRepository.existsById(studentId)) {
//    		throw new NotFoundException("Student not found!");
//    	}
//    	
//        return assignmentRepository.findById(assignmentId)
//                .map(assignment -> {
//                    assignment.setName(assignmentUpdated.getName());
//                    assignment.setGrade(assignmentUpdated.getGrade());
//                    return assignmentRepository.save(assignment);
//                }).orElseThrow(() -> new NotFoundException("Assignment not found!"));
//    }
	 
	}
	
	

