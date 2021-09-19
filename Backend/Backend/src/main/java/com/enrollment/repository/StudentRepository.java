package com.enrollment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.enrollment.entity.StudentAssignEntity;
import com.enrollment.entity.StudentEntity;

@Repository
public interface StudentRepository extends JpaRepository<StudentEntity,Long>{
	@Query("Select s from StudentEntity s where s.studentAssign.rollNo=:rollNo")
	 StudentEntity findByStudentId(@Param("rollNo") Long rollNo);
}
