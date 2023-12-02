import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.comprobarToken();
  }


  login() {
    this.router.navigate(['login']);
  }

  registro() {
    this.router.navigate(['registro']);

  }

  comprobarToken() {
    const token = localStorage.getItem('auth_service');
    if (token != null) {
      this.authService.comprobarToken(token).subscribe(resp => {
        if (resp) {
          this.router.navigate(['dashboard']);
        } else {
          localStorage.removeItem('auth_service');
        }
      });

    }
  }
}
