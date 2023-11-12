import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 usuario!:Usuario;


  constructor(private authService:AuthService){

    this.usuario=this.authService.getUsuario();
  }

  login(){

    const credentials = { email: this.usuario.email, password: this.usuario.password };
    this.authService.login(credentials.email).subscribe(
      (response) => {
       console.log(response)
      },
      (error) => {
        console.log("no se ha encontrado nada")
      }
    );
  }

  }

