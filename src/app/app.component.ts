import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SimonDecants-Front';
  readonly APIUrl = 'http://localhost:3001/api/';

  constructor(private http: HttpClient) {}
  notes: any = [];

  refreshNotes() {
    this.http.get(this.APIUrl + 'GetNotes').subscribe((data) => {
      this.notes = data;
    });
  }

  ngOnInit(): void {
    this.refreshNotes();
  }
}
