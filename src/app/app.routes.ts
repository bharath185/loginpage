import { Routes } from '@angular/router';
import { LoginCardComponent } from './login-card/login-card.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

export const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginCardComponent, title: 'Login - Employee Management System' },
     { path: 'dashboard', component: DashboardAdminComponent, title: 'Dashboard - Employee Management System' },
];
