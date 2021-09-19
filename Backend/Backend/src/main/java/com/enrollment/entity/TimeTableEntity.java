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
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Setter
@Getter
@NoArgsConstructor
//@ToString
@Entity
@Table(name="TimeTable")
public class TimeTableEntity implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Size(max=10)
	private String day;
	@Size(max=10)
	private String periodOne;
	@Size(max=10)
	private String periodTwo;
	@Size(max=10)
	private String periodThree;
	@Size(max=10)
	private String periodFour;
	@Size(max=10)
	private String periodFive;
	@Size(max=10)
	private String periodSix;
	@Size(max=10)
	private String periodSeven;
	@Size(max=10)
	private String periodEight;
	@ManyToOne(fetch=FetchType.LAZY,optional=false)
	@JoinColumn(name="semester",nullable=false)
	@JsonIgnore
	private SemesterEntity semester;
	@ManyToOne(fetch=FetchType.LAZY,optional=false)
	@JoinColumn(name="deptId",nullable=false)
	@JsonIgnore
	private DepartmentEntity department;
}
