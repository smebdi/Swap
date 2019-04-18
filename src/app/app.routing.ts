// Angular Core imports
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { EditCommentComponent } from './comments/edit-comment/edit-comment.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { CustomBeerComponent } from './custom-beer/custom-beer.component';
import { FindBeerComponent } from './find-beer/find-beer.component';
import { EditCustomBeerComponent } from './custom-beer/edit-custom-beer/edit-custom-beer.component';
import { AddCustomBeerComponent } from './custom-beer/add-custom-beer/add-custom-beer.component';
import { CustomBreweryComponent } from './custom-brewery/custom-brewery.component';
import { EditCustomBreweryComponent } from './custom-brewery/edit-custom-brewery/edit-custom-brewery.component';
import { AddCustomBreweryComponent } from './custom-brewery/add-custom-brewery/add-custom-brewery.component';
import { SwapComponent } from './swap/swap.component';
import { BeerDetailComponent } from './find-beer/detail/detail.component';
import { RegisterComponent } from './login/register/register.component';
import { VerifyComponent } from './login/verify/verify.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { EditComponent } from './login/edit/edit.component';

const routes: Routes = [
  { path: '', component : HomeComponent },

  // Login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'edit', component: EditComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:username', component: DashboardComponent },
  { path: 'profile/:username', component: DashboardComponent },

  // Search
  { path: `search`, component: FindBeerComponent },
  { path: `search/:query/:page`, component: FindBeerComponent },
  { path: `detail`, component: HomeComponent },
  { path: `detail/:bid`, component: BeerDetailComponent },

  // Swap Zone
  { path: 'swapzone', component: SwapComponent },

  // Comment
  { path: 'comments', component: CommentsComponent },
  { path: 'comments/edit', component: EditCommentComponent },
  { path: 'comments/add', component: AddCommentComponent },

  // Custom beer
  { path: 'beer', component: CustomBeerComponent },
  { path: 'beer/find', component: FindBeerComponent },
  { path: 'beer/edit', component: EditCustomBeerComponent },
  { path: 'beer/add', component: AddCustomBeerComponent },

  // Custom brewery
  { path: 'brewery', component: CustomBreweryComponent },
  { path: 'brewery/edit', component: EditCustomBreweryComponent },
  { path: 'brewery/add', component: AddCustomBreweryComponent },
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
