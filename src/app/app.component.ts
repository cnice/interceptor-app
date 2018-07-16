import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from './services/Auth-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  payload: any;

  constructor(private authService: AuthLoginService) {}

  ngOnInit(): void {
    this.authService.ValidateAccess().then(result => {
      this.payload = result;
    });
  }
}
