import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-search',
  standalone: true, // ✅ Ensure this is marked as standalone
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [FormsModule, CommonModule] // ✅ Add CommonModule here
})
export class SearchComponent {
  origin: string = '';
  destination: string = '';
  flights: any[] = [];

  constructor(private http: HttpClient) {}

  searchFlights() {
    const url = `http://localhost:8087/flights/search?origin=${this.origin}&destination=${this.destination}`;
    this.http.get<any[]>(url).subscribe(data => {
      this.flights = data;
    }, error => {
      console.error('Error fetching flights', error);
      alert('No flights found or server error.');
    });
  }
}
