package com.enrollment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import com.enrollment.entity.StaffCourseAssignEntity;
@Repository
@Transactional
public interface StaffCourseAssignRepository extends JpaRepository<StaffCourseAssignEntity,Long> {

	
	@Query("SELECT c FROM StaffCourseAssignEntity c WHERE c.courseId.courseCode=:courseCode")
	List<StaffCourseAssignEntity> getByCourseCode(@RequestParam("courseCode") String courseCode);

	@Modifying
	@Query("UPDATE StaffCourseAssignEntity s SET s.courseId.courseCode=:courseId where s.staffId.id=:newId")
	void updateByCourseId(@Param("newId") Long newId, @Param("courseId") String courseId);
	
	@Modifying
	@Query("DELETE from StaffCourseAssignEntity s where s.courseId.courseCode=:courseId and s.staffId.id=:newId")
	void deleteByCourseId(@Param("courseId") String courseId,@Param("newId") Long newId);
	
	@Query("SELECT c.staffId.id FROM StaffCourseAssignEntity c where c.courseId.courseCode=:courseCode")
	List<Long> getByCourseId(@Param("courseCode") String courseCode);
	
	@Query("SELECT c.courseId.courseCode FROM StaffCourseAssignEntity c WHERE  c.staffId.id=:newId ")
    List<String> getCourseDetailsByStaffId(@Param("newId") Long newId);
	
//	public static final String FIND_PROJECTS = "SELECT sc.auto_id,s.id,c.course_code FROM staff_course_assign sc join staff_assign s on sc.id=s.id join course c on sc.course_code=c.course_code WHERE c.course_code=?1";
//
//	@Query(value = FIND_PROJECTS, nativeQuery = true)
//	//public List<Object[]> findProjects();
//	List<StaffCourseAssignEntity> getByCourseCode( String courseCode);

}
