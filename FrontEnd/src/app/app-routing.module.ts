import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHodDetailsComponent } from './add-hod-details/add-hod-details.component';
import { AddStudentDetailsComponent } from './add-student-details/add-student-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HodForgotPasswordComponent } from './hod-forgot-password/hod-forgot-password.component';
import { HodLoginCredentialsComponent } from './hod-login-credentials/hod-login-credentials.component';
import { HodLoginComponent } from './hod-login/hod-login.component';
import { HodViewProfileComponent } from './hod-view-profile/hod-view-profile.component';
import { HODModuleComponent } from './hodmodule/hodmodule.component';
import { ListCourseDetailsComponent } from './list-course-details/list-course-details.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffModuleComponent } from './staff-module/staff-module.component';
import { StaffSignUpComponent } from './staff-sign-up/staff-sign-up.component';
import { StudentAssignListComponent } from './student-assign-list/student-assign-list.component';
import { StudentForgotPasswordComponent } from './student-forgot-password/student-forgot-password.component';
import { StudentLoginCredentialsComponent } from './student-login-credentials/student-login-credentials.component';
import { StudentLoginValidationComponent } from './student-login-validation/student-login-validation.component';
import { StudentModuleComponent } from './student-module/student-module.component';
import { UpdateAsignStudentComponent } from './update-asign-student/update-asign-student.component';
import { UpdateCourseDetailsComponent } from './update-course-details/update-course-details.component';
import { UpdateHodDetailsComponent } from './update-hod-details/update-hod-details.component';
const routes: Routes = [
  {path:'app-hodmodule',component:HODModuleComponent},
  {path:'updateHodDetails/:hodId',component:UpdateHodDetailsComponent},
  {path:'updateCourseDetails/:courseCode',component:UpdateCourseDetailsComponent},
  {path:'main',component:MainComponent},
  {path:'staffLogin',component:LoginComponent},
  {path:'hodLogin',component:HodLoginComponent},
  {path:'hodModule',component:HODModuleComponent},
  {path:'AddHodDetails',component:AddHodDetailsComponent},
  {path:'forgotPass',component:ForgotPasswordComponent},
  {path:'HodforgotPass',component:HodForgotPasswordComponent},
  {path:'hodLoginCredentials',component:HodLoginCredentialsComponent},
  {path:'studentModule',component:StudentModuleComponent},
  {path:'studentLogin',component:StudentLoginValidationComponent},
  {path:'addStudentPersonal',component:AddStudentDetailsComponent},
  {path:'studentLoginCredentials',component:StudentLoginCredentialsComponent},
  {path:'studentforgotPass',component:StudentForgotPasswordComponent},
  {path:'updateAssignList/:departmentId/:rollNo',component:UpdateAsignStudentComponent},
  {path:'staffMain',component:StaffModuleComponent},
  {path:'staffsignup',component:StaffSignUpComponent},
  {path:'loginCredits',component:StaffLoginComponent},
  {path:'staffLoginValid',component:LoginComponent},
  {path:'listCourseDetails',component:ListCourseDetailsComponent},
  {path:'studentAssignList',component:StudentAssignListComponent},
  {path:'hodViewProfile',component:HodViewProfileComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
