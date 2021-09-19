package com.enrollment.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@NoArgsConstructor
//@ToString
@Entity
@Table(name="Enrollment")
public class EnrollmentEntity implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Autoid;
	@ManyToOne(fetch=FetchType.LAZY,optional=false)
	@JoinColumn(name="rollNo",nullable=false)
	@JsonIgnore
	private StudentAssignEntity student;
	@ManyToOne(fetch=FetchType.LAZY,optional=false)
	@JoinColumn(name="courseCode",nullable=false)
	@JsonIgnore
	private CourseEntity course;
	@ManyToOne(fetch=FetchType.LAZY,optional=false)
	@JoinColumn(name="id",nullable=false)
	@JsonIgnore
	private StaffAssignEntity staff;
}
