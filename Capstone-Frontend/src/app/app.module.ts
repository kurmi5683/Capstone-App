import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    NotFoundComponent,
    NavbarComponent,
    ProfileComponent,
    LandingComponent,
    CustomFilterPipe,
    UnauthorizedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,CommonModule,FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
