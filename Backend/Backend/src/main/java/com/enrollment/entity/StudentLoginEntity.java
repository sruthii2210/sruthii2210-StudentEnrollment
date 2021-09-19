package com.enrollment.entity;

import java.io.Serializable;

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


@Entity
@Table(name="StudentLogin")
public class StudentLoginEntity implements Serializable{
	@OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JoinColumn(name="rollNo",nullable=false)
	@JsonIgnore
	private StudentAssignEntity studentAssign;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable=false,unique=true)
	private Long loginId;
	@Column(nullable=false)
	private Long userName;
	@Column(nullable=false)
	private String password;
	
	public StudentAssignEntity getStudentAssign() {
		return studentAssign;
	}
	public void setStudentAssign(StudentAssignEntity studentAssign) {
		this.studentAssign = studentAssign;
	}
	public StudentLoginEntity() {
		
	}
	public StudentLoginEntity(Long loginId, Long userName, String password) {
		super();
		this.loginId = loginId;
		this.userName = userName;
		this.password = password;
	}
	public Long getLoginId() {
		return loginId;
	}
	public void setLoginId(Long loginId) {
		this.loginId = loginId;
	}
	public Long getUserName() {
		return userName;
	}
	public void setUserName(Long userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	/*@Override
	public String toString() {
		return "StudentLoginEntity [loginId=" + loginId + ", userName=" + userName + ", password=" + password + "]";
	}
	*/
	
}
