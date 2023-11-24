import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private auth:AuthService, private router:Router, private comidaService:ComidaService){}

  home(){
    this.comidaService.restablecerComida();
  }

  logout(){

   this.auth.logout();
   this.router.navigate(['']);

  }

  

}
