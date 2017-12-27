import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/authentication/login-form/login-form.component';
import { RegisterFormComponent } from './components/authentication/register-form/register.form.component';
import { AuthGuard } from './core/guards/authentication/auth.guard';
import { ProjectsListComponent } from './components/projects/projects-list/projects.list.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';


export const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [ AuthGuard ] , component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'projects', loadChildren: "app/components/projects/projects.module#ProjectsModule" }
  //{ path: '**', component: PageNotFoundComponent }
]