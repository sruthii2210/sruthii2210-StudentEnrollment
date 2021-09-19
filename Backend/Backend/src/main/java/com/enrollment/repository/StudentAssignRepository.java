package com.enrollment.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.enrollment.entity.StudentAssignEntity;

@Repository
public interface StudentAssignRepository extends JpaRepository<StudentAssignEntity,Long>{
	//Optional<StudentAssignEntity> findByDeptId(Long deptId);
	@Query("Select s from StudentAssignEntity s where s.department.deptId=:deptId")
	//@Query(name="Select * from StudentAssignEntity s where s.department.deptId=:deptId",nativeQuery=true)
    List<StudentAssignEntity> findByDeptId(@Param("deptId") Long deptId);
}
