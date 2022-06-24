import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  myData:any

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authUser(user).subscribe((data) => {
     
           this.myData=data
           console.log("data",this.myData.success);
           this.router.navigate(['dashboard']);
      
        if(this.myData.success) {
          this.authService.storeUserData(this.myData.token, this.myData.user);
          this.router.navigate(['dashboard']);
        } else {
          alert('Incorrect Details!')
          this.router.navigate(['login']);
        }
    });
  }


}
