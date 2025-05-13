
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8071/api/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, { username, password }).pipe(
  map(response => {
    console.log('JWT Token:', response.token);
    return response.token;
  })
);

  }

  register(username: string, password: string, role: string): Observable<any> {
  return this.http.post('http://localhost:8071/api/auth/register', 
    { username, password, role }, 
    { responseType: 'text' as 'json' } // tells Angular to treat text as JSON
  );
}

}
