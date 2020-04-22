import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-page/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationServiceService } from './services/authentication-service.service';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { AuthentiationGuardService } from './services/authentiation-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationServiceService,AuthentiationGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
