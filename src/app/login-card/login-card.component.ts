import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageComponentComponent } from '../image-component/image-component.component';
import { Router, RouterModule } from '@angular/router';

interface Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [FormsModule, CommonModule, ImageComponentComponent, RouterModule],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.scss'
})
export class LoginCardComponent {
  constructor(private apicall: TaskService, private route: Router) {}

  text = 'Login';
  msgfromLong = '';
  toastMessage = '';
  showToast = false;

  username: any;
  password: any;
  mobile: any;
  showflag = true;

  dologin(login: Login): void {
    this.apicall.getlogin(login).subscribe({
      next: (res: any) => {
        this.msgfromLong = res.status;
        localStorage.setItem('accessToken', res.accessToken);
        sessionStorage.setItem('accessToken', res.accessToken);
        this.showflag = false;

        this.navigateToDashboard();
        this.toastMessage = 'Login Successful!';
        this.showToast = true;

        setTimeout(() => {
          this.showToast = false;
          this.toastMessage = '';
        }, 3000);
      },
      error: (err: any) => {
        this.toastMessage = 'Login failed. Please try again.';
        this.showToast = true;

        setTimeout(() => {
          this.showToast = false;
          this.toastMessage = '';
        }, 3000);
      }
    });
  }

  fetchuser(): void {
    this.apicall.getuser({
      username: this.username
    }).subscribe((res: any) => {
      this.username = res.username;
      this.mobile = res.mobilenumber;
    });
  }

  navigateToDashboard(): void {
    this.route.navigate(['/dashboard']);
  }
}