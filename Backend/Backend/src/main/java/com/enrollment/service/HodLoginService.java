package com.enrollment.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.enrollment.entity.HodLoginEntity;
import com.enrollment.exception.HodIdNotFoundException;
import com.enrollment.exception.LoginIdNotFoundException;

public interface HodLoginService {
	ResponseEntity<String> addHodLoginDetails(Long id,HodLoginEntity hodLoginDetails) throws HodIdNotFoundException;
	ResponseEntity<String> updateHodLoginDetails(Long loginId,String password,HodLoginEntity hodLoginDetails) throws HodIdNotFoundException, LoginIdNotFoundException;
	ResponseEntity<HodLoginEntity> getHodLoginDetails(Long hodId) throws HodIdNotFoundException;
}
