import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component ({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [ LoginService ]
})

export class LoginComponent {
	public user : User;

	constructor(private loginService: LoginService, private router: Router){
		this.user = new User();
	}
	
	validateLogin(){
		if(this.user.username && this.user.password){
			this.loginService.validateLogin(this.user).subscribe(result => {
			console.log('Result is ',result);
			if(result['status'] === 'success') {
				this.router.navigate(['/home']);
			}else{
				alert('That username and/or password do not match our records. Please try again.')
			}
			}, error => {
			console.log('Error is ', error);
			});

		} else {
			alert('Enter username and password');
		}
	}
}
