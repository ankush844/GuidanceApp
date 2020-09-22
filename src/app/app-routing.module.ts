import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreOpPlanningComponent } from './pre-op-planning/pre-op-planning.component';
import { BreadcrumbNavComponent } from './breadcrumb-nav/breadcrumb-nav.component';
import { IntraOpPlanningComponent } from './intra-op-planning/intra-op-planning.component';
import { BoneRegistrationComponent } from './bone-registration/bone-registration.component';
import { BonePreparationComponent } from './bone-preparation/bone-preparation.component';
import { JointAssessmentComponent } from './joint-assessment/joint-assessment.component';
import { SystemSetupComponent } from './system-setup/system-setup.component';
import { CaseCompletionComponent } from './case-completion/case-completion.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SplashComponent } from './splash/splash.component';
import { StartupComponent } from './startup/startup.component';
import { IntrOpPlanningMainComponent } from './intr-op-planning-main/intr-op-planning-main.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { CaseCompletionLandingComponent } from './case-completion-landing/case-completion-landing.component';
import { UserHomeComponent } from './user-managment-workflow/user-home/user-home.component';
import { AddNewUserComponent } from './user-managment-workflow/add-new-user/add-new-user.component';
import { NavigationComponent } from './user-managment-workflow/navigation/navigation.component';
import { ManageUserComponent } from './user-managment-workflow/manage-user/manage-user.component';
import { ResetPasswordComponent } from './user-managment-workflow/reset-password/reset-password.component';
import { EditUserComponent } from './user-managment-workflow/edit-user/edit-user.component';


const routes: Routes = [
  {
    path: '', component: SplashComponent,
  },
  {
    path: 'startup', component: StartupComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'header', component: HeaderComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'user-preferences', component: UserPreferencesComponent },
      { path: 'user-home', component: UserHomeComponent, },
      {

        path: 'user-management', component: NavigationComponent,
        children: [
          { path: 'manage-users', component: ManageUserComponent, },
          { path: 'add-new-user', component: AddNewUserComponent, },
          // { path: 'edit-user', component: EditUserComponent, },
          { path: 'reset-password', component: ResetPasswordComponent, },
        ]
      },
      {
        path: 'implant-details', component: BreadcrumbNavComponent,
        children: [
          { path: 'pre-op-planning', component: PreOpPlanningComponent, },
          { path: 'system-setup', component: SystemSetupComponent, },
          { path: 'bone-registration', component: BoneRegistrationComponent, },
          { path: 'joint-assesment', component: JointAssessmentComponent, },
          { path: 'intra-op-planning', component: IntrOpPlanningMainComponent, },
          { path: 'bone-preparation', component: BonePreparationComponent, },
          { path: 'case-completion', component: CaseCompletionLandingComponent, },
          {
            path: '', redirectTo: 'pre-op-planning', pathMatch: 'full'
          }
        ]
      },]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
