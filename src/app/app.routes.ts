import { LoginComponent } from './auth/components/login/login.component';
import { Routes } from '@angular/router';
import { HomeTareaComponent } from './tarea/pages/home-tarea/home-tarea.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ListTareaComponent } from './tarea/components/list-tarea/list-tarea.component';
import { AddTareaComponent } from './tarea/components/add-tarea/add-tarea.component';

export const routes: Routes = [
  {
    path: 'home', component: ListTareaComponent
  },
  {
    path:'add-tarea', component: AddTareaComponent
  },
  {
    path: 'login', loadComponent: () => import('./auth/components/login/login.component').then(m=>m.LoginComponent)
  },
  {
    path: 'register', loadComponent: ()=> import('./auth/components/register/register.component').then(m=>m.RegisterComponent)
  }
];


