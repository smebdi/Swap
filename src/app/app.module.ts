import { BrowserModule } from '@angular/platform-browser';

// Angular Components
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthenticationService } from './service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material/material.module';
import { MoreMaterialModules } from './material/material-module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Views
import { HomeComponent } from './home/home.component';

// API beer
import { FindBeerComponent } from './find-beer/find-beer.component';

// Login
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { VerifyComponent } from './login/verify/verify.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { config } from './login/firebase.config.js'

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
import { FeedComponent } from './generic/feed/feed.component';

// Angular Core imports
import { NgModule } from '@angular/core';
import { SwapComponent } from './swap/swap.component';
import { ChatComponent } from './swap/chat/chat.component';
import { UntappdService } from './service/untappd.service';
import { RateBeerService } from './service/ratebeer.service';
import { NavbarService } from './service/navbar.service';
import { BeerDetailComponent } from './find-beer/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    // Firebase auth
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
    ForgotComponent,
    DashboardComponent,

    // Navigation
    NavbarComponent,

    // Search and detail
    FindBeerComponent,
    BeerDetailComponent,

    // Notification feed
    FeedComponent,

    CommentsComponent,
    AddCommentComponent,
    EditCommentComponent,

    CustomBeerComponent,
    EditCustomBeerComponent,
    AddCustomBeerComponent,

    CustomBreweryComponent,
    EditCustomBreweryComponent,
    AddCustomBreweryComponent,

    // Future components
    SwapComponent,
    ChatComponent,
  ],
  imports: [
    // Supporting modules
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MoreMaterialModules,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  // Services
  providers: [
    AuthenticationService,
    UserService,
    CommentService,
    CustomBeerService,
    CustomBreweryService,
    UntappdService,
    RateBeerService,
    NavbarService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
