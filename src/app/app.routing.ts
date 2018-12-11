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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'comments/edit', component: EditCommentComponent},
  { path: 'comments/add', component: AddCommentComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: '', component : HomeComponent },
];

export const routing = RouterModule.forRoot(routes);
