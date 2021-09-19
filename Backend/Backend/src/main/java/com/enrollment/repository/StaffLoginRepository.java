package com.enrollment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import com.enrollment.entity.StaffCourseAssignEntity;
import com.enrollment.entity.StaffEntity;
import com.enrollment.entity.StaffLoginEntity;

@Repository
@Transactional
public interface StaffLoginRepository extends JpaRepository<StaffLoginEntity, Long>{
	@Modifying
	@Query("SELECT s FROM StaffLoginEntity s WHERE s.loginId=:loginId")
	List<StaffLoginEntity> findByLoginId(@RequestParam("loginId") long loginId);
	
	@Modifying
	@Query("UPDATE StaffLoginEntity s SET s.password=:password where s.loginId=:loginId")
	void updateByLoginId( @Param("loginId")Long loginId,@Param("password") String password);

}
