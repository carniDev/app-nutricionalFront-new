import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistroComponent {
  usuario!:Usuario;

  constructor(private authService:AuthService, private router:Router){
    this.usuario =this.authService.getUsuario();
  }

  registrar(){
    this.authService.register(this.usuario).subscribe((respuesta)=>
    {
      console.log(respuesta);
      this.router.navigate(["/login"]);
    },
    (error)=>{
      console.error(error);
    }
    
    )
  }

  cancel(){
    this.router.navigate(['']);
  }

}
