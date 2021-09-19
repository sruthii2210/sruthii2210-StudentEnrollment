package com.enrollment.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
/*@Getter
@Setter
@NoArgsConstructor*/
//@ToString
@Entity
@Table(name="HODLogin")
public class HodLoginEntity implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long loginId;
	@NotNull
	private Long userId;//id of hod
	@NotNull
	@Size(max=50)
	private String password;
	@OneToOne(fetch=FetchType.LAZY,optional=false)
	@JoinColumn(name="hodId",nullable=false)
	@JsonIgnore
	private HodEntity hodPersonal;
	
	
	public HodLoginEntity() {
		super();
	}
	public HodLoginEntity(Long loginId, @NotNull Long userId, @NotNull @Size(max = 50) String password,
			HodEntity hodPersonal) {
		super();
		this.loginId = loginId;
		this.userId = userId;
		this.password = password;
		this.hodPersonal = hodPersonal;
	}
	public Long getLoginId() {
		return loginId;
	}
	public void setLoginId(Long loginId) {
		this.loginId = loginId;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public HodEntity getHodPersonal() {
		return hodPersonal;
	}
	public void setHodPersonal(HodEntity hodPersonal) {
		this.hodPersonal = hodPersonal;
	}
	@Override
	public String toString() {
		return "HodLoginEntity [loginId=" + loginId + ", userId=" + userId + ", password=" + password + ", hodPersonal="
				+ hodPersonal + "]";
	}
}
