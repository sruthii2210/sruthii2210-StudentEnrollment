package com.enrollment.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.enrollment.entity.HodLoginEntity;
@Repository
@Transactional
public interface HodLoginRepository extends JpaRepository<HodLoginEntity,Long>{
	@Query("FROM HodLoginEntity h WHERE h.hodPersonal.id=:hodId")
	HodLoginEntity getByHodId(@Param("hodId") Long hodId);
	
	@Modifying
	@Query("UPDATE HodLoginEntity h SET h.password=:password WHERE h.hodPersonal.id=:loginId")
	void updateById(@Param("loginId") Long loginId, @Param("password") String password);
}
