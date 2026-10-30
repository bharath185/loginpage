import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponentComponent } from './image-component/image-component.component';
import { LoginCardComponent } from './login-card/login-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login-page';
}
