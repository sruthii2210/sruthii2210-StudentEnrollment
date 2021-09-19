package com.enrollment.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EnrollmentModel {
	private Long rollNo;
	private String studentName;
	private String courseCode;
	private String courseName;
	private Long id;
	private String staffName;

	public EnrollmentModel(Long rollNo, String studentName, String courseCode, String courseName, Long id,
			String staffName) {
		super();
		this.rollNo = rollNo;
		this.studentName = studentName;
		this.courseCode = courseCode;
		this.courseName = courseName;
		this.id = id;
		this.staffName = staffName;
	}

}
