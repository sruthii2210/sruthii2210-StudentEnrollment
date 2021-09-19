package com.enrollment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.enrollment.entity.HodLoginEntity;
import com.enrollment.exception.HodIdNotFoundException;
import com.enrollment.exception.LoginIdNotFoundException;
import com.enrollment.repository.HodLoginRepository;
import com.enrollment.repository.HodRepository;

@Service
public class HodLoginServiceImpl implements HodLoginService{
	@Autowired
	private HodLoginRepository hodLoginRepository;
	@Autowired
	private HodRepository hodRepository;
	@Override
	public ResponseEntity<String> addHodLoginDetails(Long id, HodLoginEntity hodLoginDetails) throws HodIdNotFoundException {
		// TODO Auto-generated method stub
		return hodRepository.findById(id)
				.map(hod->{
					hodLoginDetails.setHodPersonal(hod);
					hodLoginRepository.save(hodLoginDetails);
					return new ResponseEntity<String>("HOD Login Details added successfully!", new HttpHeaders(), HttpStatus.OK);
				}).orElseThrow(()->new HodIdNotFoundException("Hod Not Found!"));
	}
//	@Override
//	public ResponseEntity<String> updateHodLoginDetails(Long hodId, Long loginId, HodLoginEntity hodLoginDetails) throws HodIdNotFoundException, LoginIdNotFoundException {
//		// TODO Auto-generated method stub
//		if(!hodRepository.existsById(hodId))
//		{
//			throw new HodIdNotFoundException("HOD Id Not Found!");
//		}
//		return hodLoginRepository.findById(loginId)
//				.map(loginDetails->{
//					loginDetails.setUserId(hodLoginDetails.getUserId());
//					loginDetails.setPassword(hodLoginDetails.getPassword());
//					hodLoginRepository.save(loginDetails);
//					return new ResponseEntity<String>("HOD Login Details updated successfully!", new HttpHeaders(), HttpStatus.OK);
//				}).orElseThrow(()->new LoginIdNotFoundException("Login Id Not Found!"));
//	}
	
	@Override
	public ResponseEntity<HodLoginEntity> getHodLoginDetails(Long hodId) throws HodIdNotFoundException {
		// TODO Auto-generated method stub
		if(!hodRepository.existsById(hodId))
		{
			throw new HodIdNotFoundException("Hod ID Not Found!");
		}
		HodLoginEntity hodLoginDetails=hodLoginRepository.getByHodId(hodId);
		return new ResponseEntity<HodLoginEntity>(hodLoginDetails,new HttpHeaders(),HttpStatus.OK);
	}
@Override
public ResponseEntity<String> updateHodLoginDetails(Long loginId, String password, HodLoginEntity hodLoginDetails)
		throws HodIdNotFoundException, LoginIdNotFoundException {
	// TODO Auto-generated method stub
	if(!hodRepository.existsById(loginId))
	{
		throw new HodIdNotFoundException("Hod ID Not Found!");
	}
	hodLoginRepository.updateById(loginId,password);
	return null;
}
	
	
}
