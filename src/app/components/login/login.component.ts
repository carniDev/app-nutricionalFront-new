import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 usuario:Usuario;


  constructor(private authService:AuthService,private router:Router){

    this.usuario = {
      id: null,
      nombre: '',
      email: '',
      fechaNacimiento:'',
      password: ''
    }
  }

  login(){

    const credentials = { email: this.usuario.email, password: this.usuario.password };
    this.authService.login(credentials.email,credentials.password).subscribe(
      () => {
       this.router.navigate(['dashboard']);
      }
    );
  }

  cancel(){
    this.router.navigate(['']);
  }

  }

