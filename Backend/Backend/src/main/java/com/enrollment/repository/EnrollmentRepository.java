package com.enrollment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.enrollment.entity.EnrollmentEntity;
import com.enrollment.entity.EnrollmentModel;
import com.enrollment.entity.StudentModel;
@Repository
public interface EnrollmentRepository extends JpaRepository<EnrollmentEntity,Long>{
	@Query("SELECT new com.enrollment.entity.EnrollmentModel(e.student.rollNo,e.student.name,e.course.courseCode,e.course.courseName,e.staff.id,e.staff.name) FROM EnrollmentEntity e WHERE e.student.rollNo=:rollNo AND e.course.semester.id=:semId AND e.course.department.deptId=:deptId")
	List<EnrollmentModel> findByRollNo(@Param("rollNo") Long rollNo,@Param("semId") Long semId,@Param("deptId") Long deptId);

	
	@Query("SELECT new com.enrollment.entity.StudentModel(e.student.rollNo,e.student.user.firstName,e.student.user.lastName,e.student.department.deptId) FROM EnrollmentEntity e WHERE  e.staff.id=:staffId and e.course.courseCode=:code ")
    List<StudentModel> getStudents(@Param("code") String code,@Param("staffId") Long staffId);
}
