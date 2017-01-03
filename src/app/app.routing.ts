/**
 * Created by lenovo on 12/31/2016.
 */
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { UserComponent } from "./component/user/user.component";
import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

