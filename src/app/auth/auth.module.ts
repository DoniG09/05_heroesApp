import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({

  declarations: [

    LoginComponent,
    RegistroComponent

  ],
  imports: [

    CommonModule,
    AuthRoutingModule

  ]

})
export class AuthModule { }
