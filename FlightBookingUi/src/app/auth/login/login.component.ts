import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule] // Add FormsModule here
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

login() {
  this.authService.login(this.username, this.password).subscribe(token => {
    localStorage.setItem('token', token);
    alert(`Login successful!\nJWT Token:\n${token}`);
    this.username = '';
    this.password = '';
    this.router.navigate(['/home']); 
  }, error => {
    console.error('Login failed', error);
    alert('Login failed. Please check your credentials.');
  });
}



}
