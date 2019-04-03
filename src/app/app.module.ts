import { BrowserModule } from '@angular/platform-browser';

// Angular Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { AuthenticationService } from './service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserService } from './service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material/material.module';
import { MoreMaterialModules } from './material/material-module';

// Views
import { HomeComponent } from './home/home.component';

// API beer
import { FindBeerComponent } from './find-beer/find-beer.component';

// Comments
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './service/comments.service';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { EditCommentComponent } from './comments/edit-comment/edit-comment.component';

// CustomBeer
import { CustomBeerComponent } from './custom-beer/custom-beer.component';
import { CustomBeerService } from './service/custom-beer.service';
import { AddCustomBeerComponent } from './custom-beer/add-custom-beer/add-custom-beer.component';
import { EditCustomBeerComponent } from './custom-beer/edit-custom-beer/edit-custom-beer.component';

// CustomBrewery
import { CustomBreweryComponent } from './custom-brewery/custom-brewery.component';
import { CustomBreweryService } from './service/custom-brewery.service';
import { AddCustomBreweryComponent } from './custom-brewery/add-custom-brewery/add-custom-brewery.component';
import { EditCustomBreweryComponent } from './custom-brewery/edit-custom-brewery/edit-custom-brewery.component';

// Generic components
import { NavbarComponent } from './generic/navbar/navbar.component';

// Angular Core imports
import { NgModule } from '@angular/core';
import { SwapComponent } from './swap/swap.component';
import { ChatComponent } from './swap/chat/chat.component';
import { RateBeerService } from './service/ratebeer.service';
import { NavbarService } from './service/navbar.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    HomeComponent,
    NavbarComponent,

    FindBeerComponent,

    CommentsComponent,
    AddCommentComponent,
    EditCommentComponent,

    CustomBeerComponent,
    EditCustomBeerComponent,
    AddCustomBeerComponent,

    CustomBreweryComponent,
    EditCustomBreweryComponent,
    AddCustomBreweryComponent,
    SwapComponent,
    ChatComponent
  ],
  imports: [
    // Supporting modules
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MoreMaterialModules
  ],
  // Services
  providers: [
    AuthenticationService,
    UserService,
    CommentService,
    CustomBeerService,
    CustomBreweryService,
    RateBeerService,
    NavbarService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
