import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbNavComponent } from './breadcrumb-nav/breadcrumb-nav.component';
import { IntraOpPlanningComponent } from './intra-op-planning/intra-op-planning.component';
import { BonePreparationComponent } from './bone-preparation/bone-preparation.component';
import { HeaderComponent } from './header/header.component';
import { ImplantPlanCloudComponent } from './implant-plan-cloud/implant-plan-cloud.component';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { PreOpPlanningComponent } from './pre-op-planning/pre-op-planning.component';
import { BoneRegistrationComponent } from './bone-registration/bone-registration.component';
import { CaseCompletionComponent } from './case-completion/case-completion.component';
import { JointAssessmentComponent } from './joint-assessment/joint-assessment.component';
import { SystemSetupComponent } from './system-setup/system-setup.component';
import { PatientTimeoutComponent } from './patient-timeout/patient-timeout.component';
import { SystemErrorsComponent } from './system-errors/system-errors.component';
import { LoginComponent } from './login/login.component';
import { SplashComponent } from './splash/splash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartupComponent } from './startup/startup.component';
import { SystemPopupsComponent } from './system-popups/system-popups.component';
import { ImplantPlanUsbComponent } from './implant-plan-usb/implant-plan-usb.component';
import { SoftTissueLandmarksIntraComponent } from './soft-tissue-landmarks-intra/soft-tissue-landmarks-intra.component';
import { IntrOpPlanningMainComponent } from './intr-op-planning-main/intr-op-planning-main.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { CaseCompletionLandingComponent } from './case-completion-landing/case-completion-landing.component';
import { CaseCompletionDisconnectComponent } from './case-completion-disconnect/case-completion-disconnect.component';
import { CaseCompletionDisconnectExitComponent } from './case-completion-disconnect-exit/case-completion-disconnect-exit.component';
import { CaseCompletionSaveCloudPopupComponent } from './case-completion-save-cloud-popup/case-completion-save-cloud-popup.component';
import { CaseCompletionSaveUsbPopupComponent } from './case-completion-save-usb-popup/case-completion-save-usb-popup.component';
import { ChangePasswordPopupComponent } from './change-password-popup/change-password-popup.component';
import { UserHomeComponent } from './user-managment-workflow/user-home/user-home.component';
import { ManageUserComponent } from './user-managment-workflow/manage-user/manage-user.component';
import { AddNewUserComponent } from './user-managment-workflow/add-new-user/add-new-user.component';
import { NavigationComponent } from './user-managment-workflow/navigation/navigation.component';
import { ResetPasswordComponent } from './user-managment-workflow/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './user-managment-workflow/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreadcrumbNavComponent,
    IntraOpPlanningComponent,
    BonePreparationComponent,
    HeaderComponent,
    ImplantPlanCloudComponent,
    PreOpPlanningComponent,
    BoneRegistrationComponent,
    CaseCompletionComponent,
    JointAssessmentComponent,
    SystemSetupComponent,
    PatientTimeoutComponent,
    SystemErrorsComponent,
    LoginComponent,
    SplashComponent,
    StartupComponent,
    SystemPopupsComponent,
    ImplantPlanUsbComponent,
    SoftTissueLandmarksIntraComponent,
    IntrOpPlanningMainComponent,
    ChangePasswordComponent,
    UserPreferencesComponent,
    CaseCompletionLandingComponent,
    CaseCompletionDisconnectComponent,
    CaseCompletionDisconnectExitComponent,
    CaseCompletionSaveCloudPopupComponent,
    CaseCompletionSaveUsbPopupComponent,
    ChangePasswordPopupComponent,
    UserHomeComponent,
    ManageUserComponent,
    AddNewUserComponent,
    NavigationComponent,
    ResetPasswordComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
