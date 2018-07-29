import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-protected',
    templateUrl: 'protected.component.html'
})

export class ProtectedComponent implements OnInit {

    public ContactInfo: any;

    constructor(private authService: AuthService) { }

    ngOnInit() {

    }

    getUserContactInfo() {
        this.authService.getUserContactInfo().then(response => {
            this.ContactInfo = response.contactInfo;
        });
    }
}
