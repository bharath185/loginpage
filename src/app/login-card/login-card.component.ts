import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.scss'
})
export class LoginCardComponent {

  constructor(private apicall: TaskService) {}

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
        this.showflag = false;

        // Show success toast
        this.toastMessage = 'Login Successful!';
        this.showToast = true;

        // Hide toast after 3 seconds
        setTimeout(() => {
          this.showToast = false;
          this.toastMessage = '';
        }, 3000);

        this.fetchuser();
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
}