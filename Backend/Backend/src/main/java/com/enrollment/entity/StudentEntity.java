package com.enrollment.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
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
@Table(name="StudentPersonal")
public class StudentEntity implements Serializable {
	 @Id
	 private Long personalId;
     @OneToOne(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
     @JoinColumn(name="rollNo",nullable=false)
     @JsonIgnore
 	 private StudentAssignEntity studentAssign;
	 @Column(nullable=false)
     private String firstName;
	 @Column(nullable=false)
     private String lastName;
	 @Column(nullable=false)
     private String dateOfBirth;
	 @Column(nullable=false)
     private String gender;
	 @Column(nullable=false,unique=true)
     private String email;
	 @Column(nullable=false)
     private Long contactNo;
	 @Column(nullable=false)
     private String address;
	public StudentEntity(Long personalId, StudentAssignEntity studentAssign, String firstName, String lastName,
			String dateOfBirth, String gender, String email, Long contactNo, String address) {
		super();
		this.personalId = personalId;
		this.studentAssign = studentAssign;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.email = email;
		this.contactNo = contactNo;
		this.address = address;
	}
}
