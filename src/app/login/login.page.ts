import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  showRegister: boolean = false;
  registerEmail: string = '';
  registerPassword: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error en login:', error);
      // Mostrar mensaje de error
    }
  }
 
  async register() {
    try {
      await this.authService.register(this.registerEmail, this.registerPassword);
      console.log('Registro exitoso');
      // Opcional: Auto-login después del registro
      await this.login();
    } catch (error) {
      console.error('Error en registro:', error);
      // Mostrar mensaje de error
    }
  }






  
}
