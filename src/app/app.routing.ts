import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { CommentsComponent } from "./comments/comments.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from './generic/navbar/navbar.component';
import { EditCommentComponent } from './comments/edit-comment/edit-comment.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { CustomBeerComponent } from './custom-beer/custom-beer.component';
import { EditCustomBeerComponent } from './custom-beer/edit-custom-beer/edit-custom-beer.component';
import { AddCustomBeerComponent } from './custom-beer/add-custom-beer/add-custom-beer.component';

const routes: Routes = [
  { path: '', component : HomeComponent },

  { path: 'login', component: LoginComponent },

  // Users
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },  

  // Comment
  { path: 'comments', component: CommentsComponent },
  { path: 'comments/edit', component: EditCommentComponent},
  { path: 'comments/add', component: AddCommentComponent},

  // Custom beer
  { path: 'beer', component: CustomBeerComponent },
  { path: 'beer/edit', component: EditCustomBeerComponent},
  { path: 'beer/add', component: AddCustomBeerComponent},

  // Testing routes
  { path: 'navbar', component: NavbarComponent},
];

export const routing = RouterModule.forRoot(routes);
