package com.enrollment.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@NoArgsConstructor
//@ToString
@Entity
@Table(name="Department")
public class DepartmentEntity implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long deptId;
	@NotNull
	@Size(max=50)
	private String deptName;
	@OneToMany(mappedBy="department",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	private Set<CourseEntity> course;
	@OneToMany(mappedBy="department",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	private Set<TimeTableEntity> timetable;
	@OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="department")
	private HodEntity hodLogin;
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY,mappedBy="department",orphanRemoval=true)
	private Set<StudentAssignEntity> assignName;
	@OneToMany(mappedBy="dept",fetch = FetchType.LAZY)
	private Set<StaffAssignEntity> staffs;
	public DepartmentEntity(Long deptId, @NotNull @Size(max = 50) String deptName) {
		super();
		this.deptId = deptId;
		this.deptName = deptName;
	}
	
}
