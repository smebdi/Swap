import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from "./app.routing";
import { AuthenticationService } from "./service/auth.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from "./list-user/list-user.component";
import { UserService } from "./service/user.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from "./material/material.module"

@NgModule({
  declarations: [
    // Components
    AppComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    // Supporting modules
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  // Services
  providers: [AuthenticationService, UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
