import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './generic/navbar/navbar.component';
import { EditCommentComponent } from './comments/edit-comment/edit-comment.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { CustomBeerComponent } from './custom-beer/custom-beer.component';
import { FindBeerComponent } from './find-beer/find-beer.component';
import { EditCustomBeerComponent } from './custom-beer/edit-custom-beer/edit-custom-beer.component';
import { AddCustomBeerComponent } from './custom-beer/add-custom-beer/add-custom-beer.component';
import { CustomBreweryComponent } from './custom-brewery/custom-brewery.component';
import { EditCustomBreweryComponent } from './custom-brewery/edit-custom-brewery/edit-custom-brewery.component';
import { AddCustomBreweryComponent } from './custom-brewery/add-custom-brewery/add-custom-brewery.component';

const routes: Routes = [
  { path: '', component : HomeComponent },

  { path: 'login', component: LoginComponent },

  // Search
  { path: `search`, component: FindBeerComponent },
  { path: `search/:query/:page`, component: FindBeerComponent },

  // Users
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },

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

  // Testing routes
  { path: 'navbar', component: NavbarComponent },
];

export const routing = RouterModule.forRoot(routes);
