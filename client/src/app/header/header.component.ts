import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { User } from '../models/user.model';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']

})
export class HeaderComponent { 
	
	constructor(private router: Router){ }

	goHome() {
		this.router.navigate(['home']);
	}

	goAbout() {
		this.router.navigate(['about']);
	}

	goInventory() {
		this.router.navigate(['inventory'])
	}

	goLogout() {
		this.router.navigate(['']);
	}
}