package com.enrollment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import com.enrollment.entity.StaffLoginEntity;
import com.enrollment.entity.StudentLoginEntity;

@Repository
@Transactional
public interface StudentLoginRepository extends JpaRepository<StudentLoginEntity,Long>{
	@Modifying
	@Query("UPDATE StudentLoginEntity s SET s.password=:password where s.userName=:userName")
	void updateByLoginId( @Param("userName")Long userName,@Param("password") String password);
	
    @Modifying
    @Query("SELECT s FROM StudentLoginEntity s WHERE s.userName=:userName")
    List<StudentLoginEntity> findByLoginId(@RequestParam("userName") long userName);
}
