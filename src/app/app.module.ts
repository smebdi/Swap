import { BrowserModule } from '@angular/platform-browser';

// Angular Components
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
import { CustomMaterialModule } from "./material/material.module";
import { CommentsComponent } from './comments/comments.component'
import { CommentService } from './service/comments.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './generic/navbar/navbar.component'

// Angular Core imports
import { NgModule } from '@angular/core';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { EditCommentComponent } from './comments/edit-comment/edit-comment.component';

// Angular Material imports
// import { MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    CommentsComponent,
    HomeComponent,
    NavbarComponent,
    AddCommentComponent,
    EditCommentComponent,
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
  providers: [AuthenticationService, UserService, CommentService],

  bootstrap: [AppComponent]
})
export class AppModule { }
