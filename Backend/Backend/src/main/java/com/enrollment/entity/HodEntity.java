package com.enrollment.entity;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name = "HODPersonal")
@Getter
@Setter
//@ToString
@NoArgsConstructor
public class HodEntity implements Serializable {
	@Id
	private Long id;
	@Column(nullable = false)
	private String firstName;
	@Column(nullable = false)
	private String lastName;
	@Temporal(TemporalType.DATE)
	private Date dateOfBirth;
	@Column(nullable = false)
	private String gender;
	@Column(nullable = false)
	private String qualification;
	@Column(nullable = false, unique = true)
	private String email;
	@Column(nullable = false)
	private Long contactNo;
	@Column(nullable = false)
	private String address;
	@OneToOne(fetch=FetchType.LAZY,optional=false)
	@JoinColumn(name="deptId",nullable=false)
	@JsonIgnore
	private DepartmentEntity department;
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "hodPersonal")
	private HodLoginEntity hodLoginCredentials;
}
