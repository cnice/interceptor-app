import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    public WelcomeMsg: any;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.getWelcomeMessage().then(response => {
          this.WelcomeMsg = response;
        });
    }
}
