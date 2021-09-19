package com.enrollment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.enrollment.entity.TimeTableEntity;
@Transactional
@Repository
public interface TimeTableRepository extends JpaRepository<TimeTableEntity,Long>{
	@Modifying
	@Query("DELETE FROM TimeTableEntity t WHERE t.semester.id=:semId AND t.department.deptId=:deptId AND t.day=:day")
	void deleteByIdAndDay(@Param("semId") Long semId,@Param("deptId") Long deptId, @Param("day") String day);
	
	@Query("FROM TimeTableEntity t WHERE t.semester.id=:semId AND t.department.deptId=:deptId")
	List<TimeTableEntity> getBySemAndDeptId(@Param("semId") Long semId,@Param("deptId") Long deptId);
//
//	@Modifying
//	@Query("UPDATE TimeTableEntity t SET ")
//	void updateBySemIdAndDeptId(Long semId, Long deptId, String day,);
	
}
