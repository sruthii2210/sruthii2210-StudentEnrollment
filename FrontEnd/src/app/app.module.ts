import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HODModuleComponent } from './hodmodule/hodmodule.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddHodDetailsComponent } from './add-hod-details/add-hod-details.component';
import { ListHodDetailsComponent } from './list-hod-details/list-hod-details.component';
import { DataTablesModule } from 'angular-datatables';
import { UpdateHodDetailsComponent } from './update-hod-details/update-hod-details.component';
import { AddCourseDetailsComponent } from './add-course-details/add-course-details.component';
import { HodService } from './hod.service';
import { CourseService } from './course.service';
import { ListCourseDetailsComponent } from './list-course-details/list-course-details.component';
import { UpdateCourseDetailsComponent } from './update-course-details/update-course-details.component';
import { AddTimetableDetailsComponent } from './add-timetable-details/add-timetable-details.component';
import { TimeTableService } from './time-table.service';
import { ListTimeTableDetailsComponent } from './list-time-table-details/list-time-table-details.component';
import { StaffCourseAssignComponent } from './staff-course-assign/staff-course-assign.component';
import { AddEnrollmentDetailsComponent } from './add-enrollment-details/add-enrollment-details.component';
import { ViewEnrollmentDetailsComponent } from './view-enrollment-details/view-enrollment-details.component';
import { MainComponent } from './main/main.component';
import { EnrollmentService } from './enrollment.service';
import { StaffAssignService } from './staff-assign.service';
import { StaffCourseAssignService } from './staff-course-assign.service';
import { LoginComponent } from './login/login.component';
import { HodLoginComponent } from './hod-login/hod-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HodForgotPasswordComponent } from './hod-forgot-password/hod-forgot-password.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { HodLoginCredentialsComponent } from './hod-login-credentials/hod-login-credentials.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { HodViewProfileComponent } from './hod-view-profile/hod-view-profile.component';
import { AddStudentDetailsComponent } from './add-student-details/add-student-details.component';
import { StudentModuleComponent } from './student-module/student-module.component';
import { StudentLoginCredentialsComponent } from './student-login-credentials/student-login-credentials.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentLoginValidationComponent } from './student-login-validation/student-login-validation.component';
import { StudentForgotPasswordComponent } from './student-forgot-password/student-forgot-password.component';
import { UpdateStudentDetailsComponent } from './update-student-details/update-student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentAssignListComponent } from './student-assign-list/student-assign-list.component';
import { UpdateAsignStudentComponent } from './update-asign-student/update-asign-student.component';
import { StaffAssignComponent } from './staff-assign/staff-assign.component';
import { StaffModuleComponent } from './staff-module/staff-module.component';
import { StaffListByIdComponent } from './staff-list-by-id/staff-list-by-id.component';
import { StaffViewProfileComponent } from './staff-view-profile/staff-view-profile.component';
import { StaffSignUpComponent } from './staff-sign-up/staff-sign-up.component';
import { StaffSignupComponent } from './staff-signup/staff-signup.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { LogoutComponent } from './logout/logout.component';
import {MatButtonModule} from '@angular/material/button';
import { StudentEnrollListComponent } from './student-enroll-list/student-enroll-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HODModuleComponent,
    AddHodDetailsComponent,
    ListHodDetailsComponent,
    UpdateHodDetailsComponent,
    AddCourseDetailsComponent,
    ListCourseDetailsComponent,
    UpdateCourseDetailsComponent,
    AddTimetableDetailsComponent,
    ListTimeTableDetailsComponent,
    StaffCourseAssignComponent,
    AddEnrollmentDetailsComponent,
    ViewEnrollmentDetailsComponent,
    MainComponent,
    LoginComponent,
    HodLoginComponent,
    ForgotPasswordComponent,
    HodForgotPasswordComponent,
    StaffLoginComponent,
    HodLoginCredentialsComponent,
    ViewProfileComponent,
    HodViewProfileComponent,
    AddStudentDetailsComponent,
    StudentModuleComponent,
    StudentLoginCredentialsComponent,
    StudentLoginComponent,
    StudentLoginValidationComponent,
    StudentForgotPasswordComponent,
    UpdateStudentDetailsComponent,
    AddStudentComponent,
    StudentAssignListComponent,
    UpdateAsignStudentComponent,
    StaffAssignComponent,
    StaffModuleComponent,
    StaffListByIdComponent,
    StaffViewProfileComponent,
    StaffSignUpComponent,
    StaffSignupComponent,
    UpdateStaffComponent,
    LogoutComponent,
    StudentEnrollListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    DataTablesModule,
    MatButtonModule
  ],
  providers: [
    HodService,
    CourseService,
    TimeTableService,
    EnrollmentService,
    StaffAssignService,
    StaffCourseAssignService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
