package com.enrollment.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.enrollment.entity.HodEntity;
import com.enrollment.exception.DepartmentNotFoundException;
import com.enrollment.exception.HodIdNotFoundException;
import com.enrollment.repository.DepartmentRepository;
import com.enrollment.repository.HodRepository;

@Service
@Transactional
public class HodServiceImpl implements HodService {
	@Autowired
	private HodRepository hodRepository;
	@Autowired
	private DepartmentRepository departmentRepository;
	@Override
	public ResponseEntity<String> addHodDetails(Long deptId,HodEntity hodEntity) throws DepartmentNotFoundException {
		return departmentRepository.findById(deptId)
				.map(department->{
					hodEntity.setDepartment(department);
					hodRepository.save(hodEntity);
					return new ResponseEntity<String>("Hod Details Added Successfully!",new HttpHeaders(),HttpStatus.OK);
				}).orElseThrow(()->new DepartmentNotFoundException("Department ID Not Found,Enter the department Id"));
	}

	@Override
	public List<HodEntity> getHodDetails() {
		return hodRepository.findAll();
	}

	@Override
	public HodEntity getParticularHodDetails(Long id) {
		return hodRepository.findById(id).get();
	}

	@Override
	public ResponseEntity<String> deleteHodDetails(Long id) throws HodIdNotFoundException {
		return hodRepository.findById(id).map(hod -> {
			hodRepository.delete(hod);
			return new ResponseEntity<String>("HOD Details deleted successfully!", new HttpHeaders(), HttpStatus.OK);
		}).orElseThrow(() -> new HodIdNotFoundException("HOD not found with the ID" + " " + id));
	}

	@Override
	public ResponseEntity<String> updateHodDetails(Long id, HodEntity hodEntity) throws HodIdNotFoundException {
		return hodRepository.findById(id).map(hod -> {
			hod.setFirstName(hodEntity.getFirstName());
			hod.setLastName(hodEntity.getLastName());
			hod.setDateOfBirth(hodEntity.getDateOfBirth());
			hod.setGender(hodEntity.getGender());
			hod.setQualification(hodEntity.getQualification());
			hod.setEmail(hodEntity.getEmail());
			hod.setContactNo(hodEntity.getContactNo());
			hod.setAddress(hodEntity.getAddress());
			hodRepository.save(hod);
			return new ResponseEntity<String>("HOD Details updated successfully!", new HttpHeaders(), HttpStatus.OK);
		}).orElseThrow(() -> new HodIdNotFoundException("HOD not found with the ID" + " " + id));
	}

}
