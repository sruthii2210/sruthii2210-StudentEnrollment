package com.enrollment.entity;

import java.io.Serializable;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

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
@Table(name="StudentAssign")
public class StudentAssignEntity implements Serializable{
	  @Id
	  @Column(nullable=false,unique=true)
	  private Long rollNo;
	  @Column(nullable=false)
	  private String name;
	  @Column(nullable=false)
	  @Temporal(TemporalType.DATE)
	  private Date joiningDate;
	  @OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="studentAssign")
	  private StudentEntity user; 
	  @OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="studentAssign")
	  private StudentLoginEntity userId;
	  @ManyToOne(fetch=FetchType.LAZY)
	  @JoinColumn(name="deptId",nullable=false)
	  @JsonIgnore
	  private DepartmentEntity department;
	  @OneToMany(mappedBy = "student", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	  private Set<EnrollmentEntity> enrollment;
	  public StudentAssignEntity(Long rollNo, String name, Date joiningDate, StudentEntity user,
			DepartmentEntity department) {
		super();
		this.rollNo = rollNo;
		this.name = name;
		this.joiningDate = joiningDate;
		this.user = user;
		this.department = department;
	}
	  
}
