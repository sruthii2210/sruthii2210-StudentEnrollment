package com.enrollment.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentModel {
	private Long rollNo;
	private String firstName;
	private String lastName;
	private Long deptId;
	public StudentModel(Long rollNo, String firstName, String lastName,Long deptId) {
		super();
		this.rollNo = rollNo;
		this.firstName = firstName;
		this.lastName = lastName;
		this.deptId=deptId;
	}
	
	
}
