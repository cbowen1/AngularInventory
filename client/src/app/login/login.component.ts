import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component ({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [ LoginService ]
})

export class LoginComponent {
	public user : User;

	constructor(private loginService: Loginservice){
		this.user = new User();
	}
	
	validateLogin(){
		if(this.user.username && this.user.password){
			this.loginService.validateLogin(this.user).subscribe(result => {
			console.log('Result is ',result);
			}, error => {
			console.log('Error is ', error);
			});

		} else {
			alert('Enter username and password');
		}
	}
}
