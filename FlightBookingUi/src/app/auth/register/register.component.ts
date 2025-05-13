import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule] // ✅ Add RouterModule here
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  role: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.username, this.password, this.role).subscribe(response => {
      this.router.navigate(['/login']); // ✅ This will now work
      alert("Registered Susccess. You can login now.")
    }, error => {
      console.error('Registration failed', error);
    });
  }
}
